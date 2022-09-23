
// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {


    // Contact berisi foto, nama, telepon, dan email
    return (
        <div>
            <div>
                <List sx={{ width: '100%',  bgcolor: 'background.paper' }} aria-label="contacts">
                    {data.map((value, key) => {
                        return (
                            <ListItem disablePadding key={key}>
                                <ListItemButton>
                                    <ListItemAvatar >
                                        <Avatar alt={value.name} src={value.photo} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={value.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {value.phone}<br></br>
                                                    {value.email}
                                                </Typography>

                                            </React.Fragment>

                                        }
                                    />
                                </ListItemButton>
                            </ListItem>
                        );

                    })}

                </List>
                <ul>


                </ul>
            </div>
        </div>
    );
};

export default Contact;


