import { useState } from "react";

export default function AddToBasketBtn() {
  const [count, setCount] = useState(0);

  if (count === 0) {
    return (
      <button className="basket-btn" onClick={() => setCount(count + 1)}>
        В корзину
      </button>
    );
  }

  return (
    <div className="counter-wrap">
      <button className="counter-minus-btn" onClick={() => setCount(count - 1)}>
        -
      </button>
      {count}
      <button className="counter-plust-btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
