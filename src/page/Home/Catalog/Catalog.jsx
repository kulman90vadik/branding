// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./catalog.scss";
import Card from "./Card";
import Loader from "../../../Loader/Loader";

import { categoryChange } from "../../../redux/slices/collectionClise";
let category = ["All", "Sweater", "T-shirt", "Hemd"];
let sortPrice = ["Price", "Expensive", "Cheaper"];

const Catalog = ({ loading }) => {
  const dispatch = useDispatch();

  const collection = useSelector((state) => state.collection.collection);
  const search = useSelector((state) => state.search.search);
  const countCategory = useSelector((state) => state.collection.countCategory);

  return (
    <section className="catalog">
      <div className="catalog__title">
        Die Website befindet sich in Bearbeitung
      </div>
      <div className="catalog__container">
        <div className="catalog__inner">
          <ul className="catalog__top">
            {category.map((item, i) => {
              return (
                <li className="catalog__item" key={item}>
                  <button className={`catalog__btn btn-reset ${countCategory === i ? 'catalog__btn--active' : ''}`} type="button" onClick={() => dispatch(categoryChange(i))}>
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="catalog__price">
            <button className="catalog__price-btn btn-reset" type="button">
            {sortPrice[0]}
              
            </button>
            <ul className="catalog__price-list">
            {sortPrice.map(el => <li>{el}</li>)}
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
      </div>
    </section>
  );
};

export default Catalog;
