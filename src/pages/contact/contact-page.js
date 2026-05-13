import { createPageHero } from '../../components/layout/page-hero.js'
import { createContactContent } from '../../sections/contact-content.js'

/**
 * Contact page body: hero + forms / FAQ.
 * @returns {DocumentFragment}
 */
export function createContactMain() {
  const frag = document.createDocumentFragment()
  frag.append(
    createPageHero({
      title: "We'd Love to Hear<br/>From You",
      breadcrumb: 'Contact',
      description: 'Have a question, suggestion, or need help? Our team is here to assist you.',
      label: 'GET IN TOUCH',
      showImage: false,
    }),
    createContactContent()
  )
  return frag
}
