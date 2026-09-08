import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductCarousel from './ProductCarousel.tsx'

const productCarouselRoot = document.getElementById('product-carousel-root')

if (productCarouselRoot) {
  createRoot(productCarouselRoot).render(
    <StrictMode>
      <ProductCarousel />
    </StrictMode>,
  )
}
