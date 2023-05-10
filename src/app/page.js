'use client'
import Image from 'next/image'
import Header from '@/Components/Header'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
const Board=()=>{
  return(
    <div className='w-4/5  h-96 rounded-lg py-4' style={{background:"#141414"}} >
       <main className='flex w-full h-full '>
          <div className='w-2/5 border-r h-full border-black '>
               <Send />
          </div>
          <div className='w-3/5 h-full'>
             <Transactions />
          </div>

       </main>
   
    </div>
  )
}

const Send=()=>{
  return(
    <div className='w-full px-4 text-white'>
      <div className='flex flex-col space-y-2'>
         <h5 className='text-xl font-semibold'>Jsk Token</h5>
         <h5 className='text-slate-400 text-sm'>Fast and reliable. 0.02 JSK/day.</h5>
      </div>

      <div className='flex flex-col w-full space-y-4 py-10'>
        <input className='py-3 rounded-md outline-none bg-black px-4 text-sm font-light' 
        placeholder='Enter your wallet address or account id '
        />
        <div className='w-full flex justify-end'>
           <button className='text-sm py-1 px-4 rounded-full font-light ' style={{background:"#C71F1F"}}>
            Send Jsk
             </button>

        </div>
        
       </div>
       <div>
      
           
          
         
       </div>
      

    </div>
  )
}
const Transactions=()=>{
  return(
    <div className='w-full px-4 text-white'>
         <main className='bg-black w-full flex px-4 py-2 rounded-md justify-between'>
               <h5 className='text-sm font-light'>Your Transactions</h5>
               <h5 className='text-sm font-light'>Time</h5>
        </main>
      
    </div>
  )
}
export default function Home() {
  return (
    <main className="bg-black h-screen w-full px-10 py-8">
    <GoogleReCaptchaProvider
        reCaptchaKey="6Le_dfclAAAAAOACodngFqUQcYFlruxh2mnLrO6i"
         useRecaptchaNet="true"
    >
       
            <Header />
            <div className='py-10 flex flex-col justify-center items-center h-full space-y-14'>
              <h5 className='text-white text-4xl font-semibold '> Joystick labs Token faucet</h5>
              <Board />
            </div>

       
    </GoogleReCaptchaProvider>
    </main>
  )
}
