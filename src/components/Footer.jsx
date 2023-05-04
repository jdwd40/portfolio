import React from 'react';
import { Box, Flex, Text, SimpleGrid, Heading, useColorModeValue } from '@chakra-ui/react';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaAws,
  FaServer,
  FaNetworkWired,
  FaWindows,
  FaLinux,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
    const color = useColorModeValue('tech.lightBlue', 'tech.lightBlue');
    const bg = useColorModeValue('tech.lightGreen', 'tech.lightGreen');

  return (
    <Box as="footer" bg={bg} color={color} py="6" px={{ base: '4', md: '8' }}>
        <Heading color='white' as="h1" size="m" mb="4">
            My Tech Stack
        </Heading>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing="1">
        {/* Frontend Development */}
        <Flex alignItems="center">
          <FaReact size="1em" />
          <Text ml="2">React.js</Text>
        </Flex>
        <Flex alignItems="center">
          <FaHtml5 size="1em" />
          <Text ml="2">HTML5</Text>
        </Flex>
        <Flex alignItems="center">
          <FaCss3 size="1em" />
          <Text ml="2">CSS3</Text>
        </Flex>
        {/* Backend Development */}
        <Flex alignItems="center">
          <FaNodeJs size="1em" />
          <Text ml="2">Node.js</Text>
        </Flex>
        <Flex alignItems="center">
          <FaPython size="1em" />
          <Text ml="2">Python</Text>
        </Flex>
        {/* Database Management */}
        <Flex alignItems="center">
          <FaDatabase size="1em" />
          <Text ml="2">PostgreSQL & SQL</Text>
        </Flex>
        {/* Web Deployment & Hosting */}
        <Flex alignItems="center">
          <FaAws size="1em" />
          <Text ml="2">Netlify, Vercel, & AWS</Text>
        </Flex>
        {/* API Development */}
        <Flex alignItems="center">
          <FaServer size="1em" />
          <Text ml="2">RESTful APIs</Text>
        </Flex>
        {/* Server Configuration */}
        <Flex alignItems="center">
          <FaLinux size="1em" />
          <Text ml="2">Linux & VPS Management</Text>
        </Flex>
        {/* Networking Fundamentals */}
        <Flex alignItems="center">
          <FaNetworkWired size="1em" />
          <Text ml="2">Networking Fundamentals</Text>
        </Flex>
        {/* Operating Systems */}
        <Flex alignItems="center">
          <FaWindows size="1em" />
          <Text ml="2">Windows</Text>
        </Flex>
        <Flex alignItems="center">
          <FaGithub size="1em" />
          <Text ml="2">Git and Github</Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
