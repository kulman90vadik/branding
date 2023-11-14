
import { useSelector } from "react-redux";
import './favorites.scss';
import Card from "../Home/Catalog/Card";

const Favorites = () => {

  const favoritesCollection = useSelector((state) => state.favoritesCollection.favoritesCollection);
  console.log(favoritesCollection)
  return (
    <div className="favorites">
      <div className="favorites__container">
        <ul className="favorites__list">
          {favoritesCollection.map(item => <Card item={item} key={item.id}/>)}
        </ul>
      </div>
    </div>
  );
}
 
export default Favorites;