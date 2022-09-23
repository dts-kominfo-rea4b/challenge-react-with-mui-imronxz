import './App.css';
import { Header, Contact, ContactForm } from './components';
import React, { useState } from 'react';
//MUI
import { Container, Box, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state

  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F5EFE6',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: '0.5em',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <Header />

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item>
                <ContactForm addContact={addContact} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                {contacts.map((contact) => (
                  <Contact key={contact.phone} data={contact} />
                ))}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default App;
