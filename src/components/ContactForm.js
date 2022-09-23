import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const ContactForm = ({ fnAddContactForm }) => {
  // Form berisi name, phone, email, dan photo url
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');

  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const onChangeInput = (e, stateName) => {
    stateName(e.currentTarget.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
      email,
      photo,
    };
    fnAddContactForm(newContact);
    setName('');
    setPhone('');
    setEmail('');
    setPhoto('');
  };

  const render_inputField = (placeholder, type, value, stateName) => (
    <TextField
      size="small"
      label={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChangeInput(e, stateName)}
      variant="standard"
    />
  );

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '90%', margin: '0.5em 0.5em' },
        }}
        validate
        autoComplete="off"
        onSubmit={submitFormHandler}
      >
        {render_inputField('Name', 'text', name, setName)}
        {render_inputField('Phone', 'Number', phone, setPhone)}
        <br />
        {render_inputField('Email', 'email', email, setEmail)}
        <br />
        {render_inputField('Photo URL', 'text', photo, setPhoto)}
        <br />
        <Button color="secondary" type="submit" variant="contained">
          Add New Contact
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
