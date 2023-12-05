import './basket.scss';
import { useState } from "react";

type PropsCounter = {
  price: number;
  plusPriceCounter: (price: number) => void;
  minusPriceCounter: (price: number) => void;
}

const Counter: React.FC <PropsCounter> = ({price, plusPriceCounter, minusPriceCounter}) => {
  const[totalSum, setTotalSum] = useState(price)
  const[total, setTotal] = useState(1)
  // const dispatch = useDispatch();

  const onClickIncrement = () => {
    setTotal(prev => prev + 1);
    setTotalSum(prev => prev + price);
    plusPriceCounter(price);
  }


  const onClickDecrement = () => {
   let limit = 1;
   if(limit < total) {
    setTotal(prev => prev - 1)
    setTotalSum(prev => prev - price);
    minusPriceCounter(price);
   }
  }


  return (
    <>
    <div className="basket-counter">
      <button
        className="basket-counter__btn btn-reset"
        type="button"
        onClick={() => onClickDecrement()}
      >
        -
      </button>
      <div className="basket-counter__total">
        {total}
      </div>
      <button
        className="basket-counter__btn btn-reset"
        type="button"
        onClick={() => onClickIncrement()}
      >
        +
      </button>
    </div>
    <div className="basket__price">{totalSum} $</div>  
    </>
  );
};

export default Counter;
