/**
 * Create the Contact page body content (info cards, form, map, FAQ)
 * @returns {HTMLElement}
 */
export function createContactContent() {
  const wrapper = document.createElement('div')

  wrapper.innerHTML = `
    <!-- Contact Info Cards -->
    <section class="py-14 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300 group">
            <div class="w-14 h-14 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mx-auto mb-4 group-hover:bg-violet-600 group-hover:text-white dark:group-hover:bg-violet-600 transition-colors duration-300">
              <i class="fa-solid fa-envelope text-xl"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-1">Email Us</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">We'll respond within 24 hours</p>
            <a href="mailto:support@venora.com" class="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">support@venora.com</a>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300 group">
            <div class="w-14 h-14 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mx-auto mb-4 group-hover:bg-violet-600 group-hover:text-white dark:group-hover:bg-violet-600 transition-colors duration-300">
              <i class="fa-solid fa-phone text-xl"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-1">Call Us</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Mon-Fri, 9AM-6PM EST</p>
            <a href="tel:+15551234567" class="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">+1 (555) 123-4567</a>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300 group">
            <div class="w-14 h-14 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mx-auto mb-4 group-hover:bg-violet-600 group-hover:text-white dark:group-hover:bg-violet-600 transition-colors duration-300">
              <i class="fa-solid fa-location-dot text-xl"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-1">Visit Us</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Our headquarters</p>
            <p class="text-sm font-semibold text-violet-600 dark:text-violet-400">1234 Market St, SF</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300 group">
            <div class="w-14 h-14 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mx-auto mb-4 group-hover:bg-violet-600 group-hover:text-white dark:group-hover:bg-violet-600 transition-colors duration-300">
              <i class="fa-solid fa-clock text-xl"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-1">Working Hours</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">We're available</p>
            <p class="text-sm font-semibold text-violet-600 dark:text-violet-400">Mon-Sat, 9AM-8PM</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Form + Map -->
    <section class="py-14 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Send Us a Message</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Fill out the form below and we'll get back to you.</p>
            <form id="contact-form" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">First Name</label>
                  <input type="text" placeholder="John" required class="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Last Name</label>
                  <input type="text" placeholder="Doe" required class="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                <input type="email" placeholder="john@example.com" required class="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
                <select class="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all cursor-pointer">
                  <option value="">Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Returns & Refunds</option>
                  <option>Product Question</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                <textarea rows="5" placeholder="Write your message here..." required class="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none"></textarea>
              </div>
              <button type="submit" class="w-full py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/25 text-sm cursor-pointer flex items-center justify-center gap-2">
                <i class="fa-solid fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex-1 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden min-h-[300px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e26b503d%3A0xabc123!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" height="100%" style="border:0; min-height:300px;" allowfullscreen loading="lazy" class="rounded-2xl"></iframe>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6">
              <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-4">Follow Us on Social Media</h3>
              <div class="flex gap-3">
                ${['fa-facebook-f', 'fa-instagram', 'fa-twitter', 'fa-pinterest-p', 'fa-youtube'].map(icon => `
                  <a href="#" class="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 transition-all duration-200">
                    <i class="fa-brands ${icon}"></i>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-14 bg-white dark:bg-gray-950">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <span class="text-violet-600 dark:text-violet-400 font-bold text-sm tracking-wide">FAQ</span>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">Frequently Asked Questions</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Quick answers to common questions.</p>
        </div>
        <div class="space-y-3" id="faq-list">
          ${[
            { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days delivery. Free shipping on orders over $100.' },
            { q: 'What is your return policy?', a: 'We offer a 30-day return policy for all products. Items must be in original condition with tags attached.' },
            { q: 'Do you ship internationally?', a: 'Yes! We ship to over 120 countries worldwide. International shipping rates vary by destination.' },
            { q: 'How can I track my order?', a: 'Once shipped, you\'ll receive a tracking number via email. You can also use the "Track Order" link in the navigation.' },
            { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, AMEX, PayPal, Apple Pay, and Google Pay. All transactions are SSL secured.' },
          ].map(faq => `
            <div class="faq-item bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <button class="faq-toggle w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer group">
                <span class="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">${faq.q}</span>
                <i class="fa-solid fa-chevron-down text-xs text-gray-400 transition-transform duration-300"></i>
              </button>
              <div class="faq-content hidden px-6 pb-4">
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">${faq.a}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `

  // FAQ accordion
  wrapper.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item')
      const content = item.querySelector('.faq-content')
      const icon = btn.querySelector('i')
      const isOpen = !content.classList.contains('hidden')

      wrapper.querySelectorAll('.faq-item').forEach(faq => {
        faq.querySelector('.faq-content').classList.add('hidden')
        faq.querySelector('.faq-toggle i').style.transform = 'rotate(0deg)'
      })

      if (!isOpen) {
        content.classList.remove('hidden')
        icon.style.transform = 'rotate(180deg)'
      }
    })
  })

  // Form submit
  const form = wrapper.querySelector('#contact-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn = form.querySelector('button[type="submit"]')
    const originalHTML = btn.innerHTML
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!'
    btn.classList.remove('bg-violet-600', 'hover:bg-violet-700')
    btn.classList.add('bg-green-500')
    btn.disabled = true
    setTimeout(() => {
      btn.innerHTML = originalHTML
      btn.classList.remove('bg-green-500')
      btn.classList.add('bg-violet-600', 'hover:bg-violet-700')
      btn.disabled = false
      form.reset()
    }, 3000)
  })

  return wrapper
}
