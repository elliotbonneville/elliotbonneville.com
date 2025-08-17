# Deployment Guide

Complete guide for deploying to a VPS with nginx and HTTPS.

## Prerequisites

- A VPS (DigitalOcean, Linode, Vultr, etc.)
- A domain name (optional, but recommended for HTTPS)
- SSH access to your server

## Step 1: Server Setup (5 minutes)

SSH into your server:
```bash
ssh root@YOUR_SERVER_IP
```

Run this setup script:
```bash
# Update and install nginx
apt update && apt upgrade -y
apt install nginx -y

# Create blog directory
mkdir -p /var/www/blog/public

# Configure nginx
cat > /etc/nginx/sites-available/default << 'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/blog/public;
    index index.html;
    server_name _;

    location / {
        try_files $uri $uri/ =404;
    }

    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript;
}
EOF

# Restart nginx
systemctl restart nginx
```

## Step 2: Configure Deployment

On your local machine, update `config.js`:

```javascript
deploy: {
  server: 'root@YOUR_SERVER_IP',
  path: '/var/www/blog'
}
```

## Step 3: Deploy

```bash
npm run deploy
```

Your blog is now live at `http://YOUR_SERVER_IP`

## Step 4: Custom Domain (Optional)

### Point Domain to Server

1. Go to your domain registrar
2. Add an A record:
   - Type: A
   - Name: @ (or subdomain)
   - Value: YOUR_SERVER_IP
   - TTL: 3600

Wait 5-30 minutes for DNS propagation.

### Update Nginx

SSH into your server and update nginx:

```bash
# Edit nginx config
nano /etc/nginx/sites-available/default

# Change this line:
server_name _;
# To:
server_name yourdomain.com www.yourdomain.com;

# Restart nginx
systemctl restart nginx
```

## Step 5: HTTPS with Let's Encrypt (2 minutes)

SSH into your server:

```bash
# Install certbot
apt install certbot python3-certbot-nginx -y

# Get certificate (follow prompts)
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is already set up!
```

## GitHub Actions (Automatic Deployment)

To deploy automatically when you push to GitHub:

1. Generate SSH key on your server:
```bash
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions -N ""
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
```

2. Copy the private key:
```bash
cat ~/.ssh/github_actions
```

3. Add to GitHub:
   - Go to your repo → Settings → Secrets → Actions
   - Add new secret: `DEPLOY_KEY` (paste private key)
   - Add new secret: `DEPLOY_HOST` (your server IP)
   - Add new secret: `DEPLOY_PATH` (/var/www/blog)

4. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - run: npm install
      - run: npm run build
      
      - name: Deploy to server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.DEPLOY_HOST }}
          username: root
          key: ${{ secrets.DEPLOY_KEY }}
          source: "public/*"
          target: ${{ secrets.DEPLOY_PATH }}
          strip_components: 1
```

Now every push to `main` automatically deploys!

## Troubleshooting

### "Permission denied" when deploying
```bash
# On server:
chown -R root:root /var/www/blog
chmod -R 755 /var/www/blog
```

### Nginx not starting
```bash
# Check config syntax
nginx -t

# Check error logs
tail -f /var/log/nginx/error.log
```

### HTTPS not working
```bash
# Test renewal
certbot renew --dry-run

# Force renewal
certbot renew --force-renewal
```

## Server Maintenance

### Backup your content
```bash
# On your local machine
rsync -avz root@YOUR_SERVER:/var/www/blog/public ./backup/
```

### Update server
```bash
# Monthly updates
apt update && apt upgrade -y
```

### Monitor disk space
```bash
df -h
```

## Cost

- **DigitalOcean/Linode**: $6/month (1GB RAM)
- **Domain**: $10-15/year
- **Total**: ~$7/month for complete control

Compare to:
- Medium: Limited control, paywalls
- Substack: They own your audience
- Ghost: $11-31/month