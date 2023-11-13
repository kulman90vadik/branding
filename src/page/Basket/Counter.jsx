import './basket.scss';
import { useState } from "react";


const Counter = ({price}) => {

  const[totalSum, setTotalSum] = useState(price)
  const[total, setTotal] = useState(0)

  const onClickIncrement = () => {
    setTotal(prev => prev + 1);
    setTotalSum(prev => prev + price)
  }
  const onClickDecrement = () => {
   let limit = 0;
   if(limit < total) {
    setTotal(prev => prev - 1)
    setTotalSum(prev => prev - price)
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
    <div className="basket__price">{totalSum}</div>  
    </>
  );
};

export default Counter;
