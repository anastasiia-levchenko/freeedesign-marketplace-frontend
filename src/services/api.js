import { API_CONFIG, ENDPOINTS } from '../constants/api';

const API_BASE = `${API_CONFIG.BASE_URL}${API_CONFIG.API_PREFIX}`;

export const artworksAPI = {
    getArtworks: (page = 0, search = '', size = 20) => {
        const params = new URLSearchParams({
            page: page.toString(),
            size: size.toString(),
            ...(search && { searchTerm: search })
        });

        return fetch(`${API_BASE}${ENDPOINTS.ARTWORKS}?${params}`, {credentials: "include"})
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error("API Call failed:", error);
                throw error;
            });
    }
};