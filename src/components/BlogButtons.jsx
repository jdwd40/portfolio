import { Link } from 'react-router-dom';
import { FaWordpress, FaGithub } from 'react-icons/fa';
import { Stack, Button, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';

const BlogButtons = () => {
    const buttonBg = useColorModeValue('tech.orange', 'tech.orange');
    const buttonColor = useColorModeValue('tech.white', 'tech.white');
    const direction = useBreakpointValue({ base: 'column', sm: 'row' });

    return (
        <Stack direction={direction} spacing={4}>
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
            <Button
                as="a"
                href="https://jdwd40.com"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<FaWordpress />}
                size="md"
                variant="outline"
                buttonBg="blue"
                buttonColor={buttonColor}
            >
                Visit my blog
            </Button>
            <Button
                as="a"
                href="https://github.com/jdwd40"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<FaGithub />}
                size="md"
                variant="outline"
                buttonBg="blue"
                buttonColor={buttonColor}
            >
                View my Github
            </Button>
        </Stack>
    );
}

export default BlogButtons;
