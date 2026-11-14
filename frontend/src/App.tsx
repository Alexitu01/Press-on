import "./App.css";
import { useEffect, useState } from "react";
import ProductCarousel from "./ProductCarousel.tsx";
import ProductPage from "./ProductPage.tsx";
import Header from "./header.tsx";
import type { NailSet } from "../src/models/Nailset.ts";
import { Routes, Route } from "react-router";

function App() {
  const [products, setProducts] = useState<NailSet[]>([]); //useState is a NailSet array that starts empty
  useEffect(() => {
    fetch("http://localhost:5051/api/products") //Fetch the api for the products
      .then((response) => {
        //check response
        if (!response.ok)
          throw new Error("Failed to receive products from API"); //Throw error
        return response.json();
      })
      .then((data) => setProducts(data)); //If response.ok -> take out data, and use setProducts, to update "products"
  }, []);

  console.log(products.length);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="carousel_container">
              {products.length > 0 ? (<ProductCarousel products={products} />) : (<p> Loading products </p>)}
            </div>
          }
        />

        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
