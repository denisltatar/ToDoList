import styles from '../styles/Home.module.css'
// Making our button look cool hehe
import Button from '@material-ui/core/Button';

const EditHeader = () => {
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Hey! It's like we just saw each other a couple of seconds ago!</h1>
        <h1 className={styles.title}>
           Welcome to your <a>Edit Page</a>
        </h1>

        <p className={styles.description}>
          To view our To Do List in the last page visit {' '}
          <code className={styles.code}>http://localhost:3000/</code>
          or simply click
          <Button href="http://localhost:3000/" color="primary">here</Button>
        </p>
      </main>
    </div>
  )
}


export default EditHeader;