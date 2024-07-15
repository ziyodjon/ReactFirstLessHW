import { useState } from "react";
import Button from "./Button";

export default function AddToBasketBtn() {
  const [count, setCount] = useState(0);

  if (count === 0) {
    return (
      <Button
        text="В корзину"
        handleClick={() => setCount(count + 1)}
        classes="basket-btn"
      />
    );
  }

  return (
    <div className="counter-wrap">
      <Button
        text="-"
        handleClick={() => setCount(count - 1)}
        classes="counter-minus-btn"
      />
      {count}
      <Button
        text="+"
        handleClick={() => setCount(count + 1)}
        classes="counter-plust-btn"
      />
    </div>
  );
}
