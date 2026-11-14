import "./App.css";
import ProductCarousel from "./ProductCarousel.tsx";
import ProductPage from "./ProductPage.tsx";
import Header from "./header.tsx";
import type { NailSet } from "../src/models/Nailset.ts";
import { Routes, Route } from "react-router";
import nail1 from "./assets/nail1.png";
import nail2 from "./assets/nail2.png";
import nail3 from "./assets/nail3.png";

const products: NailSet[] = [
  { id: 1, name: "PinkyBluey", price: 25, imageUrl: nail1 },
  { id: 2, name: "Blue Ocean", price: 25, imageUrl: nail2 },
  { id: 3, name: "Half n' Half", price: 25, imageUrl: nail3 },
];

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="carousel_container">
              <ProductCarousel products={products} />
            </div>
          }
        />

        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
