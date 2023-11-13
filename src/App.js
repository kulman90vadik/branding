import "./scss-setings/includes.scss";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./page/Home/Home";
import Basket from "./page/Basket/Basket";
import Favorites from "./page/Favorites/Favorites";

import { useDispatch } from 'react-redux'
import { collectionHandler } from './redux/slices/collectionClise'

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    fetch('https://652cdf7ad0d1df5273efc824.mockapi.io/collection')
    .then((res) => res.json())
    .then((json) => {
      dispatch(collectionHandler(json))
    })
    .catch((err) => {
      console.warn(err);
    })
    // .finally(() => setLoading(false));
  }, [])


  return (
    <>
      <Header />
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="basket" exact element={<Basket />} />
        <Route path="favourite" exact element={<Favorites />} />
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </>
  );
}

export default App;





