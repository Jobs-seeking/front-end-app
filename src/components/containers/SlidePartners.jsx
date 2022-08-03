import React, { Component } from "react";
import Slider from "react-slick";
import PartnerLogo from "../core-ui/PartnersLogo"
export default class SlidePartners extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4.5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
        </Slider>
      </div>
    );
  }
}