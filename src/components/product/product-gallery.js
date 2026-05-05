/**
 * Create a product image gallery with thumbnails
 * @param {string[]} images - Array of image URLs
 * @returns {HTMLElement}
 */
export function createProductGallery(images = []) {
  const gallery = document.createElement('div')
  gallery.className = 'flex flex-col gap-4'

  // Main image
  const mainImg = document.createElement('img')
  mainImg.className = 'w-full aspect-square object-cover rounded-2xl bg-gray-50'
  mainImg.src = images[0] || 'https://placehold.co/600x600/f3f4f6/9ca3af?text=Product'
  mainImg.alt = 'Product image'

  // Thumbnails
  const thumbs = document.createElement('div')
  thumbs.className = 'flex gap-3'

  images.forEach((src, i) => {
    const thumb = document.createElement('button')
    thumb.className = `w-16 h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${i === 0 ? 'border-indigo-500' : 'border-transparent hover:border-gray-300'}`
    thumb.innerHTML = `<img src="${src}" alt="Thumbnail ${i + 1}" class="w-full h-full object-cover" />`
    thumb.addEventListener('click', () => {
      mainImg.src = src
      thumbs.querySelectorAll('button').forEach(t => t.classList.replace('border-indigo-500', 'border-transparent'))
      thumb.classList.replace('border-transparent', 'border-indigo-500')
    })
    thumbs.appendChild(thumb)
  })

  gallery.append(mainImg, thumbs)
  return gallery
}
