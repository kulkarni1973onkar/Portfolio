# Onkar Kulkarni — Personal Portfolio

A clean, responsive personal portfolio website showcasing my projects, skills, and experience.

---

## 🔗 Live Demo

**[onkar-kulkarni.vercel.app](https://onkar-kulkarni.vercel.app)**

---

## ✨ Features

- Fully responsive across all devices — mobile, tablet, and desktop
- Smooth scroll animations and scroll progress indicator
- Custom cursor with hover effects
- Project showcase with GitHub and live demo links
- Working contact form with field validation and email delivery
- Fast load — no frameworks, no build tools required

---

## 📁 Project Structure

```
portfolio/
├── index.html                  ← Entry point
├── README.md
├── .gitignore
│
└── assets/
    ├── css/
    │   ├── variables.css       ← Design tokens (colors, fonts, shadows)
    │   ├── base.css            ← Reset, body, shared utils, all @keyframes
    │   ├── nav.css             ← Navbar, mobile hamburger, scroll progress
    │   ├── hero.css            ← Hero layout, profile frame, floating badges
    │   ├── about.css           ← About grid & skill tag cards
    │   ├── projects.css        ← Project cards, wide card, impact panel
    │   ├── education.css       ← Education cards
    │   ├── contact.css         ← Contact grid, info rows, form fields
    │   └── footer.css          ← Footer layout & links
    │
    ├── js/
    │   ├── config.js           ← All personal settings (name, links, context)
    │   ├── cursor.js           ← Custom cursor + hover effects
    │   ├── nav.js              ← Scroll progress, mobile toggle, active links
    │   ├── photo.js            ← Profile photo loader
    │   ├── contact.js          ← Form validation + EmailJS integration
    │   └── animations.js       ← Scroll reveal (IntersectionObserver)
    │
    └── images/
        └── profile/            
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/OnkarKulkarni/portfolio.git
cd portfolio
```

### 2. Add your profile photo
Place your photo inside `assets/images/profile/` and update the path in `assets/js/photo.js`:
```javascript
const PHOTO_SRC = 'assets/images/profile/Photo.jpeg';
```

### 3. Configure your details
Open `assets/js/config.js` and update your personal information:
```javascript
const CONFIG = {
  name: 'Onkar Kulkarni',
  github: 'https://github.com/OnkarKulkarni',
  email: 'kulkarnionkar1911@gmail.com',
};
```

### 4. Set up the Contact Form
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create an Email Service and Template
3. Update `assets/js/contact.js` with your credentials

### 5. Run locally
No build step needed — open `index.html` directly or use Live Server in VS Code:
```bash
python -m http.server 5500
```

---

## 🌐 Deployment

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Leave all settings as default and click **Deploy**
4. Every push to `main` will automatically redeploy


---

## 📬 Contact

**Onkar Kulkarni**
- Email: kulkarnionkar1911@gmail.com
- GitHub: [@OnkarKulkarni](https://github.com/OnkarKulkarni)
- LinkedIn: [linkedin.com/in/onkarkulkarni](https://linkedin.com/in/onkarkulkarni)
