
import { useSelector } from "react-redux";

const Basket = () => {

const basketCollection = useSelector((state) => state.basketCollection.basketCollection);
console.log(basketCollection)
  return (
    <div className="basket">
      <div className="basket__container">
        {basketCollection.map(elem => <li key={elem.id}>{elem.price}</li>)}
      </div>
    </div>
  );
}
 
export default Basket;