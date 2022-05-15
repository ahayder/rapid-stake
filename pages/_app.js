import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  colors: {
    rapidYellow: {
      900: "#FED700",
      800: "#153e75",
      700: "#2a69ac",
    },
    rapidGray: {
      900: "#E6E6E6",
      800: "#153e75",
      700: "#2a69ac",
    },
    rapidBlack: {
      900: "#333333",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  fonts: {
    heading: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
