
import { useSelector } from "react-redux";
import './favorites.scss';

const Favorites = () => {

  const favoritesCollection = useSelector((state) => state.favoritesCollection.favoritesCollection);
console.log(favoritesCollection)
  return (
    <div className="favorites">
      <div className="favorites__container">
        <ul className="favorites__list">
          {favoritesCollection.map(elem => <li key={elem.id}>{elem.price}</li>)}
        </ul>
      </div>
    </div>
  );
}
 
export default Favorites;