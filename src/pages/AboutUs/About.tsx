import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import first_img from '../../images/essentional.svg';
import second_img from '../../images/search.svg';
import arrow_right from '../../images/arrow.svg';
import vision from '../../images/vision.png';
import mission from '../../images/second_vision.png';
import arrow_type from '../../images/arrow_type.svg';
import './About.scss';
import { AboutSlider } from '../../components/AboutSlider/AboutSlider';

export const About = () => {
  return (
    <div className="about">
      <Navbar />
      <header className="about__header">
        <div className="about__header__wrap">
          <h1 className="about__header__title">Global Market Leader</h1>
          <p className="about__header__subtitle">We’ve found to connect independent traders to the potential of the global stock market since 2021. Today, we continue to challenge ourselves to provide traders with what they need to succeed.</p>
          <button className='about__header__btn'>Learn More</button>
        </div>
      </header>
      <section className="about__trust">
        <div className="about__trust__wrap">
          <div className="about__trust__top">
            <p className="about__trust__title">A trading partner you can trust</p>
            <p className="about__trust__subtitle">At Tradiant, we rigorously focus on quality and transparency. Our order execution quality is independently monitored. Order execution with high quality means: you save money with every investment you make with Tradiant.</p>
          </div>
          <div className="about__trust__bottom">
            <div className="block">
              <img src={first_img} alt="img" className='block__img' />
              <p className="block__title">Quality execution on every trade</p>
              <p className="block__subtitle">Backed by multiple analyzes and precise algorithms providing quality execution decisions on every trade. Guarantee your comfort and perfection in making decisions.</p>
              <Link to="/" className='block__group'>
                <span className="block__text">View our execution scoreboard</span>
                <img src={arrow_right} alt="arrow" className='block__arrow' />
              </Link>
            </div>
            <div className="block">
              <img src={second_img} alt="img" className='block__img' />
              <p className="block__title">Transparent & competitive pricing</p>
              <p className="block__subtitle">Provides transparency Pricing Emphasizes Value, not Price. As price becomes clearer to everyone in the market, each competitor's value also comes into sharper focus.</p>
              <Link to="/" className='block__group'>
                <span className="block__text">View pricing and execution advantage</span>
                <img src={arrow_right} alt="arrow" className='block__arrow' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <img src={vision} alt="img__vision" className='about__vision__img' />
        <div className="about__vision__text">
          <p className="about__vision__title">Our Vision</p>
          <p className="about__vision__subtitle">Our vision is to become a trusted advisor, intermediary, and partner to assist customers in determining financial strategies in the capital market and Become a professional reinsurance broker with a global reputation</p>
          <div className="about__vision__group">
            <span className="about__vision__link">See More</span>
            <img src={arrow_type} alt="arrow" className='about__vision__arrow' />
          </div>
        </div>
      </section>
      <section className="about__vision top">
        <div className="about__vision__text">
          <p className="about__vision__title">Our Mission</p>
          <p className="about__vision__subtitle">Providing excellent service from risk placement to settlement of compensation in the interest of obtaining the best capital market results. Maintain the profitability of each user with the aim of meeting the expectations of each user</p>
          <div className="about__vision__group">
            <span className="about__vision__link">See More</span>
            <img src={arrow_type} alt="arrow" className='about__vision__arrow' />
          </div>
        </div>
        <img src={mission} alt="img__mission" className='about__vision__img' />
      </section>
      <section className="about__values">
        <div className="about__values__top">
          <p className="about__values__title">Our Values</p>
          <div className="about__values__subtitle">Our values are reflected in our product offering and user experience, as well as being embedded in our internal culture and employee experience.</div>
        </div>
        <AboutSlider />
      </section>
    </div>
  );
}
