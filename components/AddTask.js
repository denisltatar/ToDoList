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

const AddTask = () => {
    const classes = useStyles();

    // Accessing our UserContext Global data! In other words, being able to access my array of items!!
    const {toDoList, setToDoList} = useContext(UserContext);

    // Creating our variable for user input
    const [userInput, setUserInput] = useState('');

    // Dealing with input text change    
    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value);
        // console.log(userInput);
    }

    // Adding a task once "Add" button is clicked
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
        <Container maxWidth="sm" className={classes.root}>
        
            <Grid container alignItems="center">
                <Grid item md={12}>
                    <TextField id="outlined-basic" onChange={handleChange} label="Add task(s)" placeholder="Task Name" fullWidth multiline variant="outlined" />
                    {/* <TextField value={title} onChange={handleChange} 
                    error={!!error} helperText={error} id="outlined-basic" fullWidth label="Enter A Task To Get Done" multiline variant="outlined" /> */}
                </Grid>

                <Grid item md={12}>
                    {/* Our button here will call handleClick() when our button is clicked! */}
                    <Button variant="contained" type="submit" color="primary" onClick={handleSubmit}>Add</Button>
                    {/* <Button variant="contained" color="primary">Add</Button> */}
                </Grid>
            </Grid>
        
        </Container>
    )
} 

export default AddTask;
