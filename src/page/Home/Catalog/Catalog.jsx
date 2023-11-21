import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./catalog.scss";
import Card from "./Card";
import Loader from "../../../Loader/Loader";

import { categoryChange, chengePriceOrder } from "../../../redux/slices/collectionClise";
import { useState } from "react";
import Pagination from "../../../Pagination/Pagination";


let category = ["All", "Sweater", "T-shirt", "Hemd"];
let sortPrice = [
  {'title': 'Price', 'id': ''},
  {'title': 'Ascending', 'id': 'asc'},
  {'title': 'Descending', 'id': 'desc'}
];

const Catalog = ({ loading }) => {


  const refPrice = useRef();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0);
  // const [priceCount, setPriceCount] = useState(0);
  const collection = useSelector((state) => state.collection.collection);
  const search = useSelector((state) => state.search.search);
  const countCategory = useSelector((state) => state.collection.countCategory);




  const clickItemPrice = (index, id) => {
    setOpen(!open);
    setCount(index);
    dispatch(chengePriceOrder(id));
    // console.log(index);
  }


  useEffect(() => {
    const clickSortHandler = (event) => {
      if(!event.composedPath().includes(refPrice.current)) {
        setOpen(false)
      }
    }
    document.body.addEventListener('click', clickSortHandler);
    return () => {
      document.body.removeEventListener('click', clickSortHandler);
    }
  }, [])

  return (
    <section className="catalog">
      <div className="catalog__container">
        <div className="catalog__inner">
          <ul className="catalog__top">
            {category.map((item, i) => {
              return (
                <li className="catalog__item" key={item}>
                  <button
                    className={`catalog__btn btn-reset ${
                      countCategory === i ? "catalog__btn--active" : ""
                    }`}
                    type="button"
                    onClick={() => dispatch(categoryChange(i))}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="catalog__price" ref={refPrice}>
            <button className="catalog__price-btn btn-reset" type="button" onClick={() => setOpen(!open)}>
              {sortPrice[count].title}
              <svg className={`catalog__price-svg ${open ? 'catalog__price-svg--active' : ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path></svg>
            </button>
            <ul className="catalog__price-list" style={{ maxHeight: open ? '500px' : '0px' }}>
              {sortPrice.map((el, index) => (
                <li className="catalog__price-item" key={el.title} onClick={() => clickItemPrice(index, el.id)}>{el.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="catalog__cards">
          {loading
            ? [...Array(10)].map((item, i) => <Loader key={i} />)
            : collection
                .filter((obj) => {
                  return obj.title.toLowerCase().includes(search.toLowerCase());
                })
                .map((item) => {
                  return <Card item={item} key={item.id} />;
                })}
        </ul>


        <Pagination />
      </div>
    </section>
  );
};

export default Catalog;
