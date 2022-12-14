import { Button, ButtonProps } from "@chakra-ui/react";
import * as React from "react";

export const ActionButton = (props: ButtonProps) => (
  <div>
    <a href="#contactus">
      <Button
        bg="#98A8F8"
        size="lg"
        w="full"
        fontWeight="extrabold"
        {...props}
      />
    </a>
  </div>
);
