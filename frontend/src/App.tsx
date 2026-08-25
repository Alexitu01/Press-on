import { useState } from 'react'
import './App.css'

type NailSet = {
  name: string
  price: number
}

function App() {
  const product: NailSet = { name: 'Pink nails', price: 25 }
  const [cartCount, setCartCount] = useState(0)

  return (
    <>
      <h1>{product.name}</h1>
      <p>€{product.price}</p>
      <button onClick={() => setCartCount(cartCount + 1)}>
        Add to cart
      </button>
      <button onClick={() => setCartCount(cartCount <= 0 ? 0: cartCount-1)}>
        Remove from cart
      </button>
      <p>Items in cart: {cartCount}</p>
    </>
  )
}

export default App
