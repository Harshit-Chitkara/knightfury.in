import React, { ReactNode } from "react";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  HStack,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Global } from "@emotion/react";
import SupplierLogos from "./supplier-logo";
import Testimonials from "./testimonials";
import styles from "../styles/sponsors.module.css";
import { SponsorshipPackage } from "./sponsorship-packages/sponsorship-package";

export const AmountCovered = () => {
  return (
    <div className="container mx-auto lg:max-w-[70%] lg:px-10">
      <h3 className="text-xl lg:text-2xl tracking-tight text-center px-10">
        <Stat>
          <StatLabel fontSize={24}>Amount Covered</StatLabel>
          <StatNumber>₹0</StatNumber>
          <StatHelpText fontSize={18}>
            <StatArrow type="increase" />
            Oct 01 - Nov 01
          </StatHelpText>
        </Stat>
      </h3>
    </div>
  );
};

const Sponsors: React.FC = () => (
  <section
    className={`bg-white min-h-screen flex flex-col justify-center gap-8 md:gap-16 text-black ${styles.bg}`}
  >
    <div className="flex-1 bg-black"></div>
    <div className="flex flex-col justify-center items-center">
      <h3 className="mb-12 font-bold text-4xl lg:text-5xl tracking-tight text-center px-10 !leading-[3.5rem]">
        Our Sponsors (TBA)
      </h3>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Box w="100%" align="center">
          <NextLink href="https://knightfury.in/">
            <LinkBox cursor="pointer">
              <Image
                src="/assets/sponsors/sponsor-logo.svg"
                height={100}
                width={300}
                alt="Sponsor Logo"
                className="grid-item-thumbnail"
              />
              <LinkOverlay href="https://knightfury.in/">
                <Text mt={2} fontSize={24}>
                  Sponsor Company 1
                </Text>
              </LinkOverlay>
              <Text fontSize={18}>About the company</Text>
            </LinkBox>
          </NextLink>
        </Box>
        <Box w="100%" align="center">
          <NextLink href="https://knightfury.in/">
            <LinkBox cursor="pointer">
              <Image
                src="/assets/sponsors/sponsor-logo.svg"
                height={100}
                width={300}
                alt="Sponsor Logo"
                className="grid-item-thumbnail"
              />
              <LinkOverlay href="https://knightfury.in/">
                <Text mt={2} fontSize={24}>
                  Sponsor Company 2
                </Text>
              </LinkOverlay>
              <Text fontSize={18}>About the company</Text>
            </LinkBox>
          </NextLink>
        </Box>
      </SimpleGrid>
      {/* <h3 className="text-3xl lg:text-4xl mt-8 mb-12 font-bold text-center">
        <span className="whitespace-nowrap">Our Suppliers</span>{" "}
      </h3>
      <SupplierLogos /> */}
    </div>
    <AmountCovered />
    <div className="text-white">
      <SponsorshipPackage />
    </div>
    <Testimonials />
    <div className="flex-1 bg-black"></div>
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
