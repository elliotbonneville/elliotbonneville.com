#!/bin/bash

# Simple DigitalOcean deployment script
# Change this to your droplet's IP address
SERVER="root@167.99.122.111"
REMOTE_PATH="/var/www/blog"

echo "🚀 Deploying to DigitalOcean..."

# Build the site
echo "📦 Building site..."
node build.js

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Upload files
echo "📤 Uploading to droplet..."
rsync -avz --delete public/ $SERVER:$REMOTE_PATH/public/

if [ $? -eq 0 ]; then
    echo "✅ Deployed successfully!"
    echo "🌐 Your site is live at http://${SERVER#root@}"
else
    echo "❌ Deployment failed!"
    echo "Make sure to:"
    echo "  1. Replace YOUR_DROPLET_IP with your actual droplet IP"
    echo "  2. You can SSH into your droplet"
    exit 1
fi