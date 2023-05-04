import React from "react";


import {
  Box,
  Flex,
  Center,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";


const Home = () => {
    const cols = useColorModeValue('black', 'white');

    return (
        <Flex
        className='mainDrop'
        position='fixed'
        width='100%'
        height= '100vh'
        direction="column"
        align="center"
        justify="center"
        wrap="wrap"
        color={cols}>
        <Box className="centerBox">
        <Stack spacing={4} textAlign="center">
            <Text fontSize='5xl' as='b' className="flash">Hello, I'm Aryan.</Text>
        </Stack>
        <Stack spacing={4} mt={4} textAlign="center" className="flashSupport">
            <Text fontSize='xl' >Welcome to this website.</Text>
        </Stack>
        </Box>
        </Flex>

    )
};

export default Home;