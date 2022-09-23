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
  if (Array.isArray(data)) {
    return (
      <>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contacts">
          {data.map((value, key) => {
            return (
              <ListItem key={key}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar alt={value.name} src={value.photo} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.name}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {value.phone}
                          <br></br>
                          {value.email}
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
  } else {
    return (
      <>
        Monica 087577588432 devi@email.com
        <img src="http://placekitten.com/600" alt="Logo" />
      </>
    );
  }
};

export default Contact;
