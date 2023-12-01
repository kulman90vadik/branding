import "./scss-setings/includes.scss";
// import axios from 'axios';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Home from "./page/Home/Home";
import Basket from "./page/Basket/Basket";
import Favorites from "./page/Favorites/Favorites";
import Reviews from './page/Reviews/Reviews';
import NotFound from "./page/NotFound/NotFound";
import CartItem from "./page/CartItem/CartItem";

import { fetchCollection } from './redux/slices/collectionClise';
import Layouts from "./layouts/Layouts";

const App = () => {

  // type CollectionItem = {id: string, title: string, price: string, activeBtn: boolean, sizes: {size: string, activeSize: boolean}[]}

  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const countCategory = useSelector((state) => state.collection.countCategory);
  const priceOrderId = useSelector((state) => state.collection.priceOrderId);
  const countPage = useSelector((state) => state.collection.countPage);

  useEffect( () => {

    // (async () => {

      // setLoading(true);

      let categoryId = countCategory ? `category=${countCategory}` : "";
      let orderId = priceOrderId ? `&sortBy=price&order=${priceOrderId}` : '';
      let page = `&page=${countPage}&limit=5`;
      dispatch(fetchCollection({categoryId, page, orderId}));


//FETCH - оюычный запрос fetch

    // fetch(`https://652cdf7ad0d1df5273efc824.mockapi.io/collection?${categoryId}${page}${orderId}`)
    // .then((res) => res.json())
    // .then((json) => {
    //   dispatch(collectionHandler(json))
    // })
    // .catch((err) => {
    //   console.warn(err);
    // })
    // .finally(() => setLoading(false));

//AXIOS - обычный запрос axios

    // axios.get(`https://652cdf7ad0d1df5273efc824.mockapi.io/collection?${categoryId}${page}${orderId}`)
    // .then((res) => {
    //  dispatch(collectionHandler(res.data));
    // })
    // .catch((err) => {
    //    console.warn(err);
    //    setLoading(false);
    // });

//AXIOS - async - await await - достаёт сразу из промиса данные 
      // try {
        // const res = await axios.get(`https://652cdf7ad0d1df5273efc824.mockapi.io/collection?${categoryId}${page}${orderId}`);
        // dispatch(fetchCollection(categoryId, page, orderId));
        // setLoading(false);
      // }
      // catch (error) {
        // console.warn(error);
        // setLoading(false);
      // }
      // finally {
        // console.log('Выполниться в любом случаи');
      // }


    // }) ();

  }, [search, countCategory, priceOrderId, countPage])



  return (
    <>

      <Routes>

        <Route path="/" element={<Layouts />}>
          
          <Route path="" element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="favorite" element={<Favorites />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="item/:id" element={<CartItem />} />
          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>

    </>
  );
}

export default App;





