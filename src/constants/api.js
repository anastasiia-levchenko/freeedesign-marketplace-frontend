export const API_CONFIG = {
    BASE_URL: 'http://localhost:8080',
    API_PREFIX: '/api/v1/marketplace',
    IMAGES_BASE: '/images'
};

export const ENDPOINTS = {
    ARTWORKS: '/artworks'
};

export const getImageUrl = (fileName) => {
    return `${API_CONFIG.BASE_URL}${API_CONFIG.IMAGES_BASE}/${fileName}`;
};