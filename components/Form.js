// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid'
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button'
// import { connect } from 'react-redux'
// import * as actionTypes from '../store/actions';
// import * as actionTypes from '../store/actions/actions';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Form = () => {
    
const onChange = (event) => {
    // Saving the input
    const title = event.target.value;
    
    // Checking the length of the input
    if(title.length === 0){
      
        // setError("Please enter title");
    } else {

        // setError("");
    }
    
    // Set the title to our ask
    // setTitle(title);
}
    return (
        <form>
            <Grid container alignItems="center">
                <Grid item md={12}>
                    <TextField id="outlined-basic" onChange={onChange} label="Add task(s)" placeholder="Task Name" fullWidth multiline variant="outlined" />
                    {/* <TextField value={title} onChange={handleChange} 
                    error={!!error} helperText={error} id="outlined-basic" fullWidth label="Enter A Task To Get Done" multiline variant="outlined" /> */}
                </Grid>

                <Grid item md={12}>
                    {/* Our button here will call handleClick() when our button is clicked! */}
                    <Button variant="contained" type="submit" color="primary">Add</Button>
                    {/* <Button variant="contained" color="primary">Add</Button> */}
                </Grid>
            </Grid>
        </form>
        
    )
} 


// export default connect(mapStateToProps, mapDispatchToProps)(Form);
export default Form;