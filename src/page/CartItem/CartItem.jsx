import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './cart-item.scss';

const CartItem = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  // useParams - то что будет содержать строчка поиска
  const[item, setItem] = useState();

  useEffect(() => {

    async function fetchCart() {
      try {
        const {data} = await axios.get('https://652cdf7ad0d1df5273efc824.mockapi.io/collection/' + id);
        // console.log('https://652cdf7ad0d1df5273efc824.mockapi.io/collection/' + id);
        setItem(data);
      }
      catch (error) {
        alert('Error');
        navigate('/')
      }
    }

    fetchCart();

  }, [])

  if(!item) {
    return 'Loading'
  }

  return (
    <div className="cart-item">
      <div className="cart-item__container">
        <article className="cart-item__article">
          <div className="cart-item__photo">
            <img className='cart-item__image' src={`/${item.image}`} alt={item.title} />
          </div>
          <div className="cart-item__info">
            <span className='cart-item__title'>{item.title}</span>
            <span className="cart-item__price">{item.price} $</span>
          </div>
        </article>
      </div>
    </div>
  );
}
 
export default CartItem;
