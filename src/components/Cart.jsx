import React, { useState } from 'react'
import { FaTimes, FaPlus } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useCart } from '../context/CartContext'
import './Cart.css'

const Cart = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart()

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    additionalInfo: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleCheckoutFormChange = (e) => {
    setCheckoutForm({
      ...checkoutForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheckout = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const orderItemsList = cart
      .map(
        (item) =>
          `${item.name} (${item.category}) - Quantity: ${
            item.quantity
          } - Price: $${(item.price * item.quantity).toFixed(2)}`
      )
      .join('\n')

    try {
      const SERVICE_ID = 'service_k0d89jh'
      const TEMPLATE_ID = 'template_ywmjn6j'
      const PUBLIC_KEY = '0XpHI_viHOMrvwxxO'

      const templateParams = {
        customer_name: checkoutForm.name,
        customer_email: checkoutForm.email,
        customer_phone: checkoutForm.phone,
        delivery_address: checkoutForm.address,
        additional_info: checkoutForm.additionalInfo || 'None',
        order_items: orderItemsList,
        total_amount: getCartTotal(),
        order_date: new Date().toLocaleString(),
        payment_method: 'Cash on Delivery',
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

      setSubmitMessage(
        'Order placed successfully! You will receive a confirmation email shortly.'
      )

      setTimeout(() => {
        clearCart()
        setCheckoutForm({
          name: '',
          email: '',
          phone: '',
          address: '',
          additionalInfo: '',
        })
        setIsCheckoutOpen(false)
        setIsCartOpen(false)
        setSubmitMessage('')
      }, 3000)
    } catch (error) {
      console.error('Email sending failed:', error)
      console.error('Error details:', error.text || error.message)
      setSubmitMessage(
        `Error: ${
          error.text ||
          error.message ||
          'Unable to send email. Please check your EmailJS configuration.'
        }`
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Shopping Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTimes />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-amount">${getCartTotal()}</span>
            </div>
            <button
              className="btn btn-primary checkout-btn"
              onClick={() => {
                setIsCheckoutOpen(true)
                setIsCartOpen(false)
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div
          className="checkout-modal-overlay"
          onClick={() => setIsCheckoutOpen(false)}
        >
          <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsCheckoutOpen(false)}
            >
              <FaTimes />
            </button>
            <div className="checkout-content">
              <h2>Checkout</h2>
              <p className="checkout-subtitle">
                Complete your order - Payment on Delivery
              </p>

              <div className="checkout-summary">
                <h3>Order Summary</h3>
                <div className="checkout-items">
                  {cart.map((item) => (
                    <div key={item.id} className="checkout-item">
                      <span className="checkout-item-name">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="checkout-item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="checkout-total">
                  <span>Total Amount:</span>
                  <span className="checkout-total-amount">
                    ${getCartTotal()}
                  </span>
                </div>
                <p className="payment-method">
                  <strong>Payment Method:</strong> Cash on Delivery
                </p>
              </div>

              <form onSubmit={handleCheckout} className="checkout-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={checkoutForm.name}
                    onChange={handleCheckoutFormChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={checkoutForm.email}
                    onChange={handleCheckoutFormChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={checkoutForm.phone}
                    onChange={handleCheckoutFormChange}
                    required
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Delivery Address *</label>
                  <textarea
                    id="address"
                    name="address"
                    value={checkoutForm.address}
                    onChange={handleCheckoutFormChange}
                    required
                    rows="3"
                    placeholder="Enter your complete delivery address"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="additionalInfo">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={checkoutForm.additionalInfo}
                    onChange={handleCheckoutFormChange}
                    rows="3"
                    placeholder="Any special instructions or notes for your order"
                  ></textarea>
                </div>

                {submitMessage && (
                  <div
                    className={`submit-message ${
                      submitMessage.includes('success') ? 'success' : 'error'
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary submit-order-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
