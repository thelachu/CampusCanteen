const categories = [
  "All Items",
  "Main Course",
  "Breakfast",
  "Lunch",
  "Snacks",
  "Beverages",
];

function CategoryBar({ activeCategory, setActiveCategory }) {
  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={
            activeCategory === category ?
              "category-button active"
            : "category-button"
          }
          onClick={() => setActiveCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
