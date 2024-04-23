import React, {useEffect, useState} from 'react';
import data, { IPeople } from './data'
import './slaider.scss';
import prev from './../../images/arrow-prev-svgrepo-com.svg'
import next from './../../images/arrow-next-svgrepo-com.svg'

const Slaider = () => {
    const[people, setPeople] = useState(data);
    const[currentIndex, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if(currentIndex < 0){
            setIndex(lastIndex);
        }

        if(currentIndex > lastIndex){
            setIndex(0);
        }
    }, [currentIndex, people])


    useEffect(() => {
        let slider = setInterval(() => setIndex(prevState => prevState + 1), 10000);

        return () => {
            clearInterval(slider);
        }
    }, [currentIndex])

    return (
        <div className="section__slaider">
            {people.map((person: IPeople, personIndex: number) => {
                const {id, image, name, quote} = person;

                let position = 'nextSlide';
                if(personIndex === currentIndex) {
                    position = 'activeSlide';
                }
                
                if(personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === people.length - 1)){
                    position = 'lastSlide';
                }

                return(
                    <article className={`position ${position}`} key={id}>
                            <img src={image} alt={name} className='section__slaider__img' />
                            <h4 className='section__slaider__name'>{name}</h4>
                            <p className='section__slaider__text'>{quote}</p>
                    </article>
                )
            } )}

            
            <img src={prev} alt="prev__img" className='prev' onClick={() => setIndex(prevState => prevState - 1)} />
            <img src={next} alt="next__img" className='next' onClick={() => setIndex(prevState => prevState + 1)} />
        </div> 
    );
};

export default Slaider;