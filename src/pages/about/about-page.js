import { createPageHero } from '../../components/layout/page-hero.js'
import { createAboutContent } from '../../sections/about-content.js'

/**
 * About page body: hero + content sections.
 * @returns {DocumentFragment}
 */
export function createAboutMain() {
  const frag = document.createDocumentFragment()
  frag.append(
    createPageHero({
      title: "We're Here to Make<br/>Shopping Better",
      breadcrumb: 'About Us',
      description:
        "At Venora, we believe shopping should be simple, enjoyable, and accessible to everyone. That's why we offer high-quality products, great prices, and exceptional customer service.",
      label: 'ABOUT US',
      showImage: true,
    }),
    createAboutContent()
  )
  return frag
}
