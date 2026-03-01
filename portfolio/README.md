# Portfolio — Full Stack Engineer

A professional, dark-themed portfolio website with an AI-powered chatbot assistant that scrapes your GitHub profile in real time.

---

## 📁 File Structure

```
portfolio/
│
├── index.html                    ← Entry point
│
├── assets/
│   ├── css/
│   │   ├── variables.css         ← Design tokens (colors, fonts, spacing)
│   │   ├── base.css              ← Reset, body, typography, shared utilities
│   │   ├── nav.css               ← Navigation bar & mobile menu
│   │   ├── hero.css              ← Hero section & profile image
│   │   ├── about.css             ← About section & skills stack
│   │   ├── projects.css          ← Project cards & impact panels
│   │   ├── education.css         ← Education cards
│   │   ├── contact.css           ← Contact section & form
│   │   ├── chatbot.css           ← AI chat widget
│   │   └── footer.css            ← Footer
│   │
│   ├── js/
│   │   ├── config.js             ← ⚙️ YOUR settings & portfolio content
│   │   ├── cursor.js             ← Custom cursor behavior
│   │   ├── nav.js                ← Scroll progress & mobile nav toggle
│   │   ├── photo.js              ← Profile photo upload handler
│   │   ├── contact.js            ← Contact form submission
│   │   ├── chatbot.js            ← AI assistant (Anthropic API + GitHub)
│   │   └── animations.js         ← Scroll-reveal (IntersectionObserver)
│   │
│   └── images/
│       └── profile/              ← Drop your profile photo here (optional)
│           └── .gitkeep
│
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start

1. **Open** `index.html` in any modern browser — no build step required.
2. **Personalize** `assets/js/config.js`:
   ```js
   const CONFIG = {
     name:        'Your Full Name',
     email:       'you@example.com',
     githubUser:  'your-github-username',  // ← enables live GitHub scraping
     linkedinUrl: 'https://linkedin.com/in/yourprofile',
     resumeUrl:   'assets/resume.pdf',
   };
   ```
3. **Update links** in `index.html` — search for `YOUR_USERNAME` and `YOUR_PROFILE`.
4. **Add your photo** — click the profile frame in the hero, or drop an image in `assets/images/profile/` and update the `<img>` tag.

---

## 🤖 AI Chatbot Setup

The chatbot uses the **Anthropic Messages API** directly from the browser.

1. Get an API key at [console.anthropic.com](https://console.anthropic.com)
2. Open the portfolio, click the chat button (bottom-right)
3. Paste your `sk-ant-...` key — it's saved in `localStorage` (never sent anywhere else)

**GitHub Integration** — Set `githubUser` in `config.js`. The chatbot will automatically fetch your public repos, star counts, and bio to answer questions about your GitHub activity.

---

## 📬 Contact Form Integration

By default the form runs in **demo mode** (simulates a send). To receive real emails:

### Option A — Formspree (no backend)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → copy your endpoint URL
3. In `assets/js/contact.js`, replace:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

### Option B — EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a service, template, and get your public key
3. Replace `_sendViaBackend()` in `contact.js` with:
   ```js
   return emailjs.send('SERVICE_ID', 'TEMPLATE_ID', payload, 'PUBLIC_KEY');
   ```

---

## 🌐 Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
# Enable Pages in repo Settings → Pages → Branch: main
```

### Netlify (drag & drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag the `portfolio/` folder onto the deploy area
3. Done — live in seconds

### Vercel
```bash
npm i -g vercel
cd portfolio
vercel
```

---

## 🎨 Customization

| What                  | Where                          |
|-----------------------|--------------------------------|
| Colors & fonts        | `assets/css/variables.css`     |
| Hero text & buttons   | `index.html` → Hero section    |
| Project cards         | `index.html` → Projects section|
| Skills tags           | `index.html` → About section   |
| Chatbot AI context    | `assets/js/config.js`          |
| Form email provider   | `assets/js/contact.js`         |
| Section backgrounds   | `assets/css/about.css` etc.    |

---

## 🛠 Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JS (ES2020)** — no frameworks, no build tools
- **Anthropic API** — AI chatbot (claude-sonnet-4)
- **GitHub REST API** — live repo data
- Google Fonts: DM Serif Display, DM Mono, Syne

---

## 📄 License

MIT — free to use and modify for personal portfolios.
