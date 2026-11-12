import "./App.css";
import ProductCarousel from "./ProductCarousel.tsx";
import Header from "./header.tsx";
import type {NailSet} from "../src/models/Nailset.ts"
import nail1 from "./assets/nail1.png" 
import nail2 from "./assets/nail2.png"
import nail3 from "./assets/nail2.png"




const products: NailSet[] = [
  { id: 1, name: "PinkyBluey", price: 25, imageUrl: nail1 },
  { id: 2, name: "Blue Ocean", price: 25, imageUrl: nail2 },
  { id: 3, name: "Half n' Half", price: 25, imageUrl: nail3 },
];

function App() {
  return (
    <>
      <Header />
      <div className="carousel_container">
        <ProductCarousel products={products} />
      </div>
    </>
  );
}

export default App;
