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
        <div className="flex h-screen space-x-10 p-10 items-center">
          <div className='flex flex-1 flex-col h-screen pt-[200px] pb-60 justify-between px-20'>
            <HomepageItem text={"CULT Price"} price={0.00001382}/>
            <HomepageItem text={"Treasury Balance"} price={765.822}/>
            <HomepageItem text={"Marketcap"} price={58530563}/>
          </div>
          <div className='flex flex-1 flex-col h-screen pt-[200px] pb-60 justify-between px-20'>
            <HomepageItem text={"Total Funds Sent"} price={845}/>
            <HomepageItem text={"Total Value Locked"} price={36711503.212}/>
            <HomepageItem text={"CULT Burned"} price={1743786178461}/>
          </div>
          

        </div>

      </div>
      <Footer></Footer>
    </>
  )
}

export default Home