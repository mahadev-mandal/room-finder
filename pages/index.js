import { Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import BottomNav from '../components/BottomNav/BottomNav'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Room finder Nepal</title>
        <meta name="keywords" content="Find rooms/apartment/flat in Nepal" />
        <meta name="description" content="Find, rooms, apartments, flats, Nepal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <main className={styles.main}>
          <Card />

        </main>
      </Container>

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
      <BottomNav />
    </div>
  )
}
