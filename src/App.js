import React, { useState, useEffect } from 'react';
import { ArtWorkCard } from './components/ArtWorkCard';
import { artworksAPI } from './services/api';
import './styles/app.css';
import './styles/marketplace.css';

function App() {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        artworksAPI.getArtworks()
            .then(data => {
                setArtworks(data.content || []);
                setLoading(false);
            })
            .catch(error => {
                console.error("API Error:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading artworks...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="App">
            <h1>🎨 Art Marketplace</h1>
            <div className="artworks-grid">
                {artworks.map(artwork => (
                    <ArtWorkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
        </div>
    );
}

export default App;