// import { useState } from "react";
import "./card.scss";
import { onChengeSizes } from "../../../redux/slices/collectionClise";
import { useDispatch } from "react-redux";

const Sizes = ({ sizes, id }) => {
  const dispatch = useDispatch();

  const changeSize = (index) => {

  dispatch(onChengeSizes(index, id))
      console.log(id);
  }

  return (
    <>
      {sizes.map((size, index) => (
        <li
          className={`card__item ${
            size.activeSize ? "card__item--active" : ""
          }`}
          key={size.size}
          onClick={() => changeSize(index)}
        >
          {size.size}
        </li>
      ))}
    </>
  );
};

export default Sizes;
