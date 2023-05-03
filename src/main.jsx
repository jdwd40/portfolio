import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto-slab/400.css"; // Regular weight
import "@fontsource/roboto-slab/700.css"; // Bold weight
import "@fontsource/open-sans/400.css"; // Regular weight
import "@fontsource/open-sans/400-italic.css"; // Regular italic weight
import "@fontsource/open-sans/700.css"; // Bold weight
import Footer from "./components/Footer";

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);