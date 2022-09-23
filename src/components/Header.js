// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Typography, Divider } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant="h4">Call a Friend</Typography>
      <Typography variant="subtitle">Your friendly contact app</Typography>
      <Divider variant="inset" />
      <br />
    </>
  );
};

export default Header;
