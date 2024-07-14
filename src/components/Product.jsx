import { useState } from "react";
import AddToBasketBtn from "./AddToBasketBtn";
import { FaHeart } from "react-icons/fa6";

export default function Product({ img, desc, alt, price }) {
  const [chosenGoods, setChosenGoods] = useState(false);

  return (
    <div className={chosenGoods ? "card chosen-card" : "card"}>
      <button
        className={"heart-icon"}
        onClick={() => setChosenGoods(!chosenGoods)}
      >
        <FaHeart className={chosenGoods ? "chosen-heart" : ""} />
      </button>
      <div className="product-image">
        <img src={img} width="260" alt={alt} />
      </div>
      <p className="desk">{desc}</p>
      <p className="price">{price}</p>
      <AddToBasketBtn />
    </div>
  );
}
