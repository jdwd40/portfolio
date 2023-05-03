import React from 'react';
import {
  Image,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Box,
  useColorModeValue,
  useStyleConfig,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const bg = useColorModeValue('linear(to-br, tech.lightBlue, tech.lightGreen)', 'linear(to-br, tech.lightBlue, tech.lightGreen)');
  const color = useColorModeValue('tech.white', 'tech.white');
  const buttonBg = useColorModeValue('tech.orange', 'tech.orange');
  const buttonColor = useColorModeValue('tech.white', 'tech.white');
  const textGradientStyle = useStyleConfig('TextGradient');

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        bgGradient={bg}
        color={color}
        minHeight="100vh"
        px={{ base: '4', md: '8' }}
        flexWrap="wrap"
      >
        <VStack
          spacing="6"
          textAlign="center"
          width={{ base: '100%', lg: '50%' }}
          mb={{ base: '4', lg: '0' }}
        >
          <Heading as="h1" size="3xl" sx={textGradientStyle} color='white'>
            John Driscoll's Portfolio
          </Heading>
          <Image
            src="https://jdwd40.com/wp-content/uploads/2023/04/sean-lim-igeKyWQpCY0-unsplash.jpg"
            alt="Landing page"
            maxWidth="100%"
            width={{ base: '90%', md: '70%', lg: '100%', xl: '80%' }}
            mb="4"
            borderRadius="2%"
            borderWidth="2px"
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            shadow="lg"
          />
          
          <Text fontSize="xl" color='white'>
          Hello! I'm John Driscoll, a junior web developer seeking my initial role in the tech industry. I possess a solid foundation in React, Node.js, Express, and Python, and I am eager to apply these skills to web development projects. My prior experience as a bar supervisor and warehouse team leader has equipped me with excellent interpersonal and leadership capabilities. If you are in search of a dedicated and passionate developer to contribute to your team, I am the ideal candidate.
          </Text>
          
          <Button
            as={Link}
            to="/projects"
            bg={buttonBg}
            color={buttonColor}
            size="lg"
            _hover={{
              bg: 'blue.200',
              color: 'white',
            }}
          >
            View My Projects
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default LandingPage;

