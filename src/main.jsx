import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import biCycleImage from "./assets/mountain-bicycle.webp";
import { FaHeart } from "react-icons/fa6";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function Bicycle({ img, desc, alt, price }) {
  const [chosenGoods, setChosenGoods] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={chosenGoods ? "card chosen-card" : "card"}>
        <FaHeart
          className={chosenGoods ? "heart-icon chosen-heart" : "heart-icon"}
          onClick={() => setChosenGoods(!chosenGoods)}
        />
        <img src={img} width="260" alt={alt} />
        <p className="desk">{desc}</p>
        <p className="price">{price}</p>
        {count ? (
          <>
            <Counter count={count} setCount={setCount} />
          </>
        ) : (
          <Basket count={count} setCount={setCount} />
        )}
      </div>
    </>
  );
}

function Counter({ count, setCount }) {
  return (
    <div className="counter-wrap">
      <button className="counter-minus-btn" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span className="counter-value">{count} </span>
      <button className="counter-plust-btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

function Basket({ count, setCount }) {
  const [addToBasket, setAddToBasket] = useState("basket-btn");
  return (
    <button className="basket-btn" onClick={() => setCount(count + 1)}>
      В корзину
    </button>
  );
}

function App() {
  return (
    <main className="goods-wrap">
      <Bicycle
        img={biCycleImage}
        desc="Велосипед горный 26 NX 615 DISC ST 21ск черный"
        alt="Горный велосипед"
        price="12000"
      />

      <Bicycle
        img={biCycleImage}
        desc="Велосипед горный 26 NX 615 DISC ST 21ск черный"
        alt="Горный велосипед"
        price="22000"
      />

      <Bicycle
        img={biCycleImage}
        desc="Велосипед горный 26 NX 615 DISC ST 21ск черный"
        alt="Горный велосипед"
        price="32000"
      />
      <Bicycle
        img={biCycleImage}
        desc="Велосипед горный 26 NX 615 DISC ST 21ск черный"
        alt="Горный велосипед"
        price="45000"
      />
    </main>
  );
}

const rootDomEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootDomEl);

root.render(<App />);
