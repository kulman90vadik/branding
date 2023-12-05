
import './hero.scss'


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
          <div className="hero__info">
            <h1 className="hero__title">
            {/* masons <mark>branding</mark> wordshop */}
            Die Website <mark>befindet</mark> sich in Bearbeitung
            </h1>
            <div className="hero__text">
              <p>
                High-quality printing Branding of clothing and accessories
              </p>
            </div>
            <button className="hero__btn btn-reset" type='button'>Catalog</button>
          </div>
      </div>
    </div>
  );
}
 
export default Hero;