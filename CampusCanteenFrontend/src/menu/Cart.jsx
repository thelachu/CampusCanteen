import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";

function Cart({ cart, increaseQuantity, decreaseQuantity, removeItem }) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <aside className="cart-panel">
      {/* Cart Header */}
      <div className="cart-header">
        <div className="cart-title">
          <ShoppingBag size={21} />

          <h2>My Order</h2>
        </div>

        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ?
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <ShoppingBag size={30} />
          </div>

          <h3>Your cart is empty</h3>

          <p>Add items from the menu to get started.</p>
        </div>
      : <>
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h4>{item.name}</h4>

                  <span>₹{item.price}</span>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      <Minus size={14} />
                    </button>

                    <strong>{item.quantity}</strong>

                    <button onClick={() => increaseQuantity(item.id)}>
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  className="remove-item"
                  onClick={() => removeItem(item.id)}>
                  <Trash2 size={17} />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Bottom */}
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>

              <strong>₹{totalPrice}</strong>
            </div>

            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      }
    </aside>
  );
}

export default Cart;
