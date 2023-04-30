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
    title: 'NC News',
    description: 'NC News is a web application built with React, Chakra UI, and Vite. The app allows users to browse and interact with articles and comments.<br /> <ul><li>View a list of articles</li><li>View a list of articles by topic</li><li>View an individual article</li><li>View an individual article\'s comments</li><li>Sort articles by date, comment_count, or votes</li><li>Post a new comment to an existing article (as a default user)</li></ul>',
    image: 'https://jdwd40.com/wp-content/uploads/2023/04/sabri-tuzcu-wunVFNvqhfE-unsplash.jpg',
    liveLink: 'https://project1-live-link.com',
    githubLink: 'https://github.com/jdwd40/fe-vite-nc-news',
  },
  {
    title: 'Cypto Tracker',
    description: 'This application provides an easy way to track the current prices of popular cryptocurrencies and stay updated with the latest news articles related to crypto. Features include:<br /> <ul><li>View a list of the top 100 cryptocurrencies by market cap</li><li>View an individual cryptocurrency</li><li>View the latest news articles related to cryptocurrency</li><li>View an individual news article</li>',
    image: 'https://jdwd40.com/wp-content/uploads/2023/04/orbtal-media-1td5Iq5IvNc-unsplash.jpg',
    liveLink: 'https://jdc1.xyz',
    githubLink: 'https://github.com/jdwd40/cryptoapp',
  },
  {
    title: 'Untitled Notes',
    description: 'This application provides an easy way to track the current prices of popular cryptocurrencies and stay updated with the latest news articles related to crypto. Features include:<br /> <ul><li>View a list of the top 100 cryptocurrencies by market cap</li><li>View an individual cryptocurrency</li><li>View the latest news articles related to cryptocurrency</li><li>View an individual news article</li>',
    image: 'https://jdwd40.com/wp-content/uploads/2023/04/markus-petritz-LFe6Prglw4-unsplash.jpg',
    liveLink: 'https://project3-live-link.com',
    githubLink: 'https://github.com/jdwd40/untitled-notes',
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
                 <Text
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <Flex mt="auto" justifyContent="space-between" width="100%">
                  <Link href={project.liveLink} isExternal>
                    <Button size="sm" variant="outline" colorScheme="blue" buttonBg="blue" buttonColor={buttonColor}>
                      View Live
                    </Button>
                  </Link>
                  <Link href={project.githubLink} isExternal>
                    <Button size="sm" colorScheme="blue" variant="outline" buttonBg="blue" buttonColor={buttonColor}>
                      GitHub
                    </Button>
                  </Link>
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
