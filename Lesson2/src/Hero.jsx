import "./hero.scss";
import "./base.scss";
import main from "../src/assets/hero.svg";
// Hero section
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__left">
          <h2>
            Just <span className="healthy">Eat healthy</span> food to live a
            healthier life
          </h2>
          <p>
            Enjoy a healthy life by eating healthy foods that have extraordinary
            flavors that make your life healthier for today and in the future
          </p>
          <button className="order">Order Now</button>
        </div>
        <div>
          <img src={main} alt="main-photo" className="main__photo" />
        </div>
      </div>
    </>
  );
}
export default Hero;
