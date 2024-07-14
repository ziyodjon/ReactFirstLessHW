import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import Basket from "./Basket";

function Product({ img, desc, alt, price }) {
  const [chosenGoods, setChosenGoods] = useState(false);

  return (
    <div className={chosenGoods ? "card chosen-card" : "card"}>
      <FaHeart
        className={chosenGoods ? "heart-icon chosen-heart" : "heart-icon"}
        onClick={() => setChosenGoods(!chosenGoods)}
      />
      <img src={img} width="260" alt={alt} />
      <p className="desk">{desc}</p>
      <p className="price">{price}</p>
      <Basket />
    </div>
  );
}

export default Product;
