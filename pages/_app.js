import '@/styles/globals.css'
import {MoralisProvider} from "react-moralis"
import Header from "@/components/Header";
import Head from "next/head";
import styles from '@/styles/Home.module.css'


export default function App({Component, pageProps}) {
    return (
        <div className={`${styles.main}`}>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplac"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <Header/>
                <Component {...pageProps}/>
            </MoralisProvider>
        </div>
    )

}
