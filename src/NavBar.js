import React from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Link as Link2,
  Text,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";


import { MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

const NavigationBar = () => {
  const {toggleColorMode} = useColorMode();
  const flexBg = useColorModeValue('teal.500', '#0e1111');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const closeDrawer = () => {onClose()}

  return (
    <>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={flexBg}
      color="white"
      overflowY="show"
    >
      <Flex align="center" mr={10}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Aryan Thakur
        </Heading>
      </Flex>


      <Box
        display={{ sm: "none", md: "flex" }}
        width={{ sm: "", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        justify="space-between"
      >
        <Text fontSize="lg" mr={6}>
          <Link href="/">
            Home
          </Link>
        </Text>
        <Text fontSize="lg" mr={6}>
          <Link href="/about">
            About
          </Link>
        </Text>
        <Text fontSize="lg" mr={6}>
          <Link href="/projects">
            Projects
          </Link>
        </Text>
        <Text fontSize="lg">
          <Link href="/work">
           Work
          </Link>
        </Text>
      </Box>

      <Box marginLeft="auto" display={{ sm: "block", md: "block" }} onClick={() => {}}>
        <IconButton
          variant='outline'
          aria-label="Toggle navigation"
          icon={<MoonIcon />}
          colorScheme='gray'
          onClick={toggleColorMode}
        />
      </Box>


      <Box display={{ sm: "block", md: "none" }} ml={3} onClick={() => {}}>
        <IconButton
          variant='outline'
          aria-label="Toggle navigation"
          icon={<HamburgerIcon />}
          colorScheme='gray'
          onClick={onOpen}
        >
        </IconButton>
     </Box>
    </Flex>
    <Drawer
    isOpen={isOpen}
    placement='right'
    onClose={onClose}
    size={'xs'}
   
   >
    <DrawerOverlay />
    <DrawerContent  bg={flexBg}>
      <DrawerCloseButton />
      <DrawerHeader></DrawerHeader>
      <DrawerBody>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Text color="white" fontSize={'3xl'}><Link onClick={closeDrawer} href='/'>Home</Link></Text>
          <br></br>
          <Text color="white"fontSize={'3xl'}><Link onClick={closeDrawer} href='/about'>About</Link></Text>
          <br></br>
          <Text color="white"fontSize={'3xl'}><Link onClick={closeDrawer} href='/projects'>Projects</Link></Text>
          <br></br>
          <Text color="white"fontSize={'3xl'}><Link onClick={closeDrawer} href='/work'>Work</Link></Text>
        </Flex>
      </DrawerBody>
      <DrawerFooter>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  </>
    
  );
}

export default NavigationBar;
