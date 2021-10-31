import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import Header from '../components/Header'
// Making our button look cool hehe
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Home() {

  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to your custom <a>To Do List!</a>
        </h1>

        <p className={styles.description}>
          To edit this input, visit our edit page{' '}
          <code className={styles.code}>http://localhost:3000/edit</code>
          or simply click
          <Button href="http://localhost:3000/edit" color="primary">here</Button>
        </p>

        

        <Form/>
        

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <h5>Powered by <a style={{color: "blue"}} href="http://mynameisdenis.com"> Denis</a></h5>
        
      </footer>
    </div>
  )
}
