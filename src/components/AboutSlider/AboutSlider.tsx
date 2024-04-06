import './AboutSlider.scss';
import arrow_left from '../../images/arrow-left.svg';
import arrow_right from '../../images/arrow-right.svg';

export const AboutSlider = () => {
  return (
    <div className="about_slider">
      <img src={arrow_left} alt="arrow_left" />
      <div className="about_slider__content">
        <img src="" alt="" className='about_slider__img' />
        <p className="about_slider__title"></p>
        <p className="about_slider__text"></p>
      </div>
      <img src={arrow_right} alt="arrow_right" />
    </div>
  );
}
