import { useState, useEffect } from 'react';
import { Fab, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 9999,
        display: isVisible ? 'block' : 'none'
      }}
    >
      <Fab
        color="primary"
        size="large"
        onClick={scrollToTop}
        sx={{
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <KeyboardArrowUpIcon fontSize="large" />
      </Fab>
    </Box>
  );
};

export default ScrollToTop; 