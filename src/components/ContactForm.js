import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({ addContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    email: '',
    photo: '',
  });

  // handler untuk get value inputan
  const inputHandler = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    });
  };
  // Passing newContact state to App.js(parent)
  const addContactHandler = () => {
    addContact(newContact);
  };
  const generateInputField = (name,tipe, id, placeholder, value, inputHandler) => {
    return (
      <TextField
        fullWidth
        name={name}
        type={tipe}
        id={id}
        label={placeholder}
        variant="filled"
        value={value}
        onChange={inputHandler}
      />
    );
  };
  return (
    <div>
      <Box
        component="form"
        sx={{'& .MuiTextField-root': { m: 1, width: '90%', margin: '0.5em 0.5em' }}}
        noValidate
        autoComplete="off"
        onSubmit={addContactHandler}
      >
        {generateInputField('name','text', 'name-field', 'Nama', newContact.name, inputHandler)}
        {generateInputField('phone','text', 'phone-field', 'Nomor HP', newContact.phone, inputHandler)}
        {generateInputField('email','text', 'email-field', 'Alamat Email', newContact.email, inputHandler)}
        {generateInputField('photo','text', 'photo-field', 'Foto Profile', newContact.photo, inputHandler)}
        <Button color="success" type="submit">
          ADD NEW
        </Button>
      </Box>
    </div>
  );
};

export default ContactForm;
