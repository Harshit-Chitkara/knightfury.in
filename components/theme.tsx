import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: Record<string, any> | StyleFunctionProps) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: Record<string, any> | StyleFunctionProps) => ({
      color: mode("#3a2470", "#98A8F8")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'Sans Fransisco'",
  body: "'Sans Fransisco'",
};

const colors = {
  knightfury: {
    100: "#98A8F8",
    200: "#",
    300: "#4863cb",
    400: "#",
    500: "#3b51a5",
    600: "#8250fb",
    700: "#",
    800: "#6629fb",
    900: "#3a2470",
  },
  babyPurple: "#98A8F8",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
