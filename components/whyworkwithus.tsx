import React from "react";
import Testimonials from "./testimonials";
import s from "../styles/whyworkwithus.module.css";

const WhyWorkWithUs: React.FC = () => (
  <section
    className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${s.bg}`}
  >
    <div className="fle"></div>
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold text-center">
        <span className="whitespace-nowrap">why work</span>{" "}
        <span className="whitespace-nowrap">with us?</span>
      </h3>
    </div>
    <div className="flex flex-col justify-center items-center">
      <div className="container mx-auto lg:max-w-[75%] lg:px-10">
        <h3 className="text-3xl lg:text-4xl text-center  !leading-[3.5rem]">
          Both your company and our team can benefit by forging an
          alliance. If with your kind support we can once again reach the
          finals, your company will get the opportunity to advertise your
          product or service at a national level. Additionally, your company will
          get the chance to support a small team to gain the potential to touch
          its dreams and meet its goals.
        </h3>
      </div>
    </div>
    <Testimonials />
    <div className="flex-1 bg-black"></div>
  </section>
);

export default WhyWorkWithUs;
