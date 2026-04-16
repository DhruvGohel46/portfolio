/**
 * Centralized API logic for the Dhruv Gohel portfolio.
 * Provides a production-grade abstraction for data fetching.
 */

const API_DELAY = 500; // Simulate network latency for transitions

const api = {
  get: async (endpoint) => {
    // In a real production app, this would use fetch(endpoint)
    // For this frontend-only showcase, we return mock data with a slight delay
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    
    switch (endpoint) {
      case '/status':
        return { status: 'OPERATIONAL', uptime: '99.99%', region: 'US-EAST' };
      default:
        return { data: [] };
    }
  }
};

export const fetchStatus = () => api.get('/status');

export default api;
