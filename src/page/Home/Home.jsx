import Catalog from "./Catalog/Catalog";
import Hero from './Hero/Hero'

const Home = ({loading}) => {

  return ( 
    <>
      <Hero />
      <Catalog  loading={loading}/>
    </>
  );

}
 
export default Home;