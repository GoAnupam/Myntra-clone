import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// Theme definitions
const lightTheme = {
  name: 'light',
  bg: '#ffffff',
  text: '#282c3f',
  border: '#d4d5d9',
  primary: '#ff3f6c',
  secondary: '#535766',
  cardBg: '#ffffff',
  headerBg: 'rgba(255, 255, 255, 0.95)',
  footerBg: '#FAFBFC',
  shadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const darkTheme = {
  name: 'dark',
  bg: '#121212',
  text: '#e0e0e0',
  border: '#333333',
  primary: '#ff3f6c',
  secondary: '#a5a5a5',
  cardBg: '#1e1e1e',
  headerBg: 'rgba(30, 30, 30, 0.95)',
  footerBg: '#1a1a1a',
  shadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
};

// Global styles that respond to theme
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  header {
    background-color: ${props => props.theme.headerBg};
    border-bottom: 1px solid ${props => props.theme.border};
  }

  .footer_container {
    background-color: ${props => props.theme.footerBg};
  }

  .theme-toggle-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    background: ${props => props.theme.primary};
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    box-shadow: ${props => props.theme.shadow};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function App() {
  const status = useSelector((state) => state.products.status);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {status === 'loading' ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
          <button 
            className='theme-toggle-btn' 
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;