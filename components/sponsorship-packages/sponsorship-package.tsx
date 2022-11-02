import { Box, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { HiCurrencyRupee } from "react-icons/hi";
import { ActionButton } from "./action-button";
import { PricingCard } from "./amount-card";

export const SponsorshipPackage = () => (
  <Box as="section" bg="black" py="14" px={{ base: "4", md: "8" }}>
    <SimpleGrid
      columns={{ base: 1, lg: 3 }}
      spacing={{ base: "8", lg: "0" }}
      maxW="7xl"
      mx="auto"
      justifyItems="center"
      alignItems="center"
      className="text-white"
    >
      <PricingCard
        data={{
          price: "₹20,000+",
          name: "Bronze",
          features: [
            "Pit Display: Small Logo on flexes",
            "School PTMs: Small logo on stalls",
            "Banners outside school: Small Logo on side",
            "Social Media: 2 Shoutouts",
            "Website: Logo and Link",
          ],
        }}
        icon={HiCurrencyRupee}
        button={
          <ActionButton variant="outline" borderWidth="2px">
            Sponsor Us
          </ActionButton>
        }
      />
      <PricingCard
        zIndex={1}
        isMostValue
        data={{
          price: "₹50,000+",
          name: "Gold",
          features: [
            "Team Uniform: Big Central Logo",
            "Pit Display: Big Central Logo",
            "Car's Exterior Body: Big Central Logo",
            "Merchandise: Logo on each product",
            "School PTMs: Large logo with information giveaway of merchandise",
            "Banners outside School: Large logo with information",
            "Promotion in Major school events",
            "ConstantPromotion on Social Media",
            "Logo and link on website",
            "Verbal Promotion in Pit Display",
            "Promotion in Team Videos",
          ],
        }}
        icon={HiCurrencyRupee}
        button={<ActionButton variant="outline">Sponsor Us</ActionButton>}
      />
      <PricingCard
        data={{
          price: "₹35,000+",
          name: "Silver",
          features: [
            "Team Uniform: Big Central Logo",
            "Pit Display: Medium-sized Logo",
            "Car's Exterior Body: Big Central Logo",
            "Merchandise: Logo on some products",
            "School PTMs: Large logo on stall",
            "Banners outside School: Medium-sized logo",
            "Promotion on Social Media",
            "Logo and link on website",
            "Verbal Promotion in Pit Display",
          ],
        }}
        icon={HiCurrencyRupee}
        button={
          <ActionButton variant="outline" borderWidth="2px">
            Sponsor Us
          </ActionButton>
        }
      />
    </SimpleGrid>
  </Box>
);
