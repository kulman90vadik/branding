import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchHandler, closeSearchHandler } from "../redux/slices/searchClise";

const Header = () => {
  const search = useSelector((state) => state.search.search);
  const count = useSelector((state) => state.basketCollection.count);
  
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <div className="header__input">
            <img
              className="header__input-img"
              src="images/search.png"
              alt="search"
            />
            {search && (
              <button
                className="header__input-close btn-reset"
                type="button"
                onClick={() => dispatch(closeSearchHandler())}
              >
                &times;
              </button>
            )}
            <input
              className="header__input-text"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => dispatch(searchHandler(e.target.value))}
            />
          </div>
          <Link to="/" className="header__logo">
            <img className="header__image" src="images/logo.png" alt="logo" />
          </Link>
          <div className="header__langs">
            <button className="header__lang header__lang--en btn-reset" type="button">
              EN
            </button>|
            <button className="header__lang header__lang--de btn-reset" type="button">
              DE
            </button>
          </div>
          <Link to="basket" className="header__corb btn-reset">
            <div className="header__count">{count}</div>  
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_12004_18)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.75865 16.9116L8.125 16.25L7.62024 15.3076L5.33476 2.8633C5.28452 2.59056 5.09727 2.36303 4.83902 2.26171L1.09578 0.791145C0.683232 0.629627 0.217699 0.832266 0.0556768 1.24431C-0.106065 1.65659 0.096518 2.1224 0.508846 2.28442L3.83718 3.59195L6.163 16.2547C6.2331 16.6353 6.56486 16.9118 6.95207 16.9118H7.33788L6.45689 19.3589C6.38315 19.5639 6.41353 19.7916 6.53902 19.9697C6.66434 20.1478 6.86815 20.2538 7.08573 20.2538H7.70366C7.32076 20.6799 7.08573 21.241 7.08573 21.858C7.08573 23.185 8.16545 24.2644 9.49211 24.2644C10.8188 24.2644 11.8985 23.185 11.8985 21.858C11.8985 21.241 11.6635 20.6799 11.2806 20.2538H16.5271C16.1441 20.6799 15.9091 21.241 15.9091 21.858C15.9091 23.185 16.9885 24.2644 18.3155 24.2644C19.6425 24.2644 20.7219 23.185 20.7219 21.858C20.7219 21.241 20.4869 20.6799 20.1041 20.2538H20.8556C21.2248 20.2538 21.524 19.9545 21.524 19.5854C21.524 19.2161 21.2248 18.9169 20.8556 18.9169H8.03682L8.75865 16.9116ZM8.42263 21.8583C8.42263 22.4482 8.90232 22.9278 9.49217 22.9278C10.082 22.9278 10.5616 22.4482 10.5616 21.8583C10.5616 21.2685 10.082 20.7888 9.49217 20.7888C8.90232 20.7888 8.42263 21.2685 8.42263 21.8583ZM17.246 21.8583C17.246 22.4482 17.7256 22.9278 18.3155 22.9278C18.9053 22.9278 19.385 22.4482 19.385 21.8583C19.385 21.2685 18.9053 20.7888 18.3155 20.7888C17.7256 20.7888 17.246 21.2685 17.246 21.8583Z"
                  fill="white"
                />
                <path
                  d="M24.8557 5.2232C24.7126 5.0181 24.4823 4.89132 24.2322 4.88063L8.72447 4.21218C8.27952 4.19271 7.9077 4.53623 7.88868 4.9791C7.86977 5.42181 8.21272 5.79587 8.65554 5.81489L23.1134 6.43814L20.2707 15.3076H7.62024L8.125 16.25L8.75865 16.9116H20.8555C21.2044 16.9116 21.513 16.6862 21.6193 16.3544L24.9615 5.92661C25.0382 5.68862 24.9988 5.42841 24.8557 5.2232Z"
                  fill="#FFC700"
                />
              </g>
              <defs>
                <clipPath id="clip0_12004_18">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to="favourite" className="header__favourite btn-reset">
            <svg
              width="25"
              height="25"
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
          </Link>
        </div>
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__item">
              <a href="#" className="header__link"></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
