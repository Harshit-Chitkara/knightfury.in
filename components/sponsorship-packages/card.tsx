import { Box, BoxProps } from "@chakra-ui/react";
import * as React from "react";
import { CardBadge } from "./card-badge";

export interface CardProps extends BoxProps {
  isMostValue?: boolean;
}

export const Card = (props: CardProps) => {
  const { children, isMostValue, ...rest } = props;
  return (
    <Box
      bg="gray.600"
      position="relative"
      px="6"
      pb="6"
      pt="16"
      overflow="hidden"
      shadow="lg"
      maxW="md"
      width="100%"
      {...rest}
    >
      {isMostValue && <CardBadge>Highest Value</CardBadge>}
      {children}
    </Box>
  );
};
