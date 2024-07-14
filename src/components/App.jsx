import productImage from "../assets/mountain-bicycle.webp";
import "../index.css";
import Product from "./Product";

function App() {
  return (
    <main className="goods-wrap">
      <Product
        img={productImage}
        desc="Велосипед горный 26 NX 615 DISC ST 21ск черный"
        alt="Горный велосипед"
        price="12000"
      />

      <Product
        img={productImage}
        desc="Велосипед горный 26 NX 615 DISC ST 21ск черный"
        alt="Горный велосипед"
        price="22000"
      />

      <Product
        img={productImage}
        desc="Велосипед горный 26 NX 615 DISC ST 21ск черный"
        alt="Горный велосипед"
        price="32000"
      />
      <Product
        img={productImage}
        desc="Велосипед горный 26 NX 615 DISC ST 21ск черный"
        alt="Горный велосипед"
        price="45000"
      />
    </main>
  );
}

export { App };
