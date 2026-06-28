# Pdenterprisesmedia — Netlify Deploy Package
## pdenterprisesmedia.com

---

## 📁 Files in This Package

| File | Description |
|---|---|
| `index.html` | Main store homepage |
| `ai-content-mastery.html` | AI Content Mastery course page |
| `calcpro.html` | CalcPro utility calculator site |
| `404.html` | Custom branded 404 page |
| `netlify.toml` | Netlify config (headers, redirects, caching) |
| `robots.txt` | SEO crawl instructions |
| `sitemap.xml` | Google sitemap — update with your domain |

---

## 🚀 HOW TO DEPLOY IN 5 MINUTES (Free)

### Step 1 — Create a Netlify Account
Go to **https://netlify.com** and sign up free (use Google or email).

### Step 2 — Deploy by Drag & Drop
1. In Netlify dashboard, click **"Add new site"**
2. Click **"Deploy manually"**
3. **Drag this entire folder** onto the upload area
4. Wait ~30 seconds — your site is live!

### Step 3 — Connect Your Domain (Optional)
1. In Netlify, go to **Site Settings → Domain Management**
2. Click **"Add custom domain"**
3. Enter: `pdenterprisesmedia.com`
4. Update your domain's nameservers to Netlify's (shown on screen)
5. SSL certificate is added automatically (free HTTPS)

---

## ⚙️ BEFORE YOU GO LIVE — Checklist

### Replace Gumroad Links
In `index.html`, find all instances of:
```
https://pdenterprisesmedia.gumroad.com/l/PRODUCT-NAME
```
Replace each with your actual Gumroad product URLs.

### Add Google AdSense
In each HTML file, find this comment:
```html
<!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
```
Uncomment it and replace `ca-pub-XXXXXXXXXXXXXXXX` with your publisher ID.

Then replace each ad slot div:
```html
<div class="ad-slot ad-leaderboard">Advertisement · 728×90</div>
```
With real AdSense `<ins>` tags:
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="YOUR-AD-SLOT-ID"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

### Connect Email Forms
The free download and newsletter forms currently log to console.
To make them live, connect to MailerLite or Mailchimp:

**MailerLite (recommended — free up to 1,000 subscribers):**
1. Create account at mailerlite.com
2. Get your API key from Settings → API
3. Replace the `handleFreeDownload()` function in index.html:
```javascript
async function handleFreeDownload(inputId, productId) {
  const email = document.getElementById(inputId).value.trim();
  if (!email || !email.includes('@')) { toast('Enter a valid email'); return; }
  await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_MAILERLITE_API_KEY'
    },
    body: JSON.stringify({ email, groups: ['YOUR_GROUP_ID'] })
  });
  toast('🎉 Download link sent to ' + email);
}
```

### Update sitemap.xml
Replace `pdenterprisesmedia.com` with your actual live domain.

### Submit to Google Search Console
1. Go to **https://search.google.com/search-console**
2. Add your property (domain)
3. Submit your sitemap URL: `https://yourdomain.com/sitemap.xml`

---

## 🌐 Clean URLs Available After Deploy

| URL | Loads |
|---|---|
| `yoursite.com/` | Main store |
| `yoursite.com/course` | AI Content Mastery |
| `yoursite.com/ai-content-mastery` | AI Content Mastery |
| `yoursite.com/calcpro` | Calculator site |
| `yoursite.com/calculators` | Calculator site |
| `yoursite.com/free` | Free downloads section |
| `yoursite.com/advertise` | Advertiser section |
| `yoursite.com/shop` | Products section |

---

## 📊 SEO Already Built In
- Meta titles, descriptions & keywords on all pages
- Open Graph & Twitter Card tags
- Schema.org structured data (Store, WebSite, FAQPage)
- robots.txt & sitemap.xml included
- Canonical URL tags
- Security headers via netlify.toml

---

## 💰 REVENUE CHECKLIST

- [ ] Gumroad links updated with real product URLs
- [ ] AdSense publisher ID added to all pages
- [ ] MailerLite/Mailchimp connected to email forms
- [ ] Domain connected in Netlify
- [ ] Submitted to Google Search Console
- [ ] Shared store link on social media for launch

---

**Built by Pdenterprisesmedia · 2026**
*Live Well. Learn Well. Earn Well.*
