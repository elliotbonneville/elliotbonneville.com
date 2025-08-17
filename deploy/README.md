# Deployment Configuration

This directory contains server configuration files for deploying the blog.

## nginx.conf

The nginx configuration file used on the production server. This configuration:

- Serves the blog from `/var/www/blog/public`
- Handles both HTTP and HTTPS (with Let's Encrypt certificates)
- Redirects HTTP to HTTPS automatically
- Enables gzip compression for text files
- Serves clean URLs (no .html extension needed for index files)

### Key Features

1. **Clean URLs**: The `try_files $uri $uri/ =404` directive allows accessing pages without .html extensions
2. **Gzip Compression**: Enabled for text, CSS, and JavaScript files
3. **SSL/TLS**: Configured with Let's Encrypt certificates (managed by Certbot)
4. **HTTP to HTTPS Redirect**: Automatically redirects all HTTP traffic to HTTPS

### Local Development

For local development, you can use a simplified nginx config or just use the Python HTTP server:

```bash
npm run dev
```

### Production Deployment

To deploy nginx configuration to the server:

```bash
# Copy nginx config to server
scp deploy/nginx.conf root@167.99.122.111:/etc/nginx/sites-available/default

# Test nginx configuration
ssh root@167.99.122.111 "nginx -t"

# Reload nginx
ssh root@167.99.122.111 "systemctl reload nginx"
```

### Notes

- The SSL certificate paths are specific to the production server
- Certbot manages the SSL certificate renewal automatically
- The configuration includes both IPv4 and IPv6 support