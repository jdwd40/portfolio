import React from 'react';
import { Box, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const bg = useColorModeValue('yellow', 'yellow');
  const color = useColorModeValue('darkgreen', 'darkgreen');

  return (
    <Box
      as="nav"
      bg={bg}
      color="black"
      px={4}
      py={2}
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex alignItems="center" justifyContent="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="sm" mx={4}>
          John Driscoll Portfolio
        </Link>
        <Link as={RouterLink} to="/projects" fontSize="sm" mx={4} fontWeight="bold">
          Projects
        </Link>
        <Link as={RouterLink} to="/skillslist" fontSize="sm" mx={4} fontWeight="bold">
          Skills List
        </Link>
        <Link as={RouterLink} to="/landingpage" fontSize="sm" mx={4} fontWeight="bold">
          About Me
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
