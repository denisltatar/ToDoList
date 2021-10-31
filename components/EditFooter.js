// All my imports
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const EditFooter = () => {
  

  return (
    <div className={styles.container}>
        <footer className={styles.footer}>
            <h5>Powered by <a style={{color: "blue"}} href="http://mynameisdenis.com"> Denis</a></h5>
        </footer>
    </div>
  )
}


export default EditFooter;