import { useState } from "react";
import "./card.scss";

const Sizes = ({ sizes }) => {
  const [count, setCount] = useState(1);

  return (
    <>
      {sizes.map((size, index) => (
        <li
          className={`card__item ${
            count === index ? "card__item--active" : ""
          }`}
          key={size}
          onClick={() => setCount(index)}
        >
          {size}
        </li>
      ))}
    </>
  );
};

export default Sizes;
