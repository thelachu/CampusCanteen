import { Plus } from "lucide-react";

function FoodCard({ item, onAdd }) {
  return (
    <article className="food-card">
      {/* Food Image */}
      <div className="food-image-wrapper">
        <img src={item.image} alt={item.name} className="food-image" />

        <button className="add-button" onClick={() => onAdd(item)}>
          <Plus size={17} />
          Add
        </button>
      </div>

      {/* Food Details */}
      <div className="food-details">
        <h3>{item.name}</h3>

        <strong>₹{item.price}</strong>
      </div>
    </article>
  );
}

export default FoodCard;
