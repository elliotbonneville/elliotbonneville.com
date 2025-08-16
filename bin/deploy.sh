#!/bin/bash

# Deployment script that reads from config.js
# Extracts server and path from config.js using ES modules
SERVER=$(node -e "import('./config.js').then(m => console.log(m.config.deploy.server))")
REMOTE_PATH=$(node -e "import('./config.js').then(m => console.log(m.config.deploy.path))")
SITE_URL=$(node -e "import('./config.js').then(m => console.log(m.config.site.url))")

echo "🚀 Deploying to server..."

# Build the site
echo "📦 Building site..."
node bin/build.js

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Upload files
echo "📤 Uploading to $SERVER..."
rsync -avz --delete public/ $SERVER:$REMOTE_PATH/public/

if [ $? -eq 0 ]; then
    echo "✅ Deployed successfully!"
    echo "🌐 Your site is live at $SITE_URL"
else
    echo "❌ Deployment failed!"
    echo "Make sure to:"
    echo "  1. Update config.js with your server details"
    echo "  2. Ensure you can SSH into your server"
    exit 1
fi