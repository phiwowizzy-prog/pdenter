# LexiCount Pro™ — scaffold README

This branch contains a scaffold for LexiCount Pro™ — a premium, privacy-first suite of word and writing tools.

What I added
- Responsive homepage with live hero word-counter widget (client-side)
- Tool pages: Word Counter, Word Unscrambler, Text-to-Speech, Voice-to-Text
- Minimal CSS (Playfair Display + Source Sans 3, muted gold accent)
- Client-side JS for live counting, simple unscrambler, TTS, and basic STT integration
- Legal pages, robots.txt, sitemap.xml, ads.txt (placeholders)
- Google AdSense publisher ID added to page templates and ads.txt (you provided pub-8581996512005206).
- Cookie consent banner added: users in the EEA/UK can accept or choose essential-only; ads only initialize after Accept All.

Next steps
- Replace placeholder data-ad-slot values in the HTML with your real ad slot IDs from AdSense to serve ads.
- Review the cookie & legal pages and update contact emails and company details.
- Review ad placements to ensure they meet AdSense policy and do not overlap interactive elements (I placed three conservative slots: below hero, mid-page, and on tool pages).
- Deploy to a preview host (Vercel/Netlify) and submit to AdSense for approval once content and policies are finalized.

Deploying
- Static hosting recommended: Vercel, Netlify, or GitHub Pages (update sitemap/robots and canonical URLs after deploy).

Notes on AdSense
- The AdSense script is included with your publisher ID. However, ads will not initialize until a user Accepts all cookies — this helps with GDPR/EEA compliance. If you prefer immediate loading, let me know and I will adjust the behavior (but that may require a different consent flow).

