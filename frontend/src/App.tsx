import "./App.css";
import ProductCarousel from "./ProductCarousel.tsx";
import Header from "./header.tsx";

function App() {
  return (
    <>
      <Header />
      <div className="carousel_container">
      <ProductCarousel />
      </div>
    </>
  );
}

export default App;
