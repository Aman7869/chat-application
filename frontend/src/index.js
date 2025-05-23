import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter} from "react-router-dom";
import ChatProvider from './Context/ChatProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({}); // default config
root.render(
    <BrowserRouter>
      <ChakraProvider theme={theme}>
      <ChatProvider>
        <App />
        </ChatProvider>
      </ChakraProvider>
    </BrowserRouter>
);
