# Guerras Drywall Inc

Static marketing site for **Guerras Drywall Inc.**, a Southern California drywall contractor serving residential and commercial jobs since 2003.

**Live site:** [https://guerrasdrywall.com](https://guerrasdrywall.com)

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home, services, and calls to action |
| `about.html` | Company story and project video |
| `projects.html` | Photo gallery (click to enlarge) |
| `contact.html` | Estimate request form and contact details |

## Stack

- HTML5, CSS3, and a small amount of JavaScript (`js/main.js`)
- [Bootstrap 5](https://getbootstrap.com/) and Bootstrap Icons
- Google Fonts (Oswald, Source Sans 3)
- [Formspree](https://formspree.io/) for the contact form
- GitHub Pages with a custom domain (`CNAME` → `guerrasdrywall.com`)

## Local preview

From the project root:

```bash
python3 -m http.server 8765
```

Open [http://127.0.0.1:8765](http://127.0.0.1:8765).

## Project layout

```
├── index.html
├── about.html
├── projects.html
├── contact.html
├── styles/style.css
├── js/main.js
├── images/
├── Video/
├── robots.txt
├── sitemap.xml
└── CNAME
```

## Contact form

The contact page posts to Formspree. After a successful submit, visitors are redirected back to `contact.html?sent=1`. If you replace the form endpoint, update the `action` on `contact.html`.

## Deploy

Push to `master`. GitHub Pages serves the repo at the custom domain in `CNAME`. HTTPS and DNS are configured on the domain registrar (Namecheap) plus GitHub Pages.
