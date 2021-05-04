import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>  
        <title>RCLabs</title>
        <meta name="description" content="Eu fiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          RCLabs | Há mais de 11 anos de experiência em prover soluções
        </h1>

        <p className={styles.description}>
          Aqui é o início da sua ideia!
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>WebDevelopment &rarr;</h2>
            <p>Criação de Paginas e Aplicações Web</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Oracle Expert &rarr;</h2>
            <p>Envie NFe e NFSe com os ERP Oracle</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Integração de dados &rarr;</h2>
            <p>Integre seus dados entre sistemas de forma rápida e com integridade</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Nos desafie! &rarr;</h2>
            <p>
              Gostamos de desafios, então, nos surpreenda!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by RCLabs
      </footer>
    </div>
  )
}
