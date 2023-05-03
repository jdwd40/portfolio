import React from 'react';
import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const bg = useColorModeValue('yellow', 'yellow');
  const color = useColorModeValue('darkgreen', 'darkgreen');

  return (
    <Box as="nav" bg={bg} color='black' px={4} py={2} position="sticky" top={0} zIndex={10}>
      <Flex alignItems="center" justifyContent="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="lg">
          John Driscoll Portfolio
        </Link>
        {/* <Flex> */}
          <Text as={RouterLink} to="/projects" fontSize="lg" mx="4" fontWeight="bold"> 
            Projects
          </Text>
          <Text as={RouterLink} to="/skillslist" fontSize="lg" fontWeight="bold">
            Skills List
          </Text>
        {/* </Flex> */}
      </Flex>
    </Box>
  );
};

export default Navbar;
