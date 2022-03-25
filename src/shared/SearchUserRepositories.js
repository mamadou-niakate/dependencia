import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import { useAppState } from '../AppWrapper/AppWrapper';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    inputBox: {
        width: '70%',
    },
    btnBox: {
        width: '30%',
    },
    input: {
        width: '90%',
        margin: '10px 0',
    },
    button: {
        width: '90%',
    },
}

export const Search = () => {
    const { dispatch } = useAppState();
    const [username, setUsername] = useState('');
    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const retrieveRepos = async () => {
        try {
            const repositories = await axios.get(`https://api.github.com/users/${username}/repos`);
            dispatch({ type: 'SET_LOADED_PROJECTS', payload: repositories.data });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={ styles.root }>
            <div style={styles.inputBox}>
                <TextField 
                    style={styles.input} 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined"
                    value={username}
                    onChange={handleChange} 
                />
            </div>
            <div style={styles.btnBox}>
                <Button 
                    style={styles.button} 
                    variant='outlined' 
                    onClick={retrieveRepos}
                    fullWidth
                > 
                    Go 
                </Button>
            </div>
        </div>
    )
}
