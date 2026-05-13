import { createNavbar } from '../components/layout/navbar.js'
import { createFooter } from '../components/layout/footer.js'
import { createHero } from './hero.js'
import { createTrustBadge } from './trust-badge.js'
import { createCategories } from './categories.js'
import { createFeaturedProducts } from './featured-products.js'
import { createPromoBanner } from './promo-banner.js'
import { createTestimonials } from './testimonials.js'
import { createNewsletter } from './newsletter.js'

/**
 * Full storefront home: navbar through footer (reusable for `/` and `/src/pages/home/`).
 * @returns {DocumentFragment}
 */
export function createHomeContent() {
  const frag = document.createDocumentFragment()
  ;[
    createNavbar(),
    createHero(),
    createTrustBadge(),
    createCategories(),
    createFeaturedProducts(),
    createPromoBanner(),
    createTestimonials(),
    createNewsletter(),
    createFooter(),
  ].forEach(el => frag.appendChild(el))
  return frag
}
