// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid'
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button'
// import { connect } from 'react-redux'
// import * as actionTypes from '../store/actions';
// import * as actionTypes from '../store/actions/actions';

import React from 'react';


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
// Uncompleted tasks icon
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
// Completed tasks icon
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import ArticleSharpIcon from '@material-ui/icons-material/ArticleSharp';
// import AutoAwesomeSharpIcon from '@material-ui/icons/AutoAwesomeSharp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ListIcon from '@material-ui/icons/List';
import * as actionTypes from '../store/actions/actionTypes';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'


const useStyles = makeStyles({
    container: {
        padding: 16
    }
});

const Form = ({ todoList, setTitle, setItem, setEdit, deleteItem }) => {
    const classes = useStyles();

    // Used to check if task is complete or not
    const [clicked, setClicked] = useState(false);

    

    // Creating our variable for user input
    const [userInput, setUserInput] = useState('');

    // Creating our variable for user input
    const [editInput, setEditInput] = useState('');

    // Index value carrier
    const [index, setIndex] = useState(0);
    const [seen, setSeen] = useState([]);

    // Accessing our UserContect Global data!
    const {toDoList, setToDoList} = useContext(UserContext);

    const toggleComplete = (i) => {
        setToDoList(toDoList.map((task, k) => k === i  ? {
            ...task,
            complete: !todoList.complete
        }
        : task ));
    }

    


    // When the edit button is clicked, we can set the new title, 
    // set the edit flag to true, and store entire selected item in the item state
    const handleEdit = (item) => {
        item.preventDefault()

        // Checking the length of our edit input is valid
        if (item.length >= 1){
            setUserInput(item);
        } else {
            alert("Title of task isn't long enough. Length must be >= 1.")
        } 


        // Prompt the user to enter text?
        // // Save this text
        // handleChange();

        // // Editing our specific item in our array with new text! 
        // toDoList.find( ({ item }) => item === userInput);
        
        // // Spitting our our array back
        // setToDoList(todoList);
    }

    // When the deleted button is clicked, we simply set the selected item in the item state
    // and call the delete time function we defined within our reducer
    const handleDelete = (item) => {
        // Creating a new array of items with the current item param filtered out
        const newArrIterms = toDoList.filter(currItem => toDoList.indexOf(currItem) != toDoList.indexOf(item));
        setToDoList(newArrIterms);
    }

    // Dealing with Edit input text change    
    const handleChange = (e) => {
        e.preventDefault()
        const editTitle = e.target.value;
        setUserInput(editTitle);
    }

    // Adding a task once "Add" button is clicked
    const handleSubmit = (e) => {
        e.preventDefault()

        // Checking the length of our input
        if (userInput.length >= 1){
            setToDoList([
                // Throwing the rest of our list below
                ...toDoList,
                // Making each new task appear at the top of the list
                userInput
            ])
        } else {
            alert("Title of task isn't long enough. Length must be >= 1.")
        } 
    }

    // TODO: Need to ensure that when the done icon is clicked, not all tasks click to be finished!
    const handleIconClick = (item, idx) => {
        if (index === idx){
            // Changing our value of clicked so the icon can be triggered to switch
            setClicked(!clicked);
        }
    }

    return (
        <Container className={classes.container} maxWidth="md">
            <Grid container alignItems="center">
                {/* <Grid item md={12}>
                    <TextField id="outlined-basic" onChange={handleChange} label="Use This To Edit Task" placeholder="Use This To Edit Task" fullWidth multiline variant="outlined" />
                </Grid> */}
            </Grid>
            {!toDoList.length
                ?
                <Typography variant="h6" color="error"></Typography>
                :
                (<List>
                    {toDoList.map((item, idx) => {
                        
                        return (
                            <ListItem key={item.id} button>
                                {/* Instead have an array that carries each item, having data like name and "clicked" */}
                                <ListItemIcon onClick={() => {
                                    // console.log(seen);
                                    setSeen(prevItems => [...prevItems, idx]);}}>

                                    {seen.includes(idx) ? < CheckCircleIcon color="primary" />
                                                : <CheckCircleOutlineIcon color="primary" /> }
                                </ListItemIcon>

                                <ListItemText primary={item} />
                                
                                <ListItemSecondaryAction>
                                    {/* We have both buttons available for the user to use to edit or delete */}
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                <br></br>
                <Grid item alignItems="center" justify="center" md={12}>
                    <Button variant="contained" type="submit" color="primary" onClick={() => setToDoList([])}>Reset</Button>
                </Grid>
                </List>)
            }
        </Container>        
    )
} 

export default Form;