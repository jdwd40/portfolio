import React from 'react';
import {
  Image,
  Flex,
  Heading,
  Text,
  VStack,
  Box,
  useColorModeValue,
  useStyleConfig
} from '@chakra-ui/react';
import BlogButtons from './BlogButtons';

const LandingPage = () => {
  const bg = useColorModeValue(
    'linear(to-br, tech.lightBlue, tech.lightGreen)',
    'linear(to-br, tech.lightBlue, tech.lightGreen)'
  );
  const textGradientStyle = useStyleConfig('TextGradient');
  const darkGreen = useColorModeValue('tech.darkGreen', 'tech.darkGreen');

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        bgGradient={bg}
        minHeight="100vh"
        px={{ base: '4', md: '8' }}
      >
        <VStack
          spacing="6"
          textAlign="center"
          width={{ base: '100%', lg: '80%' }}
          mb={{ base: '4', lg: '0' }}
          mx="auto"
        >
          <Heading as="h1" fontSize="6xl" sx={textGradientStyle} color="white">
            About Me
          </Heading>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            spacing={{ base: '6', md: '12' }}
            width="100%"
          >
            <Box>
              <Image
                src="profile_pic.jpg"
                alt="Profile picture"
                width={{ base: '150px', md: '200px', lg: '200px' }}
                mb={{ base: '4', md: '0' }}
                borderRadius="full"
                borderWidth="2px"
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                shadow="lg"
              />
            </Box>
            <Box
              maxWidth={{ base: '100%', md: '60%' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Text fontSize="md" color={darkGreen} fontWeight={500} fontStyle='italic'>
                Hello, I'm John Driscoll. My career began in a warehouse before transitioning into tech support, highlighting my adaptability. A period of redundancy led me to a role as a delivery driver, which presented its own set of challenges and learning opportunities. During a tough time when both I and my mother fell ill, I took on caregiving responsibilities while continuing to advance my web development skills. Now, I'm at a pivotal moment in my career, actively looking for opportunities to leverage my diverse skill set in web development.
              </Text>
            </Box>
          </Flex>
          <BlogButtons />
        </VStack>
      </Flex>
    </>
  );
};

export default LandingPage;
