import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Logo from "./logo";

const Footer = () => (
  <div className="bg-black">
    <Container maxW="-moz-fit-content" as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Logo />
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.instagram.com/knight_fury_india/"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="2rem" />}
            />
            <IconButton
              as="a"
              href="https://www.facebook.com/knightfuryindia/"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="2rem" />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/knightfury_in"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="2rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="md" color="gray">
          &copy; {new Date().getFullYear()} Knight Fury. All rights
          reserved.
        </Text>
      </Stack>
    </Container>
  </div>
);

export default Footer;
