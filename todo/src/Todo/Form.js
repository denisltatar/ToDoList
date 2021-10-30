import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
// import * as actionTypes from '../store/actions';
import * as actionTypes from '../store/actions/actions';

const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    },
    button: {
        marginTop: 16
    }
});

const Form = ({ title, setTitle, addItem, editItem, edit, error, setError }) => {
    const classes = useStyles();

    // This function deals with the input fields changing, specifically seeing if the title of the to
    // do list item, isn't empty. If it is empty, len of 0, then spit out an error
    // NOTE TO SELF: onChange() also works here
    const handleChange = (event) => {
        const title = event.target.value;
        
        setTitle(title);
        if(title.length === 0){
            setError("Please enter title");
        }else{
            setError("");
        }
    }

    // This function deals with our button to add an item. Again, we check if the length of the title is 0,
    // meaning we aren't adding an item, then we spit our an error, otherwise, we add or edit that item
    // NOTE TO SELF: I'm pretty sure onClick function also does the same job here but let's do it with handleClick
    const handleClick = () => {
        if(title.length === 0){
            setError("Please enter title");
            return;
        }
        if (edit) {
            editItem();
        } else {
            addItem();
        }
    }
    return (
        <Container maxWidth="sm" className={classes.root}>
            <Grid container alignItems="center">
                <Grid item md={12}>
                    {/* Our textfield here will call on our function handleChange() when the input changes! */}
                    <TextField value={title} onChange={handleChange} 
                    error={!!error} helperText={error} id="outlined-basic" fullWidth label="Enter A Task To Get Done" multiline variant="outlined" />
                </Grid>
                <Grid item md={12}>
                    {/* Our button here will call handleClick() when our button is clicked! */}
                    <Button className={classes.button} variant="contained" color="primary" onClick={handleClick}>
                        {edit ? "Edit" : "Add"}
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
        title: state.title,
        edit: state.edit,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setError: (error) => dispatch(actionTypes.setError(error)),
        addItem: () => dispatch(actionTypes.addItem()),
        editItem: () => dispatch(actionTypes.editItem()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);