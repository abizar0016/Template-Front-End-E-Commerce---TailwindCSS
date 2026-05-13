import { createPageHero } from '../../components/layout/page-hero.js'
import { createWishlistContent } from '../../sections/wishlist-content.js'

/**
 * Favorites page: hero + wishlist section (modal mounts to body from section).
 * @returns {DocumentFragment}
 */
export function createWishlistMain() {
  const frag = document.createDocumentFragment()
  frag.append(
    createPageHero({
      title: 'Products You<br/><span class="text-violet-600 dark:text-violet-400">Love</span>',
      breadcrumb: 'Favorites',
      description:
        'Review saved items, add them to your cart, or run a demo purchase (browser only, no payment).',
      label: 'WISHLIST',
      showImage: false,
    }),
    createWishlistContent()
  )
  return frag
}
