# aadhyaassociates.com

Static website for Aadhya Associates (Adyah Associates LLC): plain HTML, CSS and JavaScript, with no build step.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Us (mission, founder, approach) |
| `services.html` | The five core services, with anchors `#strategy`, `#operations`, `#financial`, `#market`, `#startup` |
| `how-we-engage.html` | Engagement process, engagement types and what clients receive |
| `insights.html` | Article list |
| `insights-*.html` | The three published articles |
| `contact.html` | Contact form and details |
| `privacy.html` | Privacy Policy |
| `404.html` | Page-not-found |

Supporting files: `styles.css`, `script.js`, `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.png` (the social share preview), `sitemap.xml` and `robots.txt`.

## Before launch

### 1. Connect the contact form (Formspree)

1. Create a free account at https://formspree.io and add a new form that delivers to `info@aadhyaassociates.com`.
2. Copy the form ID. It's the part after `/f/`, e.g. `xyzabcd`.
3. In `contact.html`, replace `YOUR_FORM_ID` in `action="https://formspree.io/f/YOUR_FORM_ID"`.
4. Submit a test message and confirm it arrives.

Until this is done, the form tells visitors to email you instead.

### 2. Adding proof later

The site currently has no placeholders. When you have approved testimonials or case studies, add a Success Stories page, or a testimonial section on the home page, alongside "What to expect when you work with us". Only publish quotes and figures that clients have approved in writing.

### 3. Other items

- Optional: add a LinkedIn link in the footer's Connect column and a founder profile on the About page.
- Have `privacy.html` reviewed by an attorney.

## Updating CSS or JS

When you change `styles.css` or `script.js`, bump the version number in each page's link (e.g. `styles.css?v=3` → `?v=4`) so returning visitors get the new file.

## Footer notice

Every page carries the footer "© Adyah Associates LLC, doing business as Aadhya Associates. All rights reserved." together with a notice that content may not be reproduced without written permission.
