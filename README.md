# aadhyaassociates.com

Static website for Aadhya Associates LLC: plain HTML, CSS and JavaScript, with no build step.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Us (mission, founder, approach) |
| `services.html` | The five core services, with anchors `#strategy`, `#operations`, `#financial`, `#market`, `#startup` |
| `success-stories.html` | Testimonials and case studies |
| `insights.html` | Articles (blog) |
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

### 2. Replace the placeholders

Placeholders appear on the site as **highlighted yellow text in [brackets]**. In the code, each one is wrapped in `<span class="ph">[ ... ]</span>`.

To find them all, search the project for `class="ph"`. When you replace one with real content, remove the `<span class="ph">` wrapper as well.

Don't publish any testimonial, client name or figure unless the client has approved it in writing.

### 3. Other items

- Add the LinkedIn URL. Search for `LinkedIn` in the footer and on the About page.
- Add the founder photo on the About page (a 4:5 portrait works best).
- Have `privacy.html` reviewed by an attorney.

## Footer notice

Every page carries the footer "© Aadhya Associates LLC. All rights reserved." together with a notice that content may not be reproduced without written permission.
