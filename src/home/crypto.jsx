import React, {useState} from 'react'
import token from '../assets/token.png'
import cryptoLogo from '../assets/cryptocurrencies 1.png'
import logo5 from '../assets/logo5.png'
import vector from '../assets/vector.png'
import group from '../assets/group.png'
import illustrator from '../assets/illustration.jpg'
import frame1 from '../assets/Frame14.png'
import hamburger from '../assets/hamburger.png'
import accordion from '../assets/accordion.png'

const crypto = () => {
  const [hamburgerOpen, SethamburgerOpen] = useState(false)
  return (
    <div>
             
                <nav className='my-3 mx-5 flex items-center justify-between bg-[#232339] rounded-full smm:mx-2'>
                <img src={token} alt=""/>

                <div className='text-[#FFFFFF] links smm:hidden'>
                    <a href="" className='mx-5 font-semibold '>Home</a>
                    <a href="" className='mx-5 font-semibold '>About Us</a>
                    <a href="" className='mx-5 font-semibold '>View Whitepaper</a>
                </div>
                
                <a href="" className='font-semibold text-[#FFFFFF]  p-[10px] rounded-full bg-[#254BD3] smm:text-sm'>Join telegram</a>

                <img src={hamburger} alt="" className='mr-4 hamburger' onClick={() => {
                  SethamburgerOpen(!hamburgerOpen)
                }}/>
            </nav>

            {/* toggle naves  */}

            <div className ={`${hamburgerOpen ? 'show-nav' : ''} bg-white mx-3 one flex`}>
                    <a href="" className='mx-5 font-semibold '>Home</a>
                    <a href="" className='mx-5 font-semibold '>About Us</a>
                    <a href="" className='mx-5 font-semibold '>View Whitepaper</a>
                </div>

            <main className='mt-16 smm:mt-12'>
              <div className='mt-16 smm:mt-4'>
                  <h1 className="text-white text-center text-3xl font-semibold">Welcome to the new era of <br /> CryptoCurrencies</h1>
                  <p className='text-white text-center mt-3 smm:text-sm'>Unlock new investments possibilities with <span className='text-[#254BD3]'>BlueIce</span> and stay<br /> ahead the curve with innovative cryptocurrencies<br /> solutions.</p>
                </div>

                <div className='mt-24 flex items-center justify-center smm:mx-4'>
                   <img src={cryptoLogo} alt="" className=''/>
                </div>

                <div className='mt-12 flex items-center justify-center flex-col'>
                   <p className='text-sm text-center text-white my-2'>Powered by</p>
                   <img src={logo5} alt="" />
                   <p className='text-sm text-center text-white my-2'>CeePrice.Inc</p>
                </div>

                <div className='mt-16 bg-[#181B25] p-6 rounded-xl w-[28%] mx-auto smm:w-[90%] lgg:w-[60%]'>
                    <p className='text-xs text-white text-center my-4'>Sales ends in:</p>

                    <div className=' flex items-center justify-center gap-5'>
                      <div className='w-[60px]'>
                         <p className='bg-[#25253B]  p-4 rounded-xl text-white  text-center'>10</p>
                         <p className='text-xs text-center text-white mt-2'>Days</p>
                        </div>

                        <div className='w-[60px]'>
                         <p className='bg-[#25253B] font-bold p-4 rounded-xl text-white text-center'>20</p>
                         <p className='text-xs text-center text-white mt-2'>Hours</p>
                        </div>
                        
                        <div className='w-[60px]'>
                            <p className='bg-[#25253B] font-bold p-4 rounded-xl text-white text-center'>30</p>
                            <p className='text-xs text-center text-white mt-2'>Mins</p>
                        </div>

                        <div className='w-[60px]'>
                           <p className='bg-[#25253B] font-bold p-4 rounded-xl text-white  text-center'>40</p>
                           <p className='text-xs text-center text-white mt-2'>Secs</p>
                        </div>
                    </div>
                    <a href='#'><button className='bg-[#254BD3] w-[100%] p-2 mt-4 text-white text-sm rounded-xl'>PRESALE</button></a>
                </div>
                
                <div>
                   <p className='text-center text-white mt-20 text-xl'>Strategic Partners</p>
                  <div className='flex items-center justify-center gap-20'>
                      <div className='flex items-center justify-center flex-col mt-7'>
                        <img src={vector} alt="" />
                        <p className='text-white mt-1'>Gempad</p>
                      </div>

                      <div className='flex items-center justify-center flex-col mt-7'>
                          <img src={group} alt="" />
                          <p className='text-white mt-1 font-semibold'>Solana</p>
                      </div>
                   </div>
                </div>

                <div className='flex items-center justify-around mx-7 mt-20 smm:flex-wrap lgg:flex-wrap'>
                   <img src={illustrator} alt="" />
                   <div className='text-white smm:mt-4 lgg:mt-4'>
                     <h1 className='text-xl font-semibold'>About BlueIce</h1>
                     <p className=' max-w-[450px] text-sm mt-2'>The BlueIcecoin ($BLUEICE) serves as a key component of a blockchain-based project focused on decentralizing thunderbolt shop operations through the Solana network. It provides mechanisms for token rewards, real estate tokenization, and platform governance, offering practical utility for holders in a business-centric ecosystem.</p>
                   </div>
                </div>


                <div className='flex items-center justify-around mx-7 mt-20 smm:flex-wrap smm:flex-col-reverse smm:mt-16 lgg:flex-wrap  lgg:flex-col-reverse lgg:mt-16'>
                   <div className='text-white smm:mt-6 lgg:mt-6'>
                     <h1 className='text-xl font-semibold smm:text-right lgg:text-right'>Introducing BlueIce</h1>
                     <p className=' max-w-[450px] text-sm mt-2' >Have you always wanted to cut döner BlueIce and earn money with it? Now you have the chance!
                        With VVS ICE Chefs (our official Telegram mini-game) you can cut BlueIce invite friends and stand a chance to get some juicy $BlueIce airdropped!</p>
                        <p className='mt-4 smm:flex smm:justify-center smm:items-center smm:mt-6 lgg:mt-10 lgg:flex lgg:justify-center lgg:items-center'><a href="" className='font-semibold text-[#fff] p-[10px]  rounded-full bg-[#254BD3] px-[15px]'>Join telegram</a></p>
                   </div>
                   <img src={frame1} alt="" />
                </div>

                <div className='mt-12 flex items-center justify-center flex-col'>
                <p className='text-center text-white mt-20 text-xl my-7'>Road Map</p>

              <div className='flex gap-10 smm:flex-wrap lgg:flex-wrap'>
                    <div className='bg-[#1A1A1A] rounded-xl p-4 w-[50%] smm:w-[70%] smm:mx-auto lgg:w-[60%] lgg:mx-auto'>
                      <p className='text-sm text-[#254BD3]'>Phase 1 Q2 2024</p>
                      <p className='text-sm text-white mt-4'>Luanch On Solana</p>
                      <p className='text-sm text-white mt-2'>Tier 1 on Raduim 1</p>
                      <p className='text-sm text-white mt-2'>+10k Holders</p>
                    </div>

                    <div className='bg-[#1A1A1A] rounded-xl p-4 w-[50%] smm:w-[70%] smm:mx-auto lgg:w-[60%] lgg:mx-auto'>
                      <p className='text-sm text-[#254BD3]'>Phase 2 Q3 2024</p>
                      <p className='text-sm text-white mt-4'>+20M daily volumea</p>
                      <p className='text-sm text-white mt-2'>Security audit by tier 1 Auditor</p>
                    </div>

                    <div className='bg-[#1A1A1A] rounded-xl p-4 w-[50%] smm:w-[70%] smm:mx-auto lgg:w-[60%] lgg:mx-auto'>
                      <p className='text-sm text-[#254BD3]'>Phase 3 Q4 2024</p>
                      <p className='text-sm text-white mt-4'>First BlueIce hardware machine distribution accross vendorsa</p>
                      <p className='text-sm text-white mt-2'>First 1000 European Users</p>
                      <p className='text-sm text-white mt-2'>First validator reward batch</p>
                    </div>
                </div>
                </div>

                 <div className=''>
               <ul className='accordion my-[60px] mx-auto w-[700px] flex items-center justify-center flex-col lgg:w-[500px] smm:w-[350px] xsmm:w-[300px]'>  

                   <li className=' w-[100%] m-[20px] p-[10px] rounded-[8px] bg-[#1A1A1A]'>
                     <input type="radio"  name='acordion' id='first' />
                     <label htmlFor="first" className='flex items-center p-[10px] text-[15px] font-semibold cursor-pointer label text-white smm:text-[12px] xsmm:text-[10px]'>what is blueIce</label>
                     <div className='content text-[#555] px-10'>
                       <p className=''>The BlueIce ecosystem is a decentralized network designed to revolutionize the BlueIce industry. It encompasses a range of services and features tailored to BlueIce shops and enthusiasts alike. At its core, the ecosystem introduces.</p>
                     </div>
                   </li>
                  
                   <li className=' w-[100%] m-[20px] p-[10px] rounded-[8px] bg-[#1A1A1A]'>
                     <input type="radio"  name='acordion' id='second'/>
                     <label htmlFor="second" className='flex items-center p-[10px] text-[15px] font-semibold cursor-pointer label text-white smm:text-[12px] xsmm:text-[10px]'>How do I participate in BLUEICE Heaven?</label>
                     <div className='content text-[#555] px-10 '>
                       <p>The BlueIce ecosystem is a decentralized network designed to revolutionize the BlueIce industry. It encompasses a range of services and features tailored to BlueIce shops and enthusiasts alike. At its core, the ecosystem introduces.</p>
                     </div>
                   </li>
           
                   <li className=' w-[100%] m-[20px] p-[10px] rounded-[8px] bg-[#1A1A1A]'>
                     <input type="radio"  name='acordion' id='third'/>
                     <label htmlFor="third" className='flex items-center p-[10px] text-[15px] font-semibold cursor-pointer label text-white smm:text-[12px] xsmm:text-[10px]'>What is $bLUEICE Coin?</label>
                     <div className='content text-[#555] px-10 '>
                       <p>The BlueIce ecosystem is a decentralized network designed to revolutionize the BlueIce industry. It encompasses a range of services and features tailored to BlueIce shops and enthusiasts alike. At its core, the ecosystem introduces.</p>
                     </div>
                   </li>

                   <li className=' w-[100%] m-[20px] p-[10px] rounded-[8px] bg-[#1A1A1A]'>
                     <input type="radio"  name='acordion' id='fourth'/>
                     <label htmlFor="fourth" className='flex items-center p-[10px] text-[15px] font-semibold cursor-pointer label text-white smm:text-[12px] xsmm:text-[10px]' >How can I acquire $blUEICE Coins?</label>
                     <div className='content text-[#555] px-10 '>
                       <p>The BlueIce ecosystem is a decentralized network designed to revolutionize the BlueIce industry. It encompasses a range of services and features tailored to BlueIce shops and enthusiasts alike. At its core, the ecosystem introduces.</p>
                     </div>
                   </li>
                 </ul>
               </div>
            </main>


            <footer className='mt-24 flex  items-center justify-between  mx-40  smm:mx-0 smm:flex-col py-3 smm:mt-16 lggm:mx-0 lgg:flex-col'>
        <div className='flex items-center gap-3 smm:my-4 lgg:my-4'>
            <img src={token} alt="Token Logo" class="h-8 w-8"/>
            <p className='text-white text-lg font-semibold'>BlueIce</p>
        </div>

        <div className='text-white links flex smm:my-4 lgg:my-4'>
            <a href="#" className='font-semibold mx-4'>Home</a>
            <a href="#" className='font-semibold mx-4'>About Us</a>
            <a href="#" className='font-semibold mx-4'>View Whitepaper</a>
        </div>

        <div className='flex gap-5 smm:my-4 lgg:my-4'>
            <p className='font-semibold cursor-pointer hover:underline text-white'>TWITTER</p>
            <p className='font-semibold cursor-pointer hover:underline text-white'>TELEGRAM</p>
        </div>
    </footer>
    <div className='text-center text-white  py-5 smm:py-2'>©2024 All Rights Reserved $BLUEICE Token</div>
            </div>

  )
}

export default crypto;
