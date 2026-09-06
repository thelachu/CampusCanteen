import { useState } from "react";
import "./AddMenuItem.css";
import { addMenuItem } from "../api/menuService";

function AddMenuItem({ onClose, onItemAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Main Course",
    meal: "Lunch",
    price: "",
    imageUrl: "",
    available: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = {
        name: formData.name,
        category: formData.category,
        meal: formData.meal,
        price: Number(formData.price),
        imageUrl: formData.imageUrl,
        available: formData.available,
      };

      console.log("Sending:", data);

      const savedItem = await addMenuItem(data);

      console.log("Saved:", savedItem);

      alert("Menu item added successfully!");

      if (onItemAdded) {
        onItemAdded(savedItem);
      }

      onClose();
    } catch (error) {
      console.error("Failed to add menu item:", error);

      setError(error.response?.data?.message || "Failed to add menu item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="model-overlay">
      <div className="menu-model">
        <div className="model-header">
          <div>
            <span>Menu Management</span>
            <h2>Add New Item</h2>
          </div>

          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="menu-form" onSubmit={handleSubmit}>
          {/* ITEM NAME */}

          <div className="form-group full">
            <label>Item Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Example: Gobi Manchurian"
              required
            />
          </div>

          {/* CATEGORY */}

          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}>
              <option value="Main Course">Main Course</option>

              <option value="Breakfast">Breakfast</option>

              <option value="Snacks">Snacks</option>

              <option value="Beverages">Beverages</option>
            </select>
          </div>

          {/* MEAL */}

          <div className="form-group">
            <label>Meal</label>

            <select name="meal" value={formData.meal} onChange={handleChange}>
              <option value="Breakfast">Breakfast</option>

              <option value="Lunch">Lunch</option>

              <option value="Snacks">Snacks</option>

              <option value="Dinner">Dinner</option>
            </select>
          </div>

          {/* PRICE */}

          <div className="form-group">
            <label>Price</label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="₹70"
              min="1"
              required
            />
          </div>

          {/* IMAGE */}

          <div className="form-group">
            <label>Image URL</label>

            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/food.jpg"
            />
          </div>

          {/* AVAILABILITY */}

          <div className="availability-toggle">
            <label className="switch">
              <input
                type="checkbox"
                name="available"
                checked={formData.available}
                onChange={handleChange}
              />

              <span className="slider"></span>
            </label>

            <div>
              <strong>Available</strong>

              <p>Show this item on the menu</p>
            </div>
          </div>

          {/* ERROR */}

          {error && <p className="form-error">{error}</p>}

          {/* BUTTONS */}

          <div className="modal-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={loading}>
              Cancel
            </button>

            <button type="submit" className="save-item-btn" disabled={loading}>
              {loading ? "Adding..." : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMenuItem;
