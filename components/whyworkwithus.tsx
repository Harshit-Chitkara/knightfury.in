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
        <h3 className="text-3xl lg:text-4xl text-center  !leading-[3rem]">
          We're proud to say we've made it to the nationals in every season and
          some of the members of our team have been there since 2 or even 3
          seasons prior to this. Our team has won various accolades such as
          Knockout Champions, Best Verbal Presentation, Best Engineered Car,
          with the Best Pit Display award we won in the Regionals being our most
          recent. Both your company and our team can benefit by forging an
          alliance. Additionally, your company will get the chance to support a
          small team to gain the potential to touch its dreams and meet its
          goals.
        </h3>
      </div>
    </div>
    <Testimonials />
    <div className="flex-1 bg-black"></div>
  </section>
);

export default WhyWorkWithUs;
