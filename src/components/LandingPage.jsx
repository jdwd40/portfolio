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
  const bg = useColorModeValue(
    'linear(to-br, tech.lightBlue, tech.lightGreen)',
    'linear(to-br, tech.lightBlue, tech.lightGreen)'
  );
  const color = useColorModeValue('tech.white', 'tech.white');
  const buttonBg = useColorModeValue('tech.orange', 'tech.orange');
  const buttonColor = useColorModeValue('tech.white', 'tech.white');
  const textGradientStyle = useStyleConfig('TextGradient');
  const darkGreen = useColorModeValue('tech.darkGreen', 'tech.darkGreen');

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
          <Heading as="h1" fontSize="6xl" sx={textGradientStyle} color="white">
            About Me
          </Heading>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            justifyContent={{ base: 'center', md: 'space-between' }}
            spacing={{ base: '6', md: '10' }}
            width="100%"
          >
            <Box>
              <Image
                src="https://jdwd40.com/wp-content/uploads/2023/05/jd2023.jpg"
                alt="Profile picture"
                width={{ base: '250px', md: '250px', lg: '250px' }}
                mb={{ base: '4', md: '0' }}
                borderRadius="full"
                borderWidth="2px"
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                shadow="lg"
              />
            </Box>
            <Text
              fontSize="md"
              color={darkGreen}
              fontWeight={800}
              maxWidth={{ base: '100%', md: '45%', lg: '55%' }}
            >
              Hello! I'm John Driscoll, a junior web developer eager to
              kickstart my career in the tech industry. With a strong foundation
              in React, Node.js, Express, and Python, I am well-prepared to
              contribute to diverse web development projects. My ability to
              learn quickly and adapt to new technologies, alongside my
              dedication to writing clean, efficient code, makes me an excellent
              candidate for any team looking for a passionate and committed
              developer to join their ranks.
            </Text>
          </Flex>
          <Button
            as={Link}
            to="/projects"
            bg={buttonBg}
            color={buttonColor}
            size="md"
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
