import { useParams } from 'react-router-dom';
import productsData from '../data/productsData'; // Mock or Firebase data

const ProductPage = () => {
  const { productId } = useParams();
  const product = productsData.find((p) => p.id === productId); // Mock data retrieval

  const similarProducts = productsData.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="product-page">
      <div className="main-product">
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
      <div className="similar-products">
        <h2>Similar Products</h2>
        <div className="product-list">
          {similarProducts.map((similarProduct) => (
            <div key={similarProduct.id} className="product-card">
              <img src={similarProduct.image} alt={similarProduct.name} />
              <h3>{similarProduct.name}</h3>
              <p>{similarProduct.price}</p>
              <Link to={`/product/${similarProduct.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
