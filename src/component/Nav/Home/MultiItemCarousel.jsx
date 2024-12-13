import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { fansFavorite } from "./fansFavorite";
import CarouselItem from "./CarouselItem";

const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2500,
        arrows:false

      };
    return (
        <div>
            <Slider {...settings}>
                {fansFavorite.map((item)=> (
                <CarouselItem image = {item.image} title={item.title}/>
            ))}
            </Slider>
        </div>
    )
}

export default MultiItemCarousel