import React, { useState } from 'react'
import { FaPlus, FaInfoCircle } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import './Marketplace.css'

const Marketplace = () => {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

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
        'https://images.unsplash.com/photo-5128820790803-83ca734da794?w=600',
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

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  // Reset to page 1 when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 400, behavior: 'smooth' })
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
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {currentProducts.map((product) => (
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    className={`pagination-number ${
                      currentPage === index + 1 ? 'active' : ''
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

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
              ×
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
    </div>
  )
}

export default Marketplace
