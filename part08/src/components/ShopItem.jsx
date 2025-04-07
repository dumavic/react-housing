import { useState } from 'react';
import './shopitem.css';

const ShopItem = () => {
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

<section class="item-page-container">

</section>

  );
}

export default Carousel;
