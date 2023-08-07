import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Mitsubishi Electric India">
        Glad to be associated with Knight Fury, six young pioneers, striving to achieve excellence. All the best to them for the Regional Level.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Sponsor Company 2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Sponsor Company 3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Sponsor Company 4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Sponsor Company 5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Review>
    </CarouselItem>
    <CarouselItem index={5}>
      <Review by="Sponsor Company 6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
