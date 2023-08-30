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
  useStyleConfig,
  Center
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import BlogButtons from './BlogButtons';

const projects = [
  {
    title: 'NC News',
    description: 'NC News is a web application built with React, Chakra UI, and Vite. The app allows users to browse and interact with articles and comments.<br /> <ul style="padding-left: 2rem"><li>View a list of articles by topic</li><li>View an individual article</li><li>View an individual article\'s comments</li><li>Sort articles by date, comment_count, or votes</li><li>Post a new comment to an existing article (as a default user)</li></ul>',
    image: 'https://jdwd40.com/wp-content/uploads/2023/04/sabri-tuzcu-wunVFNvqhfE-unsplash.jpg',
    liveLink: '/comming-soon.html',
    githubLink: 'https://github.com/jdwd40/fe-vite-nc-news',
  },
  {
    title: 'Cypto Tracker',
    description: 'This application provides an easy way to track the current prices of popular cryptocurrencies and stay updated with the latest news articles related to crypto. Features include:<br /> <ul style="padding-left: 2rem"><li>View a list of the top 100 cryptocurrencies by market cap</li><li>View an individual cryptocurrency</li><li>View the latest news articles related to cryptocurrency</li><li>View an individual news article</li>',
    image: 'https://jdwd40.com/wp-content/uploads/2023/05/screenshot.png',
    liveLink: 'https://jwd1.xyz',
    githubLink: 'https://github.com/jdwd40/cryptoapp',
  },
  {
    title: 'Untitled Notes',
    description: 'Untitled Notes is a online markdown editor. This application was built during the last three weeks of the Northcoders bootcamp. It was built in Nextjs, with Firebase as a backend and TypeScript as the main language. Features include:<br /> <ul style="padding-left: 2rem"><li>Fully operational realtime markdown editor</li><li>Live collaboration sessions with friends</li><li>Responsive design</li><li>Save files in the cloud or locally</li></ul>',
    image: 'https://jdwd40.com/wp-content/uploads/2023/05/splashscreen.png',
    liveLink: 'https://untitled-notes.vercel.app/',
    githubLink: 'https://github.com/jdwd40/untitled-notes',
  },
];

const ProjectsPage = () => {
  const bg = useColorModeValue('linear(to-br, tech.lightBlue, tech.lightGreen)', 'linear(to-br, tech.lightBlue, tech.lightGreen)');
  const textGradientStyle = useStyleConfig("TextGradient");
  const cardBg = useColorModeValue('tech.lightGreen', 'tech.LightGreen');
  const cardColor = useColorModeValue('tech.darkGreen', 'tech.darkGreen');
  const buttonColor = useColorModeValue('tech.orange', 'tech.orange');

  return (
    <Box bgGradient={bg} minHeight="100vh" py={{ base: '8', md: '16' }} px={{ base: '4', md: '8' }}>
      <Heading as="h1" fontSize="6xl" textAlign="center" mb="8" sx={textGradientStyle} color="white">
        Projects
      </Heading>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="top"
        flexWrap="wrap"
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            width="100%"
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            borderColor={cardColor}
            overflow="hidden"
            padding="4"
            bg={cardBg}
            color={cardColor}
            mb="4"
            mr={{ base: '0', sm: '4' }}
          >
            <Image src={project.image}
              alt={project.title}
              borderRadius="2%"
              width="100%"
              height="200px"
              objectFit="cover" />
            <VStack p="6" spacing="4" alignItems="start">
              <Heading as="h2" size="md" color={cardColor} sx={textGradientStyle}>
                {project.title}
              </Heading>
              <Text
                dangerouslySetInnerHTML={{ __html: project.description }}
                className="indent-ul"
              />
              <Flex mt="auto" justifyContent="space-between" width="100%">
                <Link href={project.liveLink} isExternal>
                  <Button size="sm" bg={buttonColor}
                    color="white">
                    View Live
                  </Button>
                </Link>
                <Link href={project.githubLink} isExternal>
                  <Button size="sm" variant="outline" buttonBg="blue" buttonColor="white" leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </Link>
              </Flex>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ProjectsPage;