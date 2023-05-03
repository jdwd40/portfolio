import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    tech: {
      lightBlue: '#172d13',
      brightBlue: '#FFFFFF',
      white: '#FFFFFF',
      orange: '#d76f30',
      lightGreen: '#6bb77b',
      darkGreen: '#172d13'
    },
  },
  fonts: {
    heading: 'Roboto Slab',
    body: 'Open Sans',
  },
  components: {
    TextGradient: {
      baseStyle: {
        background:
          'linear-gradient(to right, tech.brightBlue, tech.lightBlue)',
        backgroundClip: 'tech.lightBlue',
        WebkitBackgroundClip: 'tech.brightBlue',
        textFillColor: 'tech.brightBlue',
        WebkitTextFillColor: 'tech.lightBlue',
        textShadow: '0px 2px 3px rgba(0, 0, 0, 0.2)',
      },
    },
  },
});

export default theme;
