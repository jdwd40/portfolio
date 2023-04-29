import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    tech: {
      lightBlue: '#E9F1FA',
      brightBlue: '#00ABE4',
      white: '#FFFFFF',
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
