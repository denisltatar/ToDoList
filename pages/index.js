// *********** REFERENCE FOR MYSELF *********** \\
// This file runs our entire application, hence, you'll see me calling in new components
// by importing them and then showing them off within this app
// NOTE: In order to pass data around between my entire project, I used useContext,
//       which helps me a bunch, you can see I defined my array of items first here
//       and then used a provider to sent this to my other components

// All my imports
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import Header from '../components/Header'
// Making our button look cool hehe
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddTask from '../components/AddTask';
import Footer from '../components/Footer';
import { UserContext } from '../components/UserContext'
import * as actionTypes from '../store/actions/actionTypes';


import { Provider } from 'react-redux';
import reducer from '../store/reducers/index';
import { createStore } from 'redux';
const store = createStore(reducer);

export default function Home() {
  // Creating our array of items which will be used through our global provider, UserContext
  // const [toDoList, setToDoList] = useState([{value: '', clicked: 'false'}]); 
  const [toDoList, setToDoList] = useState([]); 

  return (
    <Provider store={store}>
      <div className={styles.container}>
        <UserContext.Provider value={{toDoList, setToDoList}}> 
          {/* <Router path="/" ></Router> */}
          <main className={styles.main}>
            {/* MY COMPONENTS */}
            <Header/>
            <AddTask/>
            <Form/>
          </main>

          <Footer/>
        </UserContext.Provider>
      </div>
    </Provider>
  )
}
