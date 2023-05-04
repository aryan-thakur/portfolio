import "../src/Home.css";
import "../public/index.css";
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import NavigationBar from '../src/NavBar';

function App({ Component, pageProps }) {
  return (
  <ChakraProvider>
  <NavigationBar></NavigationBar>
  <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default App;
