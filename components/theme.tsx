import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "'Raleway'",
};

const config = {
  useSystemColorMode: false,
}


const theme = extendTheme({ fonts, config });
export default theme;
