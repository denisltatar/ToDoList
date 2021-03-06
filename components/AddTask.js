// Being able to manage and reach our needed data!
import { useState, useContext } from 'react';
import { UserContext } from './UserContext';

// Material UI Stuff 
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
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ListIcon from '@material-ui/icons/List';


const useStyles = makeStyles({
    container: {
        padding: 16
    }
});

const AddTask = () => {
    const classes = useStyles();

    // Accessing our UserContext Global data! In other words, being able to access my array of items!!
    const {toDoList, setToDoList} = useContext(UserContext);

    // Creating our variable for user input
    const [userInput, setUserInput] = useState('');

    // Dealing with input text change    
    const handleChange = (e) => {
        e.preventDefault()

        const title = event.target.value;
        
        setUserInput(e.target.value);
    }

    // Adding a task once "Add" button is clicked
    const handleSubmit = (e) => {
        e.preventDefault()

        // Checking the length of our input
        if (userInput.length >= 1){
            setToDoList([
                // Making each new task appear at the top of the list
                userInput,
                // Throwing the rest of our list below
                ...toDoList
            ])
        } else {
            alert("Title of task isn't long enough. Length must be >= 1.")
        }
        
    }

    return (
        <Container maxWidth="sm" className={classes.root}>
            <Grid container alignItems="center">
                <Grid item md={12}>
                    {/* Our input here will call handleChange() when our input changes */}
                    <TextField id="outlined-basic" onChange={handleChange} label="Add task(s)" placeholder="Task Name" fullWidth multiline variant="outlined" />
                </Grid>

                <Grid item md={12}>
                    {/* Our button here will call handleClick() when our button is clicked! */}
                    <Button className={classes.button} variant="contained" type="submit" color="primary" onClick={handleSubmit}>Add</Button>
                </Grid>
            </Grid>
        </Container>
    )
} 

export default AddTask;
