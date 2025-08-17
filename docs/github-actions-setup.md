# GitHub Actions Deployment Setup

This blog includes automatic deployment via GitHub Actions. When you push to the `main` branch, the site will automatically build and deploy to your server.

## Required GitHub Secrets

To enable automatic deployment, you need to configure the following secrets in your GitHub repository:

1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following secrets:

### SSH_PRIVATE_KEY
Your SSH private key for connecting to the server. To generate one if needed:
```bash
ssh-keygen -t ed25519 -C "github-actions@your-blog"
# Copy the public key to your server:
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@your-server-ip
```
Then copy the contents of the private key:
```bash
cat ~/.ssh/id_ed25519
```

### SERVER_IP
Your server's IP address (e.g., `167.99.122.111`)

### DEPLOY_USER
The SSH user for deployment (e.g., `root` or your username)

### DEPLOY_PATH
The path on your server where the blog is hosted (e.g., `/var/www/blog`)

## Manual Deployment

You can also trigger a deployment manually:
1. Go to Actions tab in your GitHub repository
2. Select "Deploy to DigitalOcean" workflow
3. Click "Run workflow"

## Local Deployment

To deploy from your local machine (bypassing GitHub Actions):
```bash
npm run deploy
```

This uses the settings in your local `config.js` file.

## Disabling Automatic Deployment

To disable automatic deployment, you can:
1. Delete or rename `.github/workflows/deploy.yml`
2. Or comment out the `push` trigger in the workflow file

## Security Notes

- Never commit your private SSH key to the repository
- Use GitHub Secrets for all sensitive information
- Consider using a dedicated deploy key with limited permissions
- Regularly rotate your SSH keys