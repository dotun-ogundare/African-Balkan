import React, { useState } from 'react'
import { FaPlus, FaInfoCircle } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import './Marketplace.css'

const Marketplace = () => {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = [
    'All',
    'African Literature',
    'Serbian Literature',
    'African Handcrafts',
    'Souvenirs',
    'Balkan Collections',
  ]

  const products = [
    {
      id: 1,
      name: 'Things Fall Apart',
      price: 18.99,
      image:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600',
      description: 'Classic African novel by Chinua Achebe',
      category: 'African Literature',
      fullDescription:
        'A masterpiece of African literature that tells the story of Okonkwo, an Igbo warrior in Nigeria. This novel explores themes of colonialism, tradition, and cultural change in pre-colonial and colonial Nigeria. Winner of numerous international awards and translated into 50+ languages.',
      details: [
        'Author: Chinua Achebe',
        'Published: 1958',
        'Pages: 209',
        'Language: English',
        'Publisher: Penguin Classics',
      ],
    },
    {
      id: 2,
      name: 'Half of a Yellow Sun',
      price: 22.5,
      image:
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600',
      description: "Chimamanda Ngozi Adichie's powerful novel",
      category: 'African Literature',
      fullDescription:
        "Set in Nigeria during the Biafran War, this epic novel follows the lives of characters caught up in the devastating conflict. Adichie's powerful storytelling brings to life the human cost of war and the resilience of the human spirit.",
      details: [
        'Author: Chimamanda Ngozi Adichie',
        'Published: 2006',
        'Pages: 433',
        'Orange Prize Winner',
        'New York Times Bestseller',
      ],
    },
    {
      id: 3,
      name: 'The Bridge on the Drina',
      price: 19.99,
      image:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600',
      description: 'Nobel Prize winning Serbian epic',
      category: 'Serbian Literature',
      fullDescription:
        "Ivo Andrić's Nobel Prize-winning novel chronicles four centuries of life around the famous bridge in Višegrad. This epic masterpiece explores the complex history of the Balkans through the lens of a single architectural marvel.",
      details: [
        'Author: Ivo Andrić',
        'Published: 1945',
        'Nobel Prize: 1961',
        'Pages: 314',
        'Translated into 30+ languages',
      ],
    },
    {
      id: 4,
      name: 'Dictionary of the Khazars',
      price: 21.0,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600',
      description: "Milorad Pavić's experimental masterpiece",
      category: 'Serbian Literature',
      fullDescription:
        'A revolutionary novel presented as three cross-referenced mini-encyclopedias, each from a different cultural perspective. This postmodern classic challenges traditional narrative structures and explores themes of identity and interpretation.',
      details: [
        'Author: Milorad Pavić',
        'Published: 1984',
        'Format: Lexicon novel',
        'International bestseller',
        'Available in male/female editions',
      ],
    },
    {
      id: 5,
      name: 'Handwoven Kente Cloth',
      price: 89.99,
      image:
        'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600',
      description: 'Authentic Ghanaian Kente textile',
      category: 'African Handcrafts',
      fullDescription:
        'Authentic Kente cloth handwoven by master weavers in Ghana. Each piece features intricate geometric patterns with symbolic meanings passed down through generations. The vibrant colors and detailed craftsmanship make each cloth a unique work of art.',
      details: [
        'Origin: Ghana',
        'Material: 100% Cotton',
        'Size: 2m x 1.5m',
        'Handwoven on traditional looms',
        'Each pattern has cultural significance',
      ],
    },
    {
      id: 6,
      name: 'African Djembe Drum',
      price: 145.0,
      image:
        'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600',
      description: 'Traditional hand-carved djembe',
      category: 'African Handcrafts',
      fullDescription:
        'Authentic African djembe drum hand-carved from a single piece of hardwood. The goatskin drumhead is hand-stretched and tuned by skilled craftsmen. Used in traditional ceremonies and modern music worldwide.',
      details: [
        'Origin: West Africa',
        'Material: Hardwood & Goatskin',
        'Height: 24 inches',
        'Hand-carved traditional patterns',
        'Includes tuning rope',
      ],
    },
    {
      id: 7,
      name: 'Maasai Beaded Jewelry',
      price: 45.5,
      image:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600',
      description: 'Handmade beaded necklace set',
      category: 'African Handcrafts',
      fullDescription:
        'Stunning handcrafted jewelry created by Maasai women using traditional beading techniques. Each piece features vibrant colors and intricate patterns that represent Maasai culture and identity. Your purchase directly supports artisan cooperatives.',
      details: [
        'Origin: Kenya/Tanzania',
        'Handmade by Maasai artisans',
        'Glass beads on leather base',
        'Fair trade certified',
        'Set includes necklace and bracelet',
      ],
    },
    {
      id: 8,
      name: 'Balkan Rakija Gift Set',
      price: 65.0,
      image:
        'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600',
      description: 'Traditional fruit brandy collection',
      category: 'Souvenirs',
      fullDescription:
        'A curated collection of premium Balkan rakija (fruit brandy) from Serbia and surrounding regions. Includes traditional flavors like plum, apricot, and quince in elegant miniature bottles, perfect as a gift or souvenir.',
      details: [
        '3 x 200ml bottles',
        'Flavors: Plum, Apricot, Quince',
        'Alcohol: 40% ABV',
        'Traditional distillation methods',
        'Decorative gift box included',
      ],
    },
    {
      id: 9,
      name: 'African Coffee Collection',
      price: 38.0,
      image:
        'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600',
      description: 'Premium Ethiopian & Kenyan beans',
      category: 'Souvenirs',
      fullDescription:
        "Discover the birthplace of coffee with this premium collection featuring Ethiopian Yirgacheffe and Kenyan AA beans. Each variety is carefully sourced from small farms and roasted to perfection, offering unique flavor profiles that showcase Africa's coffee heritage.",
      details: [
        '2 x 250g bags',
        'Single-origin beans',
        'Medium roast',
        'Fair trade & organic',
        'Tasting notes included',
      ],
    },
    {
      id: 10,
      name: 'Handpainted Egg Set',
      price: 52.0,
      image:
        'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600',
      description: 'Traditional Serbian Pisanica eggs',
      category: 'Balkan Collections',
      fullDescription:
        'Exquisite handpainted Easter eggs (Pisanica) created using centuries-old Serbian techniques. Each egg is meticulously decorated with traditional geometric and floral patterns using natural wax and dyes. A beautiful representation of Balkan folk art.',
      details: [
        'Set of 6 eggs',
        'Traditional wax-resist technique',
        'Natural dyes',
        'Wooden display stand included',
        'Each egg is unique',
      ],
    },
    {
      id: 11,
      name: 'Šajkača Traditional Cap',
      price: 28.99,
      image:
        'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600',
      description: 'Authentic Serbian military cap',
      category: 'Balkan Collections',
      fullDescription:
        'The Šajkača is a traditional Serbian cap with a distinctive boat-like shape. Originally worn by Serbian military forces, it has become a symbol of Serbian culture and identity. Handmade from quality wool using traditional methods.',
      details: [
        '100% Wool',
        'Traditional Serbian design',
        'Available sizes: S, M, L, XL',
        'Handmade by local craftsmen',
        'Black or grey colors',
      ],
    },
    {
      id: 12,
      name: 'Opanak Leather Shoes',
      price: 95.0,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600',
      description: 'Traditional Balkan peasant shoes',
      category: 'Balkan Collections',
      fullDescription:
        'Authentic Opanak shoes, traditional footwear worn throughout the Balkans for centuries. Hand-crafted from genuine leather using age-old techniques. The distinctive upturned toe and comfortable fit make these shoes both a cultural artifact and practical footwear.',
      details: [
        'Genuine leather',
        'Handmade by artisans',
        'Traditional construction',
        'Sizes: EU 37-45',
        'Comfortable leather insole',
      ],
    },
  ]

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const getCartTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)
  }

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

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

    // Prepare order details
    const orderDetails = {
      customerInfo: checkoutForm,
      items: cart.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        category: item.category,
      })),
      total: getCartTotal(),
      orderDate: new Date().toLocaleString(),
    }

    try {
      // Prepare order items as a formatted string
      const orderItemsList = cart
        .map(
          (item) =>
            `${item.name} (${item.category}) - Quantity: ${
              item.quantity
            } - Price: $${(item.price * item.quantity).toFixed(2)}`
        )
        .join('\n')

      // EmailJS configuration
      const SERVICE_ID = 'service_k0d89jh'
      const TEMPLATE_ID = 'template_ywmjn6j'
      const PUBLIC_KEY = '0XpHI_viHOMrvwxxO'

      // Send email via EmailJS
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

      // Clear cart and form after showing success message
      setTimeout(() => {
        setCart([])
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
    <div className="marketplace-page">
      <section className="page-hero">
        <div className="container">
          <h1>Marketplace</h1>
          <p>
            Support local artisans by purchasing authentic handcrafted goods
          </p>
        </div>
      </section>

      <section className="marketplace-content section-padding">
        <div className="container">
          <div className="marketplace-intro">
            <h2>Shop Authentic Goods</h2>
            <p>
              Every purchase directly supports artisans and communities in
              African and Balkan regions. All items are handcrafted with
              traditional techniques passed down through generations.
            </p>
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="product-overlay">
                    <button
                      className="view-details-btn"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <FaInfoCircle /> View Details
                    </button>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      <FaPlus /> Add to Cart
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button
                      className="btn-add"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Button */}
      <button
        className="cart-toggle"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <FaShoppingCart />
        {getCartCount() > 0 && (
          <span className="cart-badge">{getCartCount()}</span>
        )}
      </button>

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
              <FaShoppingCart />
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

      {/* Product Details Modal */}
      {selectedProduct && (
        <div
          className="product-modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              <FaTimes />
            </button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-info">
                <span className="modal-category">
                  {selectedProduct.category}
                </span>
                <h2>{selectedProduct.name}</h2>
                <p className="modal-price">${selectedProduct.price}</p>
                <p className="modal-description">
                  {selectedProduct.fullDescription}
                </p>
                <div className="modal-details">
                  <h4>Details:</h4>
                  <ul>
                    {selectedProduct.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="btn btn-primary modal-add-btn"
                  onClick={() => {
                    addToCart(selectedProduct)
                    setSelectedProduct(null)
                  }}
                >
                  <FaPlus /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  )
}

export default Marketplace
