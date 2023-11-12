import {useState} from 'react';
import { useSelector } from "react-redux";
import "./catalog.scss";
import "./card.scss";

import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slices/basketCollectionClise'
import { onChengeBtn } from '../../../redux/slices/collectionClise'

const Catalog = () => {

  const [er, setEr] = useState(false)
  
  const collection = useSelector((state) => state.collection.collection);
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

const clickToCard = (obj) => {
  dispatch(addToCart(obj));
  dispatch(onChengeBtn(obj));
}


  return (
    <section className="catalog">
      <div className="catalog__container">
        <div className="catalog__top">top</div>

        <ul className="catalog__cards">
          {collection
            .filter((obj) => {
              return obj.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => {
              return (
                <li className="card" key={item.id}>
                  <div className="card__photo">
                    <svg
                      className="card__like"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12004_22)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.8997 2.16105C15.8067 1.76735 16.7847 1.56365 17.7734 1.5625C19.6894 1.56457 21.5263 2.3266 22.8811 3.6814C24.2359 5.03619 24.9979 6.87309 25 8.78906C25 15.9844 13.3945 23.0469 12.9141 23.3242C12.7926 23.3972 12.6535 23.4358 12.5117 23.4358L12.5 21.7344C14.5195 20.4414 23.4375 14.418 23.4375 8.78906C23.4377 7.58486 23.0541 6.41194 22.3423 5.44057C21.6306 4.46921 20.6278 3.74995 19.4796 3.38723C18.3313 3.0245 17.0973 3.03718 15.9567 3.42342C14.8161 3.80967 13.8283 4.54937 13.1367 5.53516C13.0646 5.63752 12.9689 5.72105 12.8578 5.77871C12.7466 5.83636 12.6233 5.86646 12.498 5.86646L12.5 3.85156C13.1761 3.13007 13.9927 2.55474 14.8997 2.16105Z"
                          fill="white"
                        />
                        <path
                          d="M12.5 3.85156C11.5093 2.79418 10.2235 2.05905 8.80974 1.74161C7.39594 1.42417 5.91936 1.53907 4.57168 2.0714C3.224 2.60373 2.06748 3.52891 1.25224 4.72682C0.437007 5.92473 0.000713398 7.34006 0 8.78906C0 15.9844 11.6055 23.0469 12.1094 23.3242C12.2309 23.3972 12.37 23.4358 12.5117 23.4358L12.5 21.7344C10.4805 20.4453 1.5625 14.4219 1.5625 8.78906C1.5635 7.58592 1.9476 6.41434 2.65912 5.44414C3.37064 4.47393 4.37263 3.7555 5.51986 3.39297C6.66708 3.03044 7.89995 3.04263 9.03978 3.42779C10.1796 3.81295 11.1672 4.55106 11.8594 5.53516C11.9315 5.63752 12.0272 5.72105 12.1383 5.77871C12.2495 5.83636 12.3728 5.86646 12.498 5.86646L12.5 3.85156Z"
                          fill="#FFC700"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12004_22">
                          <rect width="25" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <img className="card__image" src={item.image} alt="image" />
                  </div>
                  <span className="card__name">{item.title}</span>
                  <span className="card__price">{item.price} $</span>
                  <div className="card__block">
                    <ul className="card__list">
                      {item.sizes.map((size) => (
                        <li className={`card__item ${er ? 'red' : 'green'}`} key={size} onClick={() => setEr(!er)}>
                          {size}
                        </li>
                      ))}
                    </ul>
                    <button className={`card__btn btn-reset ${item.activeBtn ? 'card__btn--green' : 'card__btn--yellow'}`} type="button" onClick={() => clickToCard(item)}>
                      Add to Cart
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
