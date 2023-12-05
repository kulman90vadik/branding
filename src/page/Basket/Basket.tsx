import { useSelector, useDispatch } from "react-redux";
import "./basket.scss";
import Counter from "./Counter";

import ColorSelect from "./ColorSelect";
import { deleteCartBasket, plusTotalPrice, minusTotalPrice} from "../../redux/slices/basketCollectionClise";
import { onChengeBtn } from "../../redux/slices/collectionClise";
import {RootState} from '../../redux/store'
//
const Basket = () => {

  type BasketItem = {
    id: number;
    title: string;
    price: number;
    activeBtn: boolean;
    image: string;
    activeLike: boolean;
    sizes: { size: string; activeSize: boolean }[];
  };

  const basketCollection = useSelector((state: RootState) => state.basketCollection.basketCollection);
  const total = useSelector((state: RootState) => state.basketCollection.tottal);
  const dispatch = useDispatch();

  const delCart = (obj: BasketItem) => {
    dispatch(deleteCartBasket(obj));
    dispatch(onChengeBtn(obj));
  };

  const plusPriceCounter = (price: number) => {
    // console.log(price);
    dispatch(plusTotalPrice(price));
  };
  const minusPriceCounter = (price: number) => {
    dispatch(minusTotalPrice(price));
  };

  return (
    <>
      {basketCollection.length > 0 ? (
        <div className="basket">
          <div className="basket__container">
            <>
              <ul className="basket__list">
                {basketCollection.map((elem) => {
                  return (
                    <li key={elem.id} className="basket__item">
                      <div className="basket__photo">
                        <img
                          src={elem.image}
                          alt="cloth"
                          className="basket__image"
                        />
                      </div>
                      <span className="basket__title">{elem.title}</span>
                      <div className="basket__sizes">
                        {elem.sizes.map((item) => (
                          <button
                            className="basket__size btn-reset"
                            type="button"
                            key={item.size}
                          >
                            {item.size}
                          </button>
                        ))}
                      </div>

                      <ColorSelect />

                      <Counter
                        plusPriceCounter={plusPriceCounter}
                        minusPriceCounter={minusPriceCounter}
                        price={elem.price}
                      />

                      <button
                        type="button"
                        onClick={() => delCart(elem)}
                        className="btn-reset basket__close"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L15.5 15.5"
                            stroke="black"
                            strokeWidth="2"
                          />
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

              <div className="basket__checkout">
                <span className="basket__title">Checkout: {total}</span>
                <div className="basket__delivery">Delivery: 10 $</div>
                <div className="basket__total">Total: {total + 10}</div>
                <button className="basket__button btn-reset" type="button">
                  Checkout
                </button>
              </div>
            </>
          </div>
        </div>
      ) : (
        <div className="basket__empty">
          <img
            src="images/empty-cart.svg"
            alt="Basket leer"
            className="basket__images"
          />
        </div>
      )}
    </>
  );
};

export default Basket;
