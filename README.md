# VENORA — E-Commerce UI Template

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Modern, high-converting **furniture & lifestyle storefront** built as a **static, client-only** demo. No framework runtime — **vanilla JavaScript** modules compose the UI from reusable factory functions, styled with **Tailwind CSS v4** and bundled with **Vite**.

> Portfolio-ready: clear structure, dark/light theme, cart & wishlist persistence, and polished page flows suitable for GitHub showcases or client proposals.

---

## Highlights

| Area | What you get |
|------|----------------|
| **UX** | Hero carousel, featured products, categories, promos, testimonials, newsletter |
| **Shop** | Filters (category, price, color, rating, brand), sort, pagination, grid/list views, URL `?category=` sync |
| **Product** | Gallery, pricing, quantity, add to cart, buy-now → cart |
| **Cart** | Live summary, shipping rules, **demo checkout** modal (clears cart; no payment) |
| **Favorites** | Wishlist page with add-to-cart & **demo purchase** flow |
| **Theme** | Light / dark with `localStorage` persistence (`venora_theme`) |
| **Architecture** | Thin HTML entry files + **`create*()` / `mount*()`** modules under `src/` |

---

## Tech Stack

- **[Vite 8](https://vitejs.dev/)** — dev server, HMR, optimized production builds  
- **[Tailwind CSS v4](https://tailwindcss.com/)** + **`@tailwindcss/vite`** — utility-first styling, custom `dark` variant on `.dark` root  
- **Vanilla ES modules** — no React/Vue; DOM built from exported component functions  
- **[Font Awesome 6](https://fontawesome.com/)** (CDN) — icons across layout and pages  
- **`localStorage`** — cart (`ecommerce_cart`) & wishlist (`ecommerce_wishlist`)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18+** (LTS recommended)

### Install & run

```bash
git clone <YOUR_REPO_URL>
cd template-e-commerce-tailwindcss   # or your folder name
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

Build outputs multi-page `dist/` (see `vite.config.js` `build.rollupOptions.input`).

---

## Project Structure

```text
├── index.html                 # Home (imports home-content)
├── public/                    # Static assets (images, favicon)
├── src/
│   ├── main.js                # Entry: global CSS + theme helpers
│   ├── styles/main.css        # Tailwind + base styles
│   ├── components/            # Reusable UI (layout, product, cart, auth)
│   ├── sections/              # Home sections, wishlist, contact, etc.
│   ├── pages/                 # Route HTML shells + *-page.js mount logic
│   │   ├── shop/shop-page.js  # Full shop listing & filters
│   │   ├── cart/cart-page.js
│   │   └── …
│   ├── data/                  # products.js, categories.js
│   ├── store/                 # cartStore.js, wishlistStore.js
│   └── utils/
├── vite.config.js
└── package.json
```

Each **page** is a small HTML file that imports one module (e.g. `mountShopPage`, `createHomeContent`) — easy to explain in interviews or READMEs for clients.

---

## Pages & Entry Points

| Route | Description |
|-------|-------------|
| `/` | Home — hero, trust badges, categories, featured, promo, testimonials, newsletter |
| `/src/pages/shop/` | Product listing with filters & pagination |
| `/src/pages/product/?id=` | Product detail |
| `/src/pages/categories/` | Category grid → links into shop with query |
| `/src/pages/cart/` | Cart + order summary + demo checkout |
| `/src/pages/wishlist/` | Favorites + demo checkout |
| `/src/pages/about/`, `/contact/` | Marketing content |
| `/src/pages/auth/login.html`, `register.html` | Auth UI (frontend only) |

---

## Customization Ideas

- Replace copy and imagery under `public/images/`  
- Extend `src/data/products.js` & `categories.js`  
- Wire `cartStore` / `wishlistStore` to a real API when you add a backend  
- Deploy to **GitHub Pages**, **Vercel**, or **Netlify** (static output from `npm run build`)

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve `dist/` locally |

---

## License

Add a `LICENSE` file that matches how you want to share this portfolio piece (e.g. MIT). Until then, all rights default to you as the author.

---

<p align="center">
  <b>VENORA</b> — template UI e-commerce modern, siap jadi landasan portofolio atau proyek klien.
</p>
