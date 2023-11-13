// import { useState } from "react";
import { useSelector } from "react-redux";
import "./catalog.scss";
import Card from './Card'

const Catalog = () => {

  const collection = useSelector((state) => state.collection.collection);
  const search = useSelector((state) => state.search.search);
  
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
                <Card item={item} key={item.id}/>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
