import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const ProductList = ({ products }) => {

  if (products.length === 0) {
    return <p>No products available.</p>;
  }
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
