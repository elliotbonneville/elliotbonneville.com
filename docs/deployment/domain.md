# Domain and HTTPS Setup Documentation

## Example Configuration

### Domain Registration
- **Registrar:** Your domain registrar (e.g., Namecheap, GoDaddy, Google Domains)
- **Domain:** yourdomain.com
- **DNS Management:** Can stay with registrar or transfer to hosting provider

### Server
- **Provider:** DigitalOcean (or any VPS provider)
- **Droplet:** Ubuntu 22.04+ (Basic $6/month plan)
- **IP Address:** YOUR_SERVER_IP
- **Location:** Choose closest to your audience

### SSL/HTTPS
- **Certificate Provider:** Let's Encrypt (free)
- **Installation Method:** Certbot with Nginx plugin
- **Auto-renewal:** Enabled (every 90 days)

## How We Set It Up

### Step 1: Domain Configuration at Your Registrar

Keep DNS management at your registrar for simplicity:

1. Log into your domain registrar
2. Find DNS settings (usually under Domain Management or Advanced DNS)
3. Add these A records:
   ```
   Type    Host    Value              TTL
   A       @       YOUR_SERVER_IP     Automatic
   A       www     YOUR_SERVER_IP     Automatic
   ```
4. Removed any conflicting A records
5. Changes propagated within 5 minutes

### Step 2: HTTPS Setup on Server

Connected to the server and installed Let's Encrypt:

```bash
# SSH into server
ssh root@YOUR_SERVER_IP

# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate for both www and non-www
certbot --nginx -d yourdomain.com -d www.yourdomain.com \
  --non-interactive --agree-tos --email your-email@example.com
```

Certbot automatically:
- Obtained SSL certificates
- Configured Nginx for HTTPS
- Set up auto-renewal via systemd timer
- Redirected HTTP to HTTPS

### Step 3: Verification

```bash
# Check HTTPS is working
curl -I https://yourdomain.com

# Check certificate details
echo | openssl s_client -servername yourdomain.com -connect yourdomain.com:443 2>/dev/null | openssl x509 -noout -dates

# Check auto-renewal is configured
systemctl status certbot.timer
```

## Maintenance

### Certificate Renewal

Certificates auto-renew via systemd timer. To manually check or renew:

```bash
# Test renewal (dry run)
certbot renew --dry-run

# Force renewal if needed
certbot renew --force-renewal

# Check renewal timer
systemctl list-timers | grep certbot
```

### DNS Changes

If you need to update DNS records:

1. Log into your domain registrar
2. Go to DNS settings/Advanced DNS
3. Update A records as needed
4. Changes typically propagate within 5-30 minutes

### Moving to Different Server

If migrating to a new server:

1. Set up new server with Nginx
2. Update A records at your registrar to new IP
3. Wait for DNS propagation (5-30 minutes)
4. Run certbot on new server to get certificates

## Cost Breakdown

- **Domain:** ~$10-15/year (varies by registrar)
- **Server:** $5-6/month (DigitalOcean, Linode, etc.)
- **SSL Certificate:** Free (Let's Encrypt)
- **Total:** ~$70-90/year

## Important Files and Locations

### On the Server
- **Nginx Config:** `/etc/nginx/sites-available/default`
- **SSL Certificates:** `/etc/letsencrypt/live/yourdomain.com/`
- **Blog Files:** `/var/www/blog/public/`
- **Certbot Renewal Config:** `/etc/letsencrypt/renewal/yourdomain.com.conf`

### DNS Records (at your registrar)
- **A Record @:** Points root domain to YOUR_SERVER_IP
- **A Record www:** Points www subdomain to YOUR_SERVER_IP

## Troubleshooting

### Site Not Loading
1. Check DNS propagation: `dig yourdomain.com`
2. Check Nginx status: `systemctl status nginx`
3. Check Nginx error log: `tail -f /var/log/nginx/error.log`

### Certificate Issues
1. Check certificate status: `certbot certificates`
2. Check renewal log: `cat /var/log/letsencrypt/letsencrypt.log`
3. Force renewal: `certbot renew --force-renewal`

### DNS Not Resolving
1. Check your registrar's DNS settings
2. Use DNS checker: `nslookup yourdomain.com`
3. Clear local DNS cache:
   - Mac: `sudo dscacheutil -flushcache`
   - Linux: `sudo systemd-resolve --flush-caches`

## Security Considerations

- **SSH Access:** Currently using root (consider creating non-root user)
- **Firewall:** Basic DigitalOcean firewall (ports 22, 80, 443 open)
- **Updates:** Manual (consider enabling unattended-upgrades)
- **Backups:** Not configured (consider DigitalOcean backups or rsync)

## Future Improvements

- [ ] Set up non-root user for deployments
- [ ] Enable automatic security updates
- [ ] Configure DigitalOcean backups
- [ ] Add monitoring (UptimeRobot or similar)
- [ ] Set up staging environment
- [ ] Configure fail2ban for additional security