import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Validate from './validate'
function Form() {
  // const registerUser = async event => {
  //   event.preventDefault()
  //   const res = await fetch('', {
  //     body: JSON.stringify({
  //       name: event.target.name.value
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST'
  //   })

  //   const result = await res.json()
  //   // result.user => 'Ada Lovelace'
  // }
}
export default function Home() {
  const newForm = Form()
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>

      </div>
    </div>
  )
}
