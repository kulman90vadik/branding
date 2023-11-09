import "./scss-setings/includes.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./page/Home/Home";
import Basket from "./page/Basket/Basket";
import Favourite from "./page/Favourite/Favourite";

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="basket" exact element={<Basket />} />
        <Route path="favourite" exact element={<Favourite />} />
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </>
  );
}

export default App;





