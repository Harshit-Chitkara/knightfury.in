import React, { ReactNode } from "react";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Global } from "@emotion/react";
import SupplierLogos from "./supplier-logo";
import Testimonials from "./testimonials";
import styles from "../styles/sponsors.module.css";
import { SponsorshipPackage } from "./sponsorship-packages/sponsorship-package";

const Sponsors: React.FC = () => (
  <section
    className={`bg-white min-h-screen flex flex-col justify-center gap-12 md:gap-24 text-black ${styles.bg}`}
  >
    <div className="flex-1 bg-black"></div>
    <div className="flex flex-col justify-center items-center text-center">
      <h3 className="mb-12 font-bold text-4xl lg:text-5xl tracking-tight text-center px-10 !leading-[3.5rem]">
        Our Sponsors
      </h3>
      <SimpleGrid columns={[1, 1, 2]} gap={14}>
        <Box w="100%">
          <NextLink href="https://mitsubishielectric.in/">
            <LinkBox cursor="pointer">
              <Image
                src="/assets/sponsors/mitsubishi-electric.svg"
                height={100}
                width={315}
                alt="Mitsubishi Electric"
                className="grid-item-thumbnail"
              />
              <LinkOverlay href="https://mitsubishielectric.in/">
                <Text mt={1} className="underline underline-offset-4 decoration-2" fontSize={24}>
                  Mitsubishi Electric
                </Text>
              </LinkOverlay>
            </LinkBox>
          </NextLink>
          <Text mt={2} fontSize={18} fontWeight="light" maxW="96">Mitsubishi Electric is one of the world's leading names in the manufacture and sales of electrical and electronic products and systems used in a broad range of fields and applications.</Text>
        </Box>
        <Box w="100%">
          <NextLink href="http://pragyaprakashan.com">
            <LinkBox cursor="pointer">
              <Image
                src="/assets/sponsors/pragya-prakashan.jpg"
                height={100}
                width={295}
                alt="Pragya Prakashan"
                className="grid-item-thumbnail"
              />
              <LinkOverlay href="http://pragyaprakashan.com">
                <Text mt={1} className="underline underline-offset-4 decoration-2" fontSize={24}>
                  Pragya Prakashan
                </Text>
              </LinkOverlay>
            </LinkBox>
          </NextLink>
          <Text mt={2} fontSize={18} fontWeight="light" maxW="96">Educational publisher of books for ICSE/CBSE affiliated schools, Pragya Prakshan is a publishing house of distinction established in 1993.</Text>
        </Box>
      </SimpleGrid>
      {/* <h3 className="text-3xl lg:text-4xl mt-8 mb-12 font-bold text-center">
        <span className="whitespace-nowrap">Our Suppliers</span>{" "}
      </h3>
      <SupplierLogos /> */}
    </div>
    <div className="flex-1">
      <SponsorshipPackage />
      <Testimonials />
    </div>
  </section>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);

export default Sponsors;
