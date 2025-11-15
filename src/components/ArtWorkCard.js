import { getImageUrl } from '../constants/api';
import '../styles/marketplace.css';

export const ArtWorkCard = ({ artwork }) => {
    const handleAddToCart = () => {
        console.log("Add to cart:", artwork.name);
        alert(`"${artwork.name}" added to cart!`);
    };

    return (
        <div className="artwork-card">
            <img
                src={getImageUrl(artwork.imageFileName)}
                alt={artwork.name}
                className="artwork-image"
            />
            <div className="card-body">
                <h3>{artwork.name}</h3>
                <p className="price">${artwork.price}</p>
                <p className="description">{artwork.notes}</p>
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};