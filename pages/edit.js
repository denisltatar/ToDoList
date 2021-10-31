import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Header from '../components/Header'

function Edit() {
    return (
        <div className={styles.container}>
            {/* <Header/> */}
            <p className={styles.description}>
                To edit this input, visit our edit page{' '}
                <code className={styles.code}>http://localhost:3000/edit</code>
                or simply click
                <Button href="http://localhost:3000/edit" color="primary">here</Button>
            </p>
        </div>
      )
}

export default Edit;