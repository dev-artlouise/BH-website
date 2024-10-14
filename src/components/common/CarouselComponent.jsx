import { useEffect, useRef } from "react";

import { Box } from "@mui/material";

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
        slidesToScroll: slidesToScroll,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200, // Adjust for large screens
                settings: {
                    slidesToShow: slidesToShow,
                    slidesToScroll: slidesToScroll,
                },
            },
            {
                breakpoint: 900, // Adjust for medium screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600, // Adjust for small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
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