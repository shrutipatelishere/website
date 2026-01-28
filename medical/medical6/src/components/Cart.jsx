import React from 'react';

const Cart = ({ items, onClose, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>
            <i className="fas fa-shopping-cart"></i>
            Your Cart
            <span className="cart-count">({items.length} items)</span>
          </h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-flask"></i>
              <h4>Your cart is empty</h4>
              <p>Add tests or packages to get started</p>
              <button className="browse-btn" onClick={onClose}>
                Browse Tests
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-icon">
                    <i className="fas fa-vial"></i>
                  </div>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <span className="item-price">₹{item.price}</span>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="summary-row">
                <span>Home Collection</span>
                <span className="free">FREE</span>
              </div>
              <div className="summary-row total">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>
            </div>
            <button className="checkout-btn">
              <span>Proceed to Book</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            <p className="secure-text">
              <i className="fas fa-lock"></i>
              100% Secure Payment
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
