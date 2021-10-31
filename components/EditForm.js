// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid'
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button'
// import { connect } from 'react-redux'
// import * as actionTypes from '../store/actions';
// import * as actionTypes from '../store/actions/actions';
import { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import ArticleSharpIcon from '@material-ui/icons-material/ArticleSharp';
// import AutoAwesomeSharpIcon from '@material-ui/icons/AutoAwesomeSharp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ListIcon from '@material-ui/icons/List';


const useStyles = makeStyles({
    container: {
        padding: 16
    }
});

const EditForm = () => {
    const classes = useStyles();

    // Creating our variable for user input
    const [userInput, setUserInput] = useState('');

    // Accessing our UserContect Global data!
    const {toDoList, setToDoList} = useContext(UserContext);
    // console.log("Het");
    // console.log(toDoList.length);
    

    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value);
        // console.log(userInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setToDoList([
            // Making each new task appear at the top of the list
            userInput,
            // Throwing the rest of our list below
            ...toDoList
        ])
    }

    return (
        <Container className={classes.container} maxWidth="md">
            {!toDoList.length
                ?
                <Typography variant="h6" color="error">No Available Data to Display :)</Typography>
                :
                (<List>
                    {toDoList.map(item => {
                        return (
                            <ListItem key={item.id} button>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                                <br></br>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>)
            }
        </Container>        
    )
} 

export default EditForm;
