// import { useState } from "react";
import { useSelector } from "react-redux";
import "./catalog.scss";
import Card from "./Card";
import Loader from "../../../Loader/Loader";

const Catalog = ({ loading }) => {
  const collection = useSelector((state) => state.collection.collection);
  const search = useSelector((state) => state.search.search);

  return (
    <section className="catalog">
      <div className="catalog__title">
        Die Website befindet sich in Bearbeitung
      </div>
      <div className="catalog__container">
        <div className="catalog__top">top</div>

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
