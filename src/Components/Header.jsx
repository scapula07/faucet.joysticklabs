import React from 'react'
import freetyl from "../../public/freetyl.png"
import Image from 'next/image'

export default function Header() {
  return (
    <div className='w-full'>
         <main className='w-full flex justify-between items-center'>
            <Image 
            className=''
              src={freetyl}
              alt=""
            />

            <button className='rounded-lg py-2 px-4 text-white text-sm ' style={{background:"#C71F1F"}}>
                Connect wallet
            </button>

        </main>

    </div>
  )
}
