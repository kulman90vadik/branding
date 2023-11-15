import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./basket.scss";
import Counter from "./Counter";

import ColorSelect from "./ColorSelect";
import { deleteCartBasket } from "../../redux/slices/basketCollectionClise";
import { onChengeBtn } from "../../redux/slices/collectionClise";
// 
const Basket = () => {
  const basketCollection = useSelector((state) => state.basketCollection.basketCollection);
  console.log(basketCollection);
  const dispatch = useDispatch();

  const delCart = (obj) => {
    dispatch(deleteCartBasket(obj))
    dispatch(onChengeBtn(obj))
  };

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
                    <button className="basket__size btn-reset" type="button" key={item.size}>
                      {item.size}
                    </button>
                  ))}
                </div>

                <ColorSelect />
                
                <Counter price={elem.price} />
                <button type="button" onClick={() => delCart(elem)} className="btn-reset basket__close">
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
