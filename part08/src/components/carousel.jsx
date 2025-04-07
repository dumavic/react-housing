import { useState } from 'react';
import './carousel.css';

const Carousel = () => {
    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg)$/)
    );

    const [index, setIndex] = useState(0);

    const slideFoward = () => {
        // if last image, set it at 0, then go next afterwards
        setIndex(index === images.length - 1 ? 0 : index + 1);
    }

    const slideBackward = () => {
        // if first image, set it at last image, then go backwards
        setIndex(index === 0 ? images.length -1 : index - 1);
    }

  return (

    <section id="carousel">
        <div id="slideshow">
            <div className='carousel-img'>
            <img src={images[index]} alt={images[index]} />
            </div>
            <p id="forward-arrow" onClick={slideFoward}>&gt;</p>
            <p id="backward-arrow" onClick={slideBackward}>&lt;</p>
        </div>
    </section>

  );
}

export default Carousel;
