import './AboutSlider.scss';
import arrow_left from '../../images/arrow-left.svg';
import arrow_right from '../../images/arrow-right.svg';
import happy from '../../images/happyemoji.svg';
import { useState } from 'react';

export const AboutSlider = () => {
  const items = [
    {
      id: Date.now(),
      img: `${happy}`,
      title: 'Simplicity',
      text: 'We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.',
    },
    {
      id: Date.now(),
      img: `${happy}`,
      title: '1',
      text: 'We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.',
    },
    {
      id: Date.now(),
      img: `${happy}`,
      title: '2',
      text: 'We strive for simplicity in all things: our product, our marketing, our processes, our business model. The result is solutions that are beautiful in their efficiency and clarity, easier to understand wholly, easier to translate to different situations and scales, and easier to change later.',
    }
  ];
  const [curr, setCurr] = useState(0);

  const handleSwipeRight = () => {
    if (curr === items.length - 1) {
      return;
    }
  
    setCurr(curr + 1);
  };

  const handleSwipeLeft = () => {
    if (curr === 0) {
      return;
    }

    setCurr(curr - 1);
  };


  return (
    <div className="about_slider">
      <img src={arrow_left} alt="arrow_left" onClick={handleSwipeLeft} />
        <div className="about_slider__content">
          <img src={items[curr].img} alt="img" className='about_slider__img' />
          <p className="about_slider__title">{items[curr].title}</p>
          <p className="about_slider__text">{items[curr].text}</p>
        </div>
      <img src={arrow_right} alt="arrow_right" onClick={handleSwipeRight} />
    </div>
  );
}
