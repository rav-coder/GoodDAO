import type { NextPage } from 'next'
import Head from 'next/head'
import styles from "../styles/Home.module.css"
import Paragraph from '../components/Paragraph'
import HomepageItem from '../components/HomepageItem'
import Footer from '../components/Footer'
const paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed porttitor lorem. Proin non est dictum, tempor lacus at, volutpat mauris. Phasellus consectetur eros erat, nec scelerisque massa elementum in. Sed sagittis lorem at lectus fermentum, id convallis tortor efficitur. Vivamus sollicitudin bibendum odio, quis ornare velit sodales congue. Curabitur auctor sed nunc id porta. Aenean nulla est, rutrum a orci nec, finibus rhoncus ex.'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GoodDAO</title>
      </Head>
      <div>
        <div className="grid gap-4 grid-cols-2 grid-rows-3 auto-cols-auto pt-48 h-screen justify-items-center">
          <HomepageItem text={"CULT Price"} price={0.00001382}/>
          <HomepageItem text={"Treasury Balance"} price={765.822}/>
          <HomepageItem text={"Marketcap"} price={58530563}/>
          <HomepageItem text={"Total Funds Sent"} price={845}/>
          <HomepageItem text={"Total Value Locked"} price={36711503.212}/>
          <HomepageItem text={"CULT Burned"} price={1743786178461}/>
        </div>

      </div>
      <Footer></Footer>
    </>
  )
}

export default Home