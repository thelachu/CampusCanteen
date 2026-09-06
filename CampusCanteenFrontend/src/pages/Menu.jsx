import { useEffect, useMemo, useState } from "react";

import "./Menu.css";

import Sidebar from "../menu/SiderBar";
import TopBar from "../menu/TopBar";
import FoodCard from "../menu/FoodCard";
import Cart from "../menu/Cart";
import api from "../api/AxiosConfig";

// =========================
// CANTEEN MEAL TIMINGS
// =========================

const mealSchedule = [
  {
    name: "Breakfast",
    start: 7,
    end: 11,
    time: "07:00 - 11:00",
    icon: "☀️",
  },
  {
    name: "Lunch",
    start: 11,
    end: 15,
    time: "11:00 - 15:00",
    icon: "🍛",
  },
  {
    name: "Snacks",
    start: 15,
    end: 18,
    time: "15:00 - 18:00",
    icon: "🍪",
  },
  {
    name: "Dinner",
    start: 18,
    end: 21.5,
    time: "18:00 - 21:30",
    icon: "🍽️",
  },
];

// =========================
// GET CURRENT MEAL
// =========================

const getCurrentMeal = () => {
  const now = new Date();

  const currentHour = now.getHours() + now.getMinutes() / 60;

  return (
    mealSchedule.find(
      (meal) => currentHour >= meal.start && currentHour < meal.end,
    ) || null
  );
};

// =========================
// MENU COMPONENT
// =========================

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All Items");

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  // =========================
  // DATABASE MENU ITEMS
  // =========================

  const [menuItems, setMenuItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // =========================
  // CURRENT MEAL
  // =========================

  const currentMeal = useMemo(() => {
    return getCurrentMeal();
  }, []);

  // =========================
  // FETCH MENU FROM BACKEND
  // =========================

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/v1/menu-items", {
          params: {
            available: true,
          },
        });

        setMenuItems(response.data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);

        setError("Unable to load menu items. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // =========================
  // FILTER MENU ITEMS
  // =========================

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      const categoryMatch =
        activeCategory === "All Items" ||
        item.category?.toLowerCase() === activeCategory.toLowerCase();

      // Search filter
      const searchMatch = item.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [menuItems, activeCategory, search]);

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (item) => {
    setCart((previousCart) => {
      const existingItem = previousCart.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return previousCart.map((cartItem) =>
          cartItem.id === item.id ?
            {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem,
        );
      }

      return [
        ...previousCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id ?
          {
            ...item,
            quantity: item.quantity + 1,
          }
        : item,
      ),
    );
  };

  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id ?
            {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // =========================
  // REMOVE ITEM
  // =========================

  const removeItem = (id) => {
    setCart((previousCart) => previousCart.filter((item) => item.id !== id));
  };

  // =========================
  // UI
  // =========================

  return (
    <div className="menu-page">
      {/* LEFT SIDEBAR */}

      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* MAIN CONTENT */}

      <main className="menu-main">
        {/* SEARCH */}

        <TopBar search={search} setSearch={setSearch} />

        {/* PROMOTIONAL BANNER */}

        <section className="promo-banner">
          <div className="promo-content">
            <span>QUICK &amp; EASY</span>

            <h1>Pre-order &amp; Skip the Queue!</h1>

            <p>Order now, pay online &amp; collect with QR code</p>
          </div>
        </section>

        {/* CURRENT MEAL */}

        <section className="availability">
          <div className="availability-icon">
            {currentMeal ? currentMeal.icon : "🔒"}
          </div>

          <div>
            {currentMeal ?
              <>
                <span>{currentMeal.name} Time</span>

                <h3>
                  Showing {currentMeal.name.toLowerCase()} items available now
                </h3>

                <p>{currentMeal.time}</p>
              </>
            : <>
                <span>Canteen Closed</span>

                <h3>No food service available right now</h3>

                <p>Please check back during canteen hours</p>
              </>
            }
          </div>
        </section>

        {/* MENU HEADING */}

        <div className="menu-heading">
          <div>
            <span>Today's selection</span>

            <h1>
              {activeCategory === "All Items" ? "Canteen Menu" : activeCategory}
            </h1>
          </div>

          <span className="item-count">
            {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "item" : "items"}
          </span>
        </div>

        {/* LOADING */}

        {loading && (
          <div className="no-results">
            <h2>Loading menu...</h2>
            <p>Please wait while we fetch today's items.</p>
          </div>
        )}

        {/* ERROR */}

        {!loading && error && (
          <div className="no-results">
            <h2>Something went wrong</h2>

            <p>{error}</p>

            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        )}

        {/* FOOD GRID */}

        {!loading && !error && filteredItems.length > 0 && (
          <div className="food-grid">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} onAdd={addToCart} />
            ))}
          </div>
        )}

        {/* NO RESULTS */}

        {!loading && !error && filteredItems.length === 0 && (
          <div className="no-results">
            <h2>No items found</h2>

            <p>Try another category or search term.</p>
          </div>
        )}
      </main>

      {/* CART */}

      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
      />
    </div>
  );
}

export default Menu;
