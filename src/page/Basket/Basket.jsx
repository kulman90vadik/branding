import { useSelector } from "react-redux";
import "./basket.scss";
import Counter from "./Counter";
import { useState } from "react";

const Basket = () => {

  const[open, setOpen] = useState(false);

  const basketCollection = useSelector(
    (state) => state.basketCollection.basketCollection
  );
  const color = ["white", "yellow", "red", "black"];
  console.log(basketCollection);

  const rr = () => {};

  return (
    <div className="basket">
      <div className="basket__container">
        <ul className="basket__list">
          {basketCollection.map((elem) => {
            return (
              <li key={elem.id} className="basket__item">
                <div className="basket__photo">
                  <img src={elem.image} alt="image" className="basket__image" />
                </div>
                <span className="basket__title">{elem.title}</span>
                <div className="basket__sizes">
                  {elem.sizes.map((item) => (
                    <button className="basket__size btn-reset" type="button">
                      {item}
                    </button>
                  ))}
                </div>

                <div className="basket-select">
                  <button
                    className="basket-select__btn btn-reset"
                    type="button"
                    onClick={() => setOpen(!open)}
                  >
                    {color[0]}
                    <svg class="basket-select__svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path></svg>
                  </button>
                  
                  <ul className='basket-select__list' style={{ maxHeight: open ? '500px' : '0px' }}>
                    {color.map((el) => (
                      <li className="basket-select__item" key={el}>
                        {el}
                      </li>
                    ))}
                  </ul>

                </div>
                <Counter price={elem.price} />
                <button type="button"  className="btn-reset basket__close">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L15.5 15.5" stroke="black" strokeWidth="2" />
                    <path
                      d="M15.5 1L0.999999 15.5"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Basket;
