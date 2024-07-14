import { useState } from "react";

function Basket() {
  const [count, setCount] = useState(0);

  return (
    <>
      {!count ? (
        <button className="basket-btn" onClick={() => setCount(count + 1)}>
          В корзину
        </button>
      ) : (
        <div className="counter-wrap">
          <button
            className="counter-minus-btn"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <span className="counter-value">{count} </span>
          <button
            className="counter-plust-btn"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      )}
    </>
  );
}

export default Basket;
