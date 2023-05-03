import React from 'react';
import {
    Box,
    Flex,
    Text,
    Heading,
    VStack,
    useColorModeValue,
    useStyleConfig,
} from '@chakra-ui/react';
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
} from 'react-icons/fa';

const SkillsSection = () => {
    const cardBg = useColorModeValue('tech.lightGreen', 'tech.LightGreen');
    const cardColor = useColorModeValue('tech.darkGreen', 'tech.darkGreen');
    const textGradientStyle = useStyleConfig('TextGradient');
    const bg = useColorModeValue('linear(to-br, tech.lightBlue, tech.lightGreen)', 'linear(to-br, tech.lightBlue, tech.lightGreen)');
   

    const skillsList = [
        {
            title: 'Frontend Development',
            skills: [
                { icon: FaReact, text: 'React.js', desc: 'Crafting interactive, responsive web applications' },
                { icon: FaHtml5, text: 'HTML5', desc: 'Building modern, clean, and accessible websites' },
                { icon: FaCss3, text: 'CSS3', desc: 'Building modern, clean, and accessible websites' },
            ],
        },
        {
            title: 'Backend Development',
            skills: [
                { icon: FaNodeJs, text: 'Node.js & Express.js', desc: 'Developing scalable and efficient server-side applications' },
                { icon: FaServer, text: 'RESTful APIs', desc: 'Creating and integrating powerful, user-friendly web services' },
                { icon: FaPython, text: 'Python', desc: 'Automating tasks and building powerful web applications' },
                { icon: FaDatabase, text: 'PostgreSQL & SQL', desc: 'Designing and managing robust relational databases' },
                { icon: FaAws, text: 'Netlify, Vercel, & AWS', desc: 'Deploying and maintaining high-performance websites' },
            ],
        },
        {
            title: 'Other Skills',
            skills: [
                { icon: FaLinux, text: 'Linux & VPS Management', desc: 'Configuring and maintaining secure, reliable servers' },
                { icon: FaNetworkWired, text: 'Networking Fundamentals', desc: 'Understanding core networking concepts and protocols' },
                { icon: FaWindows, text: 'Windows', desc: 'Proficient in managing and troubleshooting in Microsoft Windows Server environments' },
                ,
            ],
        },
    ];

    return (
        <Box bgGradient={bg} minHeight="100vh" py={{ base: '8', md: '16' }} px={{ base: '4', md: '8' }}>

            <Heading as="h2" fontSize="6xl" mb="4" color='white' sx={textGradientStyle} textAlign='center'>
                Skills List
            </Heading>
            <Flex
                direction={{ base: 'column', sm: 'row' }}
                justifyContent="center"
                alignItems="top"
                flexWrap="wrap"
            >
                {skillsList.map((skillGroup, idx) => (
                    <Box
                        key={idx}
                        maxW="md"
                        width="100%"
                        minHeight={{ base: 'auto', sm: '420px' }}
                        borderWidth="1px"
                        borderRadius="lg"
                        borderColor={cardColor}
                        overflow="hidden"
                        padding="4"
                        bg={cardBg}
                        color={cardColor}
                        mb="4" // Change the margin bottom value from "4" to "2"
                        mr={{ base: '0', sm: '4' }}
                    >
                        <Heading as="h3" size="lg" mb="4" textAlign="center" color={cardColor} sx={textGradientStyle}>
                            {skillGroup.title}
                        </Heading>
                        <VStack spacing="4" alignItems="center">
                            {skillGroup.skills.map((skill, index) => (
                                <Flex key={index} direction="column" alignItems="center" mb="4"
                                textAlign='center'
                                >
                                    <skill.icon size="2em" />
                                    <Text color='white' mt="2">{skill.text}</Text>
                                    <Text fontSize="sm">{skill.desc}</Text>
                                </Flex>
                            ))}
                        </VStack>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default SkillsSection;
