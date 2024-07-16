import { useEffect, useRef } from "react";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({ sliderContent, slidesToShow, slidesToScroll }) => {

    const sliderRef = useRef(null)

    const options = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll
    };

    useEffect(() => {
        // Initialize Slick carousel
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0); // Optional: go to the first slide on mount
        }
    }, [])

    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...options}>
                {sliderContent}
            </Slider>
        </div>
    )
}

export default CarouselComponent