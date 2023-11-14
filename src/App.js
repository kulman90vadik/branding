import "./scss-setings/includes.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Header from "./Header/Header";
import Home from "./page/Home/Home";
import Basket from "./page/Basket/Basket";
import Favorites from "./page/Favorites/Favorites";

import { collectionHandler } from './redux/slices/collectionClise'

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);

  useEffect(() => {
    setLoading(true);
    fetch('https://652cdf7ad0d1df5273efc824.mockapi.io/collection')
    .then((res) => res.json())
    .then((json) => {
      dispatch(collectionHandler(json))
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => setLoading(false));
  }, [search])


  return (
    <>
      <Header />
      <Routes>

        <Route path="/" exact element={<Home loading={loading}/>} />
        <Route path="basket" exact element={<Basket />} />
        <Route path="favourite" exact element={<Favorites />} />
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </>
  );
}

export default App;





