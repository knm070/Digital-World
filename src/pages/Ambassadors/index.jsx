import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'
import Ambassador1 from '../../assets/images/ambassador1.jpg'
import Ambassador2 from '../../assets/images/ambassador2.jpg'
import Twitter from '../../assets/icons/twitterWhiteIcon.svg'
import Linkedin from '../../assets/icons/linkedinWhiteIcon.svg'
import BasketBall from '../../assets/icons/basketBallWhiteIcon.svg'
import View from '../../assets/icons/viewmore.svg'

const AmbassadorsPage = () => {
    const ambassadors = [
        {
            image: Ambassador1,
            name: 'Annie Stanley',
            text: 'Former PM for Airtable, Medium, Ghost, and Lumi.',
            twitter :Twitter,
            linkedin : Linkedin,
            basketball : BasketBall
        },
        {
            image: Ambassador2,
            name: 'Annie Stanley',
            text: 'Former PM for Airtable, Medium, Ghost, and Lumi.',
            twitter :Twitter,
            linkedin : Linkedin,
            basketball : BasketBall
        },
        {
            image: Ambassador1,
            name: 'Annie Stanley',
            text: 'Former PM for Airtable, Medium, Ghost, and Lumi.',
            twitter :Twitter,
            linkedin : Linkedin,
            basketball : BasketBall
        },
        {
            image: Ambassador2,
            name: 'Annie Stanley',
            text: 'Former PM for Airtable, Medium, Ghost, and Lumi.',
            twitter :Twitter,
            linkedin : Linkedin,
            basketball : BasketBall
        },
        {
            image: Ambassador1,
            name: 'Annie Stanley',
            text: 'Former PM for Airtable, Medium, Ghost, and Lumi.',
            twitter :Twitter,
            linkedin : Linkedin,
            basketball : BasketBall
        },
        {
            image: Ambassador2,
            name: 'Annie Stanley',
            text: 'Former PM for Airtable, Medium, Ghost, and Lumi.',
            twitter :Twitter,
            linkedin : Linkedin,
            basketball : BasketBall
        },
        {
            image: Ambassador1,
            name: 'Annie Stanley',
            text: 'Former PM for Airtable, Medium, Ghost, and Lumi.',
            twitter :Twitter,
            linkedin : Linkedin,
            basketball : BasketBall
        },
        {
            image: Ambassador2,
            name: 'Annie Stanley',
            text: 'Former PM for Airtable, Medium, Ghost, and Lumi.',
            twitter :Twitter,
            linkedin : Linkedin,
            basketball : BasketBall
        },
        {
            image: Ambassador1,
            name: 'Annie Stanley',
            text: 'Former PM for Airtable, Medium, Ghost, and Lumi.',
            twitter :Twitter,
            linkedin : Linkedin,
            basketball : BasketBall
        },
     
    ]


  return (
    <div>
        <div style={{background: '#F3F3F7'}}>
        <Navbar />
        </div>
        
      <div className='flex items-center justify-center bg-[#F3F3F7]'>
    <div className='container '>
        <div className='py-[96px] bg-[#F3F3F7]'>   
            <div className='flex pb-[12px]'>
                <p className='py-[4px] px-[16px] text-[16px] rounded-[16px] ' 
                style={{ color : '#413DDE' ,fontFamily:'Inter',fontWeight:'600' }}
                >Experts</p>
            </div>
            <h2 className='text-[48px] pb-[24px]' style={{fontFamily:'Inter', fontWeight:'700', color:'#000000'}}>Ambassadors</h2>
            <p className='text-[20px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>We are selecting ambassadors from the top 20 countries in IT business,<br/> investment, and education sectors.</p>
        </div>
    </div>
      </div>

      <div>
      <div className='flex justify-center gap-[32px] pt-[64px] flex-wrap'>
            {ambassadors.map((item, index) => {
                return (
                    <div className='w-[375px] h-[480px] object-contain flex flex-col justify-end rounded-[44px] overflow-hidden' style={{backgroundImage: `url(${item.image})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
                        <div className='p-[24px] ' style={{background: '#FFFFFF33',backdropFilter: 'blur(24px)', borderRadius: '24px 24px 0 0 '}}>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[30px] pb-[16px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#FFFFFF'}}>{item.name}</h2>
                                <svg className='cursor-pointer' width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.0104 20.5737L18.0104 11.9894L9.42612 11.9894M5.98958 24.0102L17.8902 12.1096" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <p className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#FFFFFF'}}>{item.text}</p>
                            <div className='flex pt-[32px] gap-[20px]'>
                                <img className='cursor-pointer' src={item.twitter} alt="" />
                                <img className='cursor-pointer' src={item.linkedin} alt="" />
                                <img className='cursor-pointer' src={item.basketball} alt="" />
                            </div>
                        </div>      
                    </div>
                )
            })}
        </div>
      </div>
      <div className='flex justify-center mb-[120px] mt-[32px]'>
<button className='flex items-center justify-center py-[12px] px-[24px]'  style={{borderRadius: '12px',
background: '#F3F3F7'}}>
    <img className='mr-[10px]' src={View}/>
    <p>View more</p>
</button>
</div>
  <Footer/>

    </div>
  )
}

export default AmbassadorsPage