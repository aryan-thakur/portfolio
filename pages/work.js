import { Flex, Box, Text } from "@chakra-ui/react";

import works from '../public/works.json';

export default function Timeline() {
  return (
    <Flex direction="column" justify="space-between" align="center">
      { works.map((work) => { return (
      <Box width='70%' border='1px solid #313638' mt={10} mb={10} pl={10} pr={10} pb={10} pt={5} textAlign='center'>
        
        <Text fontSize='5xl' fontWeight='bold'>{work.company}</Text>
        <Text fontSize='2xl'>{work.position}</Text>
        <Text fontSize='xl'>{work.range}</Text>
        <br></br>
        <Text fontSize='md' textAlign='justify'>{work.desc}</Text>
      </Box> )
      })}
    </Flex>
  );
}
