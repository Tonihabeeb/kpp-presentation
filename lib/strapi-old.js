import axios from 'axios';

// Initialize Strapi API client using axios
const strapiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    ...(process.env.STRAPI_API_TOKEN && {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    }),
  },
});

// API helper functions
export const strapiApi = {
  // Get all pages
  async getPages() {
    try {
      const response = await strapiClient.get('/api/pages', {
        params: {
          populate: ['content', 'seo', 'navigation'],
        },
      });
      return response.data.data;
    } catch (error) {
      // Silently fail and return empty array for fallback
      return [];
    }
  },

  // Get a single page by slug
  async getPageBySlug(slug) {
    try {
      const response = await strapiClient.get('/api/pages', {
        params: {
          filters: { slug: { $eq: slug } },
          populate: ['content', 'seo', 'navigation'],
        },
      });
      return response.data.data?.[0] || null;
    } catch (error) {
      // Silently fail and return null for fallback to static content
      return null;
    }
  },

  // Get site settings
  async getSiteSettings() {
    try {
      const response = await strapiClient.get('/api/site-setting', {
        params: {
          populate: ['logo', 'favicon', 'mainNavigation', 'socialLinks'],
        },
      });
      return response.data.data;
    } catch (error) {
      // Silently fail and return null for fallback to static content
      return null;
    }
  },

  // Get KPP data
  async getKppData(category = null) {
    try {
      const filters = category ? { category: { $eq: category } } : {};
      const response = await strapiClient.get('/api/kpp-data', {
        params: {
          filters,
          sort: ['displayOrder:asc'],
          populate: ['specifications', 'technicalSpecs'],
        },
      });
      return response.data.data;
    } catch (error) {
      // Silently fail and return empty array for fallback
      return [];
    }
  },

  // Helper to get image URL
  getImageUrl(image) {
    if (!image?.url) return null;
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    return image.url.startsWith('http') ? image.url : `${baseUrl}${image.url}`;
  },
};

// Export the API client for direct access if needed
export { strapiClient };

// Default export for backward compatibility
export default strapiApi;
