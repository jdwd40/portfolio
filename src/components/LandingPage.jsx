import React from 'react';
import {
  Image,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
  useStyleConfig,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const bg = useColorModeValue('tech.lightBlue', 'tech.lightBlue');
  const color = useColorModeValue('tech.brightBlue', 'tech.brightBlue');
  const buttonBg = useColorModeValue('tech.brightBlue', 'tech.brightBlue');
  const buttonColor = useColorModeValue('tech.white', 'tech.white');
  const textGradientStyle = useStyleConfig('TextGradient');

  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        bg={bg}
        color={color}
        minHeight="100vh"
        px={{ base: '4', md: '8' }}
      >
        <VStack spacing="6" textAlign="center">
          <Heading as="h1" size="3xl" sx={textGradientStyle}>
            John Driscoll's Portfolio
          </Heading>
          <Image
            src="https://jdwd40.com/wp-content/uploads/2023/04/sean-lim-igeKyWQpCY0-unsplash.jpg"
            alt="Landing page"
            maxWidth="100%"
            width={{ base: '90%', md: '70%', lg: '50%', xl: '40%' }}
            mb="4"
            borderRadius="2%"
            borderWidth="2px"
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            shadow="lg"
          />
          <Text fontSize="lg">
            I'm John Driscoll, a full-stack web developer specialized in React,
            Node.js, Express and other modern web technologies.
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
