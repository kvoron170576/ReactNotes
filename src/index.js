import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
//import './index.css';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    greenBg: '#1ae71a',
    blueBg: '#17cae7',
  },
  bordR: {
    sm: '3px',
    md: '8px',
    big: '50%',
  },
  spasing: value => `${value * 4}px`,
  shadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
