/* eslint-disable @typescript-eslint/no-unused-vars */
import "./ProductCarousel.css";
import { useState } from "react";

type NailSet = {
  name: string;
  price: number;
  imageUrl: string;
};

const products: NailSet[] = [
  { name: "PinkyBluey", price: 25, imageUrl: "/imgs/nail1.png" },
  { name: "Blue Ocean", price: 25, imageUrl: "/imgs/nail2.png" },
  { name: "Half n' Half", price: 25, imageUrl: "/imgs/nail3.png" },
];

function ProductCarousel() {
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
        <img src="/imgs/arrow.png" alt="Previous" />
      </button>

      {products.map((product, index) => (
        <div className="product" style={getProductPosition(index)}>
          <div className="product_image">
            <img src={product.imageUrl} alt={product.name} />
          </div>

          <div className="product_info">
            <div className="product_name">
              <p>{product.name}</p>
            </div>

            <div className="heart">
              {" "}
              ────
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                </g>
              </svg>
              ────
            </div>

            <div className="product_price">
              <p>€{product.price}</p>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="next"
        onClick={() =>
          currItem == products.length-1 ? setCurrItem(currItem) : setCurrItem(currItem + 1)
        }
      >
        <img src="/imgs/arrow.png" alt="Next" />
      </button>
    </div>
  );
}

export default ProductCarousel;
