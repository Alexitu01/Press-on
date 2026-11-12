import "./ProductCarousel.css";
import { useState } from "react";
import ProductCard from "./ProductCard.tsx"
import type {NailSet} from "../src/models/Nailset.ts"

type ProductProps = {
  products: NailSet[]
}

function ProductCarousel({ products }: ProductProps) {
  const [currItem, setCurrItem] = useState(Math.trunc(products.length/2));

  //Define
  function getProductPosition(index: number) {
    const distance = index > currItem ? index - currItem : currItem - index;

    if (distance == 0) return { opacity: 1, zIndex: 4 };

    const tilt = index - currItem;
    const style = {
      zIndex: 4 - distance,
      opacity: distance > 2 ? 0 : distance > 1 ? 0.5 : 0.7,
      transform: `translate(${tilt * 150}px, -5%) scale(${1 - 0.15 * distance}) perspective(20px) rotateY(${tilt > 0 ? -1 : 1}deg)`,
      filter: "brightness(90%)",
    };
    return style;

  }

  return (
    <div className="product-carousel">
      <button
        type="button"
        className="prev"
        onClick={() =>
          currItem == 0 ? setCurrItem(currItem) : setCurrItem(currItem - 1)
        }
      >
        <img src="src/assets/arrow.png" alt="Previous" />
      </button>

      {products.map((product, index) => (
        <div key={product.id} className="product" style={getProductPosition(index)}>
          <ProductCard id={product.id} name={product.name} imageUrl={product.imageUrl} price={product.price}/>
        </div>
      ))}

      <button
        type="button"
        className="next"
        onClick={() =>
          currItem == products.length-1 ? setCurrItem(currItem) : setCurrItem(currItem + 1)
        }
      >
        <img src="src/assets/arrow.png" alt="Next" />
      </button>
    </div>
  );
}

export default ProductCarousel;
