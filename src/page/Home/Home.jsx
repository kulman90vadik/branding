import Catalog from "./Catalog/Catalog";
import Hero from './Hero/Hero';
import Slider from './Slider/Slider';

const Home = ({loading}) => {

  return ( 
    <>
      <Hero />
      <Catalog  loading={loading}/>
      <Slider />
    </>
  );

}
 
export default Home;