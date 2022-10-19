import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect } from 'react'

export default function ProductOne() {
  useEffect(() => {
    if (typeof mimeeqApp !== 'undefined') {
      loadConfigurator();
    }

    document.addEventListener('mimeeq-app-loaded', loadConfigurator);

    return () => {
      document.removeEventListener('mimeeq-app-loaded', loadConfigurator);
    };
  }, [])

  const loadConfigurator = () => {
    console.log('loadConfigurator');
    mimeeqApp.utils.showConfigurator();
  }

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
          Product One: JZCUJI
        </p>

        <div data-mimeeq data-mimeeq-short-code="JZCUJI" data-locale="en"></div>
        <Script
          src={`https://jrdgrq09nk.execute-api.eu-central-1.amazonaws.com/api/cpq/get-embed-short-code-data?shortCode=JZCUJI&html=1&v=3.1`}
        />

        <Link href="/">
          <button className={styles.backBtn}>Go to Home</button>
        </Link>
      </main>
    </div>
  )
}
