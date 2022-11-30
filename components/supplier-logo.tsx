import React from "react";
import Image from "next/image";
import SlideContainer, { SliderItem } from "./slider";

const SupplierLogos: React.FC = () => (
  <>
    <SlideContainer className="" contentWidth={1600} initialOffsetX={0}>
      <SliderItem width={200}>
        <Image
          src={"/assets/suppliers/vishwas-international.png"}
          width={200}
          height={50}
          alt="VishwasInternational"
          objectFit="contain"
        />
      </SliderItem>
    </SlideContainer>
  </>
);

export default SupplierLogos;
