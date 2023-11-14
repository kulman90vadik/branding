import Catalog from "./Catalog/Catalog";


const Home = ({loading}) => {

  return ( 
    <>
      <Catalog  loading={loading}/>
    </>
  );

}
 
export default Home;