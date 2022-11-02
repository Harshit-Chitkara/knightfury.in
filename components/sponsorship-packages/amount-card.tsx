import {
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Card, CardProps } from "./card";

export interface PricingCardData {
  features: string[];
  name: string;
  price: string;
}

interface PricingCardProps extends CardProps {
  data: PricingCardData;
  icon: React.ElementType;
  button: React.ReactElement;
}

export const PricingCard = (props: PricingCardProps) => {
  const { data, icon, button, ...rest } = props;
  const { features, price, name } = data;
  const accentColor = "#98A8F8";

  return (
    <Card rounded={{ sm: "xl" }} {...rest}>
      <VStack spacing={3}>
        <Icon aria-hidden as={icon} fontSize="4xl" color={accentColor} />
        <Heading size="lg" fontWeight="extrabold">
          {name}
        </Heading>
      </VStack>
      <Flex
        align="flex-end"
        justify="center"
        fontWeight="extrabold"
        color={accentColor}
        my="8"
      >
        <Heading size="2xl" fontWeight="inherit" lineHeight="0.3em">
          {price}
        </Heading>
      </Flex>
      <List spacing="2" mb="8" maxW="28ch" mx="auto">
        {features.map((feature, index) => (
          <ListItem fontWeight="medium" key={index}>
            <ListIcon
              fontSize="xl"
              as={HiCheckCircle}
              marginEnd={2}
              color={accentColor}
            />
            {feature}
          </ListItem>
        ))}
      </List>
      {button}
    </Card>
  );
};
