import { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Header from '../components/Header';
import EditHeader from '../components/EditHeader';
import EditForm from '../components/EditForm';
import EditFooter from '../components/EditFooter';

function Edit() {

    // Accessing our UserContect Global data!
    const {toDoList, setToDoList} = useContext(UserContext);
    console.log(toDoList.length);

    return (
      <UserContext.Provider value={{toDoList, setToDoList}}>
        {/* <EditHeader/> */}
        
        {/* <Container className={classes.container} maxWidth="md">
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
        </Container>      */}
        
        {/* <EditFooter/> */}
      </UserContext.Provider>
      )
}

export default Edit;