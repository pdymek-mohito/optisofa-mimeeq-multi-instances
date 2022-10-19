import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Optisofa - Mimeeq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mimeeq Configurator</h1>
        <h2 className={styles.subtitle}>Multi-Instance Demo</h2>

        <p className={styles.description}>
          Please choose one product, then return to this screen and select the other product. The configurator will not load until you do a page refresh.
        </p>

        <div className={styles.grid}>
          <Link href="/product-one">
            <a className={styles.card}>
              <h2>Product One</h2>
              <p>Short code: JZCUJI</p>
            </a>
          </Link>

          <Link href="/product-two">
            <a className={styles.card}>
              <h2>Product Two</h2>
              <p>Short code: P1MYOE</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
