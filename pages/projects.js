import React from 'react';
import { useState } from 'react';

import {
    Flex,
    HStack,
    Tag, TagLabel, TagRightIcon,
    Card, CardHeader, CardBody, CardFooter,
    Heading,
    Alert, AlertIcon,
    Text,
    Link,
    Stack, CloseButton, Box, Center
  } from "@chakra-ui/react";
  
import projects from '../public/projects.json'
import { ViewOffIcon } from '@chakra-ui/icons';


export default function ProjectPage() {

  const [showAlert, setShowAlert] = useState(true);
  const [cards, setCards] = useState([]);

  const handleClose = () => {
    setShowAlert(false);
  };


 // const navigateToPage = (el) => {
 //       console.log(el);
 //       window.location.href = "#/" + el;
 // }

  const handleClick = (i) => {
    if(!cards.includes(i)) {
    setCards([...cards, i]); }
    else {
      const newCards= cards.filter((item) => item !== i);
      setCards(newCards);
    } 
  }
  
  return (
    <div width="100%">
    <Flex direction='row' wrap='wrap' alignItems='center' justifyContent='space-around' spacing='4' width="100%">
    { projects.map((project, index) => 
    { return (<Card className="flip" position='relative' mt={4} mb={2} width={'sm'} height={project.height} key={index} size={'md'} variant='elevated' onClick={() => {handleClick(index)}}>
      <CardHeader>
      <Heading size='md'>{project.title}</Heading>
      </CardHeader>
        {!cards.includes(index) ? (
          <CardBody position='absolute' bottom='0'>
          <HStack spacing={3} mb={2}>
          <Tag size={'md'} key={'md'} variant='subtle' colorScheme='blue'>
          <TagLabel>{project.tags[0]}</TagLabel>
          </Tag>
          <Tag size={'md'} key={'md'} variant='subtle' colorScheme='green'>
          <TagLabel>{project.tags[1]}</TagLabel>
          </Tag>
         </HStack>
         <Text>{project.desc}</Text>
         </CardBody>
        ) : (
        <CardBody position='absolute' bottom='0'>
        
        {project.link ? (<Flex ml={-5} height={project.height/2} width={'sm'} mb={5} direction="column" justifyContent="center" alignItems="center" textAlign="justify"><iframe width="90%" height="100%" src={project.link} frameborder="0" border="1px solid black" allowfullscreen></iframe></Flex>): <ViewOffIcon ml={4} mb={4}></ViewOffIcon>}
        
        <Flex direction="horizontal" width="100%" flexWrap="wrap" mb={2}>
         { project.tech.map((tec) => {
         return (
          <Tag ml={2} mr={2}  mt={3} size={'md'} key={'md'} variant='subtle' colorScheme='red'>
          <TagLabel>{tec}</TagLabel>
          </Tag>)
          })
          }
        </Flex>
       
        </CardBody>
        )}
        </Card>)
      }
    )
    }
    </Flex>
     <Stack
        direction="row"
        spacing={3}
        align="center"
        position="fixed"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        width="80%"
        marginBottom="10px"
      >
        {showAlert && (
          <Alert status="info">
          <AlertIcon />
          Please scroll to the bottom. Click any card to see more.
          <CloseButton size="sm" position="absolute" align="center" right="5" onClick={handleClose}/>
          </Alert>
        )}
      </Stack>
     </div>
  );
} 