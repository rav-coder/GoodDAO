import type { NextPage } from 'next'
import Head from 'next/head'
import styles from "../styles/Home.module.css"
import Paragraph from '../components/Paragraph'

const paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed porttitor lorem. Proin non est dictum, tempor lacus at, volutpat mauris. Phasellus consectetur eros erat, nec scelerisque massa elementum in. Sed sagittis lorem at lectus fermentum, id convallis tortor efficitur. Vivamus sollicitudin bibendum odio, quis ornare velit sodales congue. Curabitur auctor sed nunc id porta. Aenean nulla est, rutrum a orci nec, finibus rhoncus ex.'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GoodDAO</title>
      </Head>
      <div>
        <Paragraph header="Hello World" text={paragraphText}/>
      </div>
      {/* <footer>
        Hello World Hello World
      </footer> */}
    </>
  )
}

export default Home