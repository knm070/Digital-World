import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'
import expert1 from '../../assets/images/expert1.png'
import expert2 from '../../assets/images/expert2.png'
import expert3 from '../../assets/images/expert3.png'
import expert4 from '../../assets/images/expert4.png'
import expert5 from '../../assets/images/expert5.png'
import expert6 from '../../assets/images/expert6.png'
import expert7 from '../../assets/images/expert7.png'
import expert8 from '../../assets/images/expert8.png'
import twitter from '../../assets/icons/twitterGray.svg'
import linkedin from '../../assets/icons/linkedinGray.svg'
import instagram from '../../assets/icons/instagramGray.svg'
import { useNavigate } from 'react-router-dom'

const Experts = () => {
    const navigate =  useNavigate();


    const experts = [
        {image: expert1, name: 'Olivia Rhye',  job :'Founder & CEO', text:'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.', icon1: twitter, icon2: linkedin, icon3: instagram },

        {image: expert2, name: 'Phoenix Baker',  job :'Engineering Manager', text:'Lead engineering teams at Figma, Pitch, and Protocol Labs.', icon1: twitter, icon2: linkedin, icon3: instagram },

        {image: expert3, name: 'Lana Steiner',  job :'Product Manager', text:'Former PM for Linear, Lambda School, and On Deck.', icon1: twitter, icon2: linkedin, icon3: instagram },

        {image: expert4, name: 'Demi Wilkinson',  job :'Frontend Developer', text:'Former frontend dev fpr Linear, Coinbase, and Postscript.', icon1: twitter, icon2: linkedin, icon3: instagram },

        {image: expert5, name: 'Candice Wu',  job :'Backend Developer', text:'Lead backend dev at Clearbit. Former Clearbit and Loom.', icon1: twitter, icon2: linkedin, icon3: instagram },

        {image: expert6, name: 'Natali Craig',  job :'Product Designer', text:'Founding design team at Figma. Former Pleo, Stripe, and Tile.', icon1: twitter, icon2: linkedin, icon3: instagram },

        {image: expert7, name: 'Drew Cano',  job :'UX Researcher', text:'Lead user research for Slack. Contractor for Netflix and Udacity.', icon1: twitter, icon2: linkedin, icon3: instagram },

        {image: expert8, name: 'Orlando Diggs',  job :'Customer Success', text:'Lead CX at Wealthsimple. Former PagerDuty and Sqreen.', icon1: twitter, icon2: linkedin, icon3: instagram },
    ]


  return (
    <div>
        <Navbar />
      <div >
    <div className='bg-[#F3F3F7] w-full flex items-center justify-center'>
        <div className='py-[96px] container '>   
            <div className='flex pb-[12px]'>
                <p className='py-[4px] px-[16px] text-[12px] rounded-[16px] ' 
                style={{ color : '#413DDE' , border: '1px solid', background:' linear-gradient(90deg, rgba(80, 76, 234, 0.20) 0%, rgba(80, 76, 234, 0.00) 100%), linear-gradient(270deg, rgba(80, 76, 234, 0.20) -1.49%, rgba(80, 76, 234, 0.00) 98.07%), #FFF', boxShadow: '0px 0.636px 0px 0px rgba(255, 255, 255, 0.30) inset'}}
                >EXPERTS</p>
            </div>
            <h2 className='text-[48px] pb-[24px]' style={{fontFamily:'Inter', fontWeight:'700', color:'#000000'}}>Our Experts</h2>
            <p className='text-[20px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>We’re a small team on a big mission.</p>
        </div>
    
    </div>
        <div className='p-[120px] grid grid-cols-4 grid-rows-2 gap-[64px]'>
            {experts.map((item) => {
                return(
                    <div className='w-[335px] cursor-pointer' onClick={() => navigate('/experts/single')}>
                        <div className=' flex flex-col items-center'>
                        <img src={item.image} alt="" className='pb-[20px]'/>
                        <h3 className='text-[18px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#101828'}}>{item.name}</h3>
                        <span className='pb-[8px] text-[16px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#6941C6'}}>{item.job}</span>
                        <p className='text-center pb-[16px] text-[16px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>{item.text}</p>
                        <div className='flex gap-[12px]'>
                            <img src={item.icon1} alt="" />
                            <img src={item.icon2} alt="" />
                            <img src={item.icon3} alt="" />
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>

            <Footer/>
    </div>
  )
}

export default Experts