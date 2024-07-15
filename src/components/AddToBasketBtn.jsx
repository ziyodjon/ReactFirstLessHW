import { useState } from "react";
import Btn from "./Btn";

export default function AddToBasketBtn() {
  const [count, setCount] = useState(0);

  if (count === 0) {
    return (
      <Btn
        text="В корзину"
        handleClick={() => setCount(count + 1)}
        classes="basket-btn"
      />
    );
  }

  return (
    <div className="counter-wrap">
      <Btn
        text="-"
        handleClick={() => setCount(count - 1)}
        classes="counter-minus-btn"
      />
      {count}
      <Btn
        text="+"
        handleClick={() => setCount(count + 1)}
        classes="counter-plust-btn"
      />
    </div>
  );
}
