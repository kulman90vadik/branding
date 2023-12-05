
import "./card.scss";

type PropsSizes = {
  sizes: { 
    size: string; activeSize: boolean 
  }[];
  
}

const Sizes:React.FC <PropsSizes> = ({ sizes }) => {

  return (
    <>
      {sizes.map((size) => (
        <li
          className={`card__item ${
            size.activeSize ? "card__item--active" : ""
          }`}
          key={size.size}
        >
          {size.size}
        </li>
      ))}
    </>
  );
};

export default Sizes;
