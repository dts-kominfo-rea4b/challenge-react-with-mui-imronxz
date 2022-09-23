import React, { useState } from "react";
import Button from "@mui/material/Button"; // tambahkan ini untuk import butto
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';

import Box from '@mui/material/Box';
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({ fnaddContact }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");


    const onChangeInput = (event, stateName) => {
        stateName(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newContact = {
            name: name,
            phone: phone,
            email: email,
            photo: photo,
        };
        fnaddContact(newContact)
        setName("")
        setPhone("")
        setEmail("")
        setPhoto("")
    }



    function generate_button(placehol, tipe, valueName, stateName) {
        return (
            // <input
            //     placeholder={placehol}
            //     type={tipe}
            //     onChange={event => onChangeInput(event, stateName)}
            //     value={valueName}
            //     style={{ margin: "0.5em" }}
            // />
            <TextField
                size="small"
                type={tipe}
                label={placehol}
                value={valueName}
                onChange={event => onChangeInput(event, stateName)}
                variant='filled'
            ></TextField>
        );
        // return <input placeholder={placehol} type={tipe} />
    }
    return (
        <div>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '90%', margin: "0.5em 0.5em" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={onSubmitHandler}
            >
                {generate_button('Name', 'text', name, setName)}
                {generate_button('Phone', 'number', phone, setPhone)}<br></br>
                {generate_button('Email', 'email', email, setEmail)}<br></br>
                {generate_button('Photo URL', 'text', photo, setPhoto)}<br></br>
                <Button color="success" type="submit" >ADD NEW</Button>
            </Box>

            {/* <form style={{ margin: "0.5em 0em" }} onSubmit={onSubmitHandler}>
            </form> */}
        </div>
    );
};

export default ContactForm;