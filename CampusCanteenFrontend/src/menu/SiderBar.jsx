import { Home, Utensils, Sun, Soup, Cookie, Coffee } from "lucide-react";

const categories = [
  {
    name: "All Items",
    icon: Home,
  },
  {
    name: "Main Course",
    icon: Utensils,
  },
  {
    name: "Breakfast",
    icon: Sun,
  },
  {
    name: "Lunch",
    icon: Soup,
  },
  {
    name: "Snacks",
    icon: Cookie,
  },
  {
    name: "Beverages",
    icon: Coffee,
  },
];

function Sidebar({ activeCategory, setActiveCategory }) {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Utensils size={24} />
        </div>

        <div className="logo-text">
          <strong>Campus</strong>
          <span>Canteen</span>
        </div>
      </div>

      {/* Categories */}
      <nav className="sidebar-menu">
        {categories.map((category) => {
          const Icon = category.icon;

          const active = activeCategory === category.name;

          return (
            <button
              key={category.name}
              className={`sidebar-item ${active ? "active" : ""}`}
              onClick={() => setActiveCategory(category.name)}>
              <Icon size={25} />

              <span>{category.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
