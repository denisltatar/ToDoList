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

    return (
      <UserContext.Provider value={{toDoList, setToDoList}}>
      </UserContext.Provider>
      )
}

export default Edit;