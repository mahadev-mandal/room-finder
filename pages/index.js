import { Container, } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import BottomNav from '../components/BottomNav/BottomNav'
import Carousel from '../components/Carousel/Carousel'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'

const data=[
  {
    cardTitle:"1BHK flat available for rent in Koteshwor",
    dateAdded: '2022/7/18',
    price: 12000,
    imgLink: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
  },
  {
    cardTitle:"1BHK flat available for rent in Koteshwor",
    dateAdded: '2022/7/1',
    price: 12000, 
    imgLink:'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    cardTitle:"1BHK flat available for rent in Koteshwor",
    dateAdded: '2022/5/18',
    price: 12000, 
    imgLink: 'https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    cardTitle:"1BHK flat available for rent in Koteshwor",
    dateAdded: '2022/4/18',
    price: 12000, 
    imgLink: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    cardTitle:"1BHK flat available for rent in Koteshwor",
    dateAdded: '2022/1/1',
    price: 12000, 
    imgLink: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    cardTitle:"1BHK flat available for rent in Koteshwor",
    dateAdded: '2021/7/18',
    price: 12000, 
    imgLink: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    cardTitle:"1BHK flat available for rent in Koteshwor",
    dateAdded: '2021/7/1',
    price: 12000, 
    imgLink: 'https://images.pexels.com/photos/12749678/pexels-photo-12749678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    cardTitle:"1BHK flat available for rent in Koteshwor",
    dateAdded: '2020/7/18',
    price: 12000, 
    imgLink: 'https://images.pexels.com/photos/4119832/pexels-photo-4119832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    cardTitle:"1BHK flat available for rent in Koteshwor",
    dateAdded: '2020/1/18',
    price: 12000, 
    imgLink: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    cardTitle:"1BHK flat available for rent in Koteshwor",
    dateAdded: '2019/7/18',
    price: 12000, 
    imgLink: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
]

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Room finder Kathmandu</title>
        <meta name="keywords" content="Find rooms/apartment/flat in Nepal" />
        <meta name="description" content="Find, rooms, apartments, flats, Nepal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container maxWidth="xl">
          <h2>Recently Added</h2>
          <Carousel data={data} />
        </Container>
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
      <BottomNav />
    </div>
  )
}
