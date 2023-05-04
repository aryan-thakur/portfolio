import { ChakraProvider, Icon } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Box,
  Flex,
  Text,
  Center,
  Spacer,
  Link,
  Image,
  IconButton
} from "@chakra-ui/react";
import { EmailIcon, LinkIcon } from '@chakra-ui/icons';

export default function AboutPage() {
  return (
    <Box height="70vh" padding="10px" >
    <Center mt={2}><Image display="none" className="secImg" src="Aryan512.png" borderRadius='full' boxSize='250px' ml={4} variant='elevated' alt="Aryan"/></Center>
     <Flex
      direction="row"
      justify="space-around"
      alignItems="center"
      mt={10}
      mb={70}
      >
      <Image className="mainImg" src="Aryan512.png" borderRadius='full' boxSize='250px' ml={4} variant='elevated' alt="Aryan"/>
      <Text ml={2} fontSize='lg'justifySelf="center">
        Hi, I'm Aryan. I'm a 4th year Computer Science student at the University of Toronto. <br></br> I am passionate about developing software projects,
        teaching CS, <br></br> working out and playing various sports. Please contact me for my resume and individual project repository links<br></br>Learn more about me by using the navigation bar.
      </Text>
      </Flex>
      <Box width="100%">
      <Text fontSize="xl" textAlign="center" mb={4}>This website has been developed using Next.js and ChakraUI. </Text>
      <Flex direction="row" justifyContent="center" alignItems="center" mb={4}><LinkIcon mr={5}></LinkIcon><Text textAlign="center" fontSize="xl" ><Link className="flip" textDecoration="underline" href="https://github.com/aryan-thakur/portfolio">Repository Link</Link></Text></Flex>
      <Flex direction="row" justifyContent="center" alignItems="center" mb={10}><LinkIcon mr={5}></LinkIcon><Text textAlign="center" fontSize="xl" ><Link className="flip" textDecoration="underline" href="https://www.linkedin.com/in/aryan-thakur-4baa77149/">LinkedIn Link</Link></Text></Flex>
      <Flex direction="row" justifyContent="center" alignItems="center">
        <EmailIcon  mr={2}/>
       <Text fontSize="l">aryan.thakur@mail.utoronto.ca</Text>
        </Flex>
      </Box>
    </Box>
  );
} 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
