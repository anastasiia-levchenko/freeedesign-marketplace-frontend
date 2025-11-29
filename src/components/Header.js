import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const checkAuthStatus = () => {
        fetch("http://localhost:8080/api/auth/status", {
            credentials: "include"
        })
            .then(res => {
                if (res.status === 401) return { authenticated: false };
                return res.json();
            })
            .then(data => setIsAuthenticated(data.authenticated))
            .catch(() => setIsAuthenticated(false));
    };

    useEffect(() => {
        checkAuthStatus();
    }, []);

    if (isAuthenticated === null) return null;

    return (
        <header className="fd-header">
            <div className="fd-header-container">
                <div className="fd-logo-section">
                    <Link to="/marketplace" className="fd-logo-link">
                        <img
                            src="/images/FD_logo.png"
                            alt="Art Marketplace Logo"
                            className="fd-logo-image"
                        />
                        <span className="fd-logo-text">Art Marketplace</span>
                    </Link>
                </div>

                <nav className="fd-navigation">
                    <Link to="/marketplace" className="fd-nav-link">
                        🎨 MarketPlace
                    </Link>

                    <Link to="/cart" className="fd-nav-link">
                        🛒 Cart
                    </Link>

                    {isAuthenticated && (
                        <a
                            href="http://localhost:8080/artworks"
                            className="fd-nav-link"
                        >
                            🖼️ My Artworks
                        </a>
                    )}

                    {isAuthenticated ? (
                        <form
                            method="post"
                            action="http://localhost:8080/logout"
                            style={{ display: 'inline' }}
                            onSubmit={() => setTimeout(checkAuthStatus, 100)}
                        >
                            <button type="submit" className="fd-login-logout-btn">
                                Logout
                            </button>
                        </form>
                    ) : (
                        <a href="http://localhost:8080/login" className="fd-login-logout-btn">
                            Login
                        </a>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;
