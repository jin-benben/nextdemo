import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HotProduct from '../components/home/HotProduct'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     
     <HotProduct />
    </div>
  )
}

export default Home
