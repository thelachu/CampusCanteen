import { useState } from "react";
import axios from "axios";
import "./AddMenuItem.css";

function AddMenuItem({ onClose }) {
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
      const response = await addMenuItem();
      axios.post("http://localhost:8080/api/menu-items", {
        name: formData.name,
        category: formData.category,
        meal: formData.meal,
        price: Number(formData.price),
        imageUrl: formData.imageUrl,
        available: formData.available,
      });

      console.log("Item added:", response.data);

      alert("Menu item added successfully! 🎉");

      onClose();
    } catch (error) {
      console.error("Error adding menu item:", error);

      setError(
        error.response?.data?.message ||
          "Failed to add menu item. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="model-overlay">
      <div className="menu-model">
        {/* Header */}

        <div className="model-header">
          <div>
            <span>Menu Management</span>
            <h2>Add New Item</h2>
          </div>

          <button type="button" className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Error */}

        {error && <div className="form-error">{error}</div>}

        {/* Form */}

        <form className="menu-form" onSubmit={handleSubmit}>
          {/* Item Name */}

          <div className="form-group full">
            <label htmlFor="name">Item Name</label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Example: Gobi Manchurian"
              required
            />
          </div>

          {/* Category */}

          <div className="form-group">
            <label htmlFor="category">Category</label>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}>
              <option value="Main Course">Main Course</option>

              <option value="Breakfast">Breakfast</option>

              <option value="Snacks">Snacks</option>

              <option value="Beverages">Beverages</option>
            </select>
          </div>

          {/* Meal */}

          <div className="form-group">
            <label htmlFor="meal">Meal</label>

            <select
              id="meal"
              name="meal"
              value={formData.meal}
              onChange={handleChange}>
              <option value="Breakfast">Breakfast</option>

              <option value="Lunch">Lunch</option>

              <option value="Snacks">Snacks</option>

              <option value="Dinner">Dinner</option>
            </select>
          </div>

          {/* Price */}

          <div className="form-group">
            <label htmlFor="price">Price</label>

            <input
              id="price"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="₹70"
              min="1"
              required
            />
          </div>

          {/* Image URL */}

          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>

            <input
              id="imageUrl"
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="/images/food.png"
            />
          </div>

          {/* Availability */}

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

          {/* Buttons */}

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
