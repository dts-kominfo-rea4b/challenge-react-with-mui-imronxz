// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemButton,
  Divider,
} from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contacts">
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={data.name} src={data.photo} />
          </ListItemAvatar>
          <ListItemText
            primary={data.name}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {data.phone}
                  <br></br>
                  {data.email}
                </Typography>
              </>
            }
          />
        </ListItemButton>
      </ListItem>
      <Divider />
    </List>
  );
};

export default Contact;
