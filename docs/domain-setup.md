# Domain and HTTPS Setup Documentation

## Current Configuration

### Domain Registration
- **Registrar:** Namecheap
- **Domain:** elliotbonneville.com
- **DNS Management:** Namecheap (not transferred to DigitalOcean)

### Server
- **Provider:** DigitalOcean
- **Droplet:** Ubuntu 24.10 (Basic $6/month plan)
- **IP Address:** 167.99.122.111
- **Location:** NYC3

### SSL/HTTPS
- **Certificate Provider:** Let's Encrypt (free)
- **Installation Method:** Certbot with Nginx plugin
- **Auto-renewal:** Enabled (every 90 days)

## How We Set It Up

### Step 1: Domain Configuration at Namecheap

We kept DNS management at Namecheap for simplicity:

1. Logged into Namecheap
2. Domain List → Manage → Advanced DNS
3. Added these A records:
   ```
   Type    Host    Value              TTL
   A       @       167.99.122.111     Automatic
   A       www     167.99.122.111     Automatic
   ```
4. Removed any conflicting A records
5. Changes propagated within 5 minutes

### Step 2: HTTPS Setup on Server

Connected to the server and installed Let's Encrypt:

```bash
# SSH into server
ssh root@167.99.122.111

# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate for both www and non-www
certbot --nginx -d elliotbonneville.com -d www.elliotbonneville.com \
  --non-interactive --agree-tos --email elliot.bonneville@gmail.com
```

Certbot automatically:
- Obtained SSL certificates
- Configured Nginx for HTTPS
- Set up auto-renewal via systemd timer
- Redirected HTTP to HTTPS

### Step 3: Verification

```bash
# Check HTTPS is working
curl -I https://elliotbonneville.com

# Check certificate details
echo | openssl s_client -servername elliotbonneville.com -connect elliotbonneville.com:443 2>/dev/null | openssl x509 -noout -dates

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

1. Log into Namecheap
2. Go to Domain List → Manage → Advanced DNS
3. Update A records as needed
4. Changes typically propagate within 5-30 minutes

### Moving to Different Server

If migrating to a new server:

1. Set up new server with Nginx
2. Update A records at Namecheap to new IP
3. Wait for DNS propagation (5-30 minutes)
4. Run certbot on new server to get certificates

## Cost Breakdown

- **Domain:** ~$13/year (Namecheap)
- **Server:** $6/month (DigitalOcean)
- **SSL Certificate:** Free (Let's Encrypt)
- **Total:** ~$85/year

## Important Files and Locations

### On the Server
- **Nginx Config:** `/etc/nginx/sites-available/default`
- **SSL Certificates:** `/etc/letsencrypt/live/elliotbonneville.com/`
- **Blog Files:** `/var/www/blog/public/`
- **Certbot Renewal Config:** `/etc/letsencrypt/renewal/elliotbonneville.com.conf`

### DNS Records (at Namecheap)
- **A Record @:** Points root domain to 167.99.122.111
- **A Record www:** Points www subdomain to 167.99.122.111

## Troubleshooting

### Site Not Loading
1. Check DNS propagation: `dig elliotbonneville.com`
2. Check Nginx status: `systemctl status nginx`
3. Check Nginx error log: `tail -f /var/log/nginx/error.log`

### Certificate Issues
1. Check certificate status: `certbot certificates`
2. Check renewal log: `cat /var/log/letsencrypt/letsencrypt.log`
3. Force renewal: `certbot renew --force-renewal`

### DNS Not Resolving
1. Check Namecheap DNS settings
2. Use DNS checker: `nslookup elliotbonneville.com`
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