import { useState } from 'react';
import './App.css';
import { ContactForm, Contact, Header } from './components';

// @MUIs
import { Container, Box, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(contactsJSON);

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
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Item>
                <ContactForm fnaddContact={addContact} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <Contact data={contacts} />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default App;
