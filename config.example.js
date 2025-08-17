// Site configuration - copy this to config.js and customize
export const config = {
  // Site metadata
  site: {
    name: 'Your Name',
    description: 'Your blog description',
    url: 'https://yourdomain.com',
    language: 'en-US'
  },
  
  // Analytics (optional)
  analytics: {
    googleAnalyticsId: '' // Leave empty to disable, or add your G-XXXXXXX ID
  },
  
  // Deployment settings (only needed for self-hosting)
  deploy: {
    server: 'user@your-server-ip',
    path: '/var/www/blog'
  }
};