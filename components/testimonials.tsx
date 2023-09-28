import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Mitsubishi Electric India">
        Glad to be associated with Knight Fury, six young pioneers, striving to achieve excellence. All the very best to them for the Regional Level.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Pragya Prakashan">
        Good job team Knight Fury! Congratulations on qualifying for the regionals. The team&apos;s portfolio is also outstanding.
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Maped">
        Team Knight Fury reached out to us via mail. At first they seemed too good to be true. Maped and Knight Fury both share the ambition of always doing our best.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Orange Education">
        Proud to be sponsoring Knight Fury. A team of 6 enthusiastic, dedicated and ridiculously talented students. Best of luck to them for their competition.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Yep Education">
        Pleased with Knight Fury&apos;s communication, insight and delivery. Utterly satisfied to see such knowledge of Return on Investments in children. All the best from our team.
      </Review>
    </CarouselItem>
    <CarouselItem index={5}>
      <Review by="Seed to Plant">
        It was wonderful to collaborate with Team Knight Fury. Best of luck to them for the Regional Qualifiers.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
