# DigitalOcean Setup - Simple Guide

## Step 1: Create Droplet (2 minutes)

1. Log into DigitalOcean
2. Click "Create" → "Droplets"
3. Choose:
   - **Image:** Ubuntu 22.04 LTS
   - **Plan:** Basic → Regular → $6/month (1GB RAM is plenty)
   - **Region:** Choose closest to you
   - **Authentication:** SSH Key (recommended) or Password
   - **Hostname:** `blog` or whatever you want

4. Click "Create Droplet"
5. Copy your droplet's IP address (e.g., `164.90.132.145`)

## Step 2: Initial Server Setup (5 minutes)

SSH into your new droplet:
```bash
ssh root@YOUR_DROPLET_IP
```

Run these commands:
```bash
# Update system
apt update && apt upgrade -y

# Install Nginx
apt install nginx -y

# Create blog directory
mkdir -p /var/www/blog/public

# Create simple Nginx config
cat > /etc/nginx/sites-available/default << 'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/blog/public;
    index index.html;
    server_name _;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript;
}
EOF

# Restart Nginx
systemctl restart nginx

# Test - you should see Nginx welcome page
curl http://YOUR_DROPLET_IP
```

## Step 3: Deploy Your Blog

On your local machine, edit `deploy.sh`:

```bash
# Change these two lines:
SERVER="root@YOUR_DROPLET_IP"  # Replace with your droplet IP
REMOTE_PATH="/var/www/blog"
```

Then deploy:
```bash
./deploy.sh
```

Your blog is now live at: `http://YOUR_DROPLET_IP`

## Step 4: Add a Domain (Optional)

### Option A: Use DigitalOcean's Free Subdomain
Your droplet already has a name like `droplet-name.nyc3.digitaloceanspaces.com`

### Option B: Use Your Own Domain
1. Go to DigitalOcean → Networking → Domains
2. Add your domain
3. Point your domain's nameservers to:
   - ns1.digitalocean.com
   - ns2.digitalocean.com
   - ns3.digitalocean.com

4. Add an A record pointing to your droplet IP

## Step 5: Add HTTPS (Optional but Recommended)

SSH into your droplet and run:
```bash
# Install certbot
apt install certbot python3-certbot-nginx -y

# Get certificate (replace with your domain)
certbot --nginx -d yourdomain.com

# Auto-renewal is automatic!
```

## That's It!

Your blog is live. To update content:
1. Write new posts in `src/posts/`
2. Run `./deploy.sh`
3. Done!

## Maintenance

Once a month, SSH in and run:
```bash
apt update && apt upgrade -y
```

Or enable automatic updates:
```bash
apt install unattended-upgrades -y
dpkg-reconfigure --priority=low unattended-upgrades
```