import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  VStack,
  Stack,
  Link,
  useColorModeValue,
  useStyleConfig
} from '@chakra-ui/react';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a brief description of Project 1.',
    image: 'https://jdwd40.com/wp-content/uploads/2023/04/sabri-tuzcu-wunVFNvqhfE-unsplash.jpg',
    liveLink: 'https://project1-live-link.com',
    githubLink: 'https://github.com/username/project1',
  },
  {
    title: 'Project 2',
    description: 'This is a brief description of Project 2.',
    image: 'https://jdwd40.com/wp-content/uploads/2023/04/orbtal-media-1td5Iq5IvNc-unsplash.jpg',
    liveLink: 'https://project2-live-link.com',
    githubLink: 'https://github.com/username/project2',
  },
  {
    title: 'Project 3',
    description: 'This is a brief description of Project 3.',
    image: 'https://jdwd40.com/wp-content/uploads/2023/04/markus-petritz-LFe6Prglw4-unsplash.jpg',
    liveLink: 'https://project3-live-link.com',
    githubLink: 'https://github.com/username/project3',
  },
];

const ProjectsPage = () => {
  const bg = useColorModeValue('tech.lightBlue', 'tech.lightBlue');
  const color = useColorModeValue('tech.brightBlue', 'tech.brightBlue');
  const buttonBg = useColorModeValue('tech.brightBlue', 'tech.brightBlue');
  const buttonColor = useColorModeValue('tech.white', 'tech.white');
  const textGradientStyle = useStyleConfig("TextGradient");

  return (
    <Box
      bg={bg}
      color={color}
      minHeight="100vh"
      py="8"
      px={{ base: '4', md: '8' }}
    >
      <Heading as="h1" textAlign="center" mb="8" sx={textGradientStyle}>
        My Projects
      </Heading>
      <Flex justifyContent="center">
        <Stack direction={{ base: 'column', md: 'row' }} spacing="8">
          {projects.map((project, index) => (
            <Box
              key={index}
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={project.image} alt={project.title} />
              <VStack p="6" spacing="4" alignItems="start">
                <Heading as="h2" size="md">
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
                <Flex mt="auto" justifyContent="space-between" width="100%">
                  <Button
                    as={Link}
                    href={project.liveLink}
                    isExternal
                    size="sm"
                    variant="outline"
                  >
                    View Live
                  </Button>
                  <Button
                    as={Link}
                    href={project.githubLink}
                    isExternal
                    size="sm"
                    variant="outline"
                  >
                    GitHub
                  </Button>
                </Flex>
              </VStack>
            </Box>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default ProjectsPage;
