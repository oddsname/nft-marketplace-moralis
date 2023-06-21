import {ConnectButton} from "web3uikit";
import Link from "next/link"

export default function Header() {
    return (
        <nav className='p-5 border-b-2 flex flex-row justify-between'>
            <h1 className='py-4 px-4 font-bold text-3xl'>NFT Marketplace</h1>

            <div className='flex flex-row'>
                <div className='mt-6 mr-10'>
                    <Link href='/' className='m-6'>
                        Home
                    </Link>
                    <Link href='/sell-nft'  className='m-6'>
                        Sell NFT
                    </Link>
                </div>


                <div className='mt-3.5'>
                    <ConnectButton moralisAuth={false}/>
                </div>

            </div>
        </nav>

    )
}