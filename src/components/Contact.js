import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemButton,
} from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contacts">
        {data.map((contact, key) => {
          //   console.log(contact);
          return (
            <ListItem key={key}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt={contact.name} src={contact.photo} />
                </ListItemAvatar>
                <ListItemText
                  primary={contact.name}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {contact.phone}
                        <br />
                        {contact.email}
                      </Typography>
                    </>
                  }
                ></ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Contact;
