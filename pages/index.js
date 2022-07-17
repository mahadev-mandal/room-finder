import { Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import BottomNav from '../components/BottomNav/BottomNav'
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
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
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
                Instantly deploy your Next.js site to a public URL with Vercel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam est, enim similique possimus fugit consectetur, cum illum iste dolorem repudiandae optio dolore eligendi. Doloribus praesentium molestias ipsam officiis assumenda! Nihil aspernatur pariatur inventore cum nesciunt eius quas voluptatibus dolore! Temporibus, totam deleniti laudantium animi ad exercitationem nihil explicabo fugiat facere molestias. Ex modi dolore facilis unde autem! Accusamus veniam impedit sunt? Explicabo provident ea commodi fugit enim doloremque nemo quasi accusantium laboriosam reiciendis eveniet delectus error, expedita totam unde illo tempora doloribus quos, cupiditate sunt. Omnis corrupti quos quod adipisci et fugiat eos voluptatibus pariatur nemo. Placeat, recusandae! Blanditiis nobis itaque officiis fuga qui temporibus praesentium quidem aliquam impedit harum delectus earum facilis eveniet, fugit aut vel, accusamus ipsam illum quis ea necessitatibus a dolores velit nulla? Odit non vero quos asperiores nemo aspernatur quasi debitis facere laboriosam, qui ducimus, aliquam ex officia culpa perspiciatis nihil veniam odio consequuntur tempora. Odit pariatur provident ipsum illum ad quos ipsam similique voluptatum, exercitationem accusamus natus est enim dolorem autem voluptate quaerat quia, nihil, sequi quas. Iste nemo facere deleniti ipsa voluptas magnam similique illum repellat provident aliquam ipsum soluta eos incidunt magni vero qui commodi reiciendis ab, natus assumenda harum ducimus in quasi velit. Odit minima nulla consequatur dolores est sint perspiciatis. Nisi iste fugiat quisquam illo laborum quod dolorum ipsam, deserunt molestiae laboriosam, iure neque magni labore exercitationem. Culpa sint laboriosam maxime! Doloribus, quaerat mollitia voluptates voluptas laboriosam omnis doloremque eaque cum at voluptatum impedit dolorum, ad porro velit? Nemo blanditiis unde voluptates nam veniam repellat, explicabo ab, nostrum, consequuntur accusamus ex non! Quidem quo beatae quaerat! Nostrum mollitia tempore ipsa voluptate magnam labore harum ut illum temporibus molestias inventore ducimus, non ullam voluptatum eius veritatis! Quidem laboriosam, dolore delectus culpa in vel repellendus cumque, ad quod blanditiis dolorum unde?
              </p>
            </a>
          </div>
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
