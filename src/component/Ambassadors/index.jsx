import React from 'react'
import Ambassador1 from '../../assets/images/ambassador1.jpg'
import Ambassador2 from '../../assets/images/ambassador2.jpg'
import Twitter from '../../assets/icons/twitterWhiteIcon.svg'
import Linkedin from '../../assets/icons/linkedinWhiteIcon.svg'
import BasketBall from '../../assets/icons/basketBallWhiteIcon.svg'

const Ambassadors = () => {
    const borderImageSource = `linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)),
    conic-gradient(from 90deg at 50% 50%, rgba(255, 255, 255, 0) -35.78deg, rgba(255, 255, 255, 0) 256.65deg, rgba(255, 255, 255, 0.3) 289.14deg, rgba(255, 255, 255, 0) 324.22deg, rgba(255, 255, 255, 0) 616.65deg),
    linear-gradient(270deg, rgba(80, 76, 234, 0.1) -1.49%, rgba(80, 76, 234, 0) 98.07%),
    linear-gradient(90deg, rgba(80, 76, 234, 0.1) 0%, rgba(80, 76, 234, 0) 100%);
    `
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
    ]
  return (
    <div className='py-[120px] bg-[#FFFFFF]'>
        <div className='flex flex-col items-center justify-center'>
        <p className='py-[4px] px-[16px] text-[12px] rounded-[16px]' style={{ color : '#413DDE' , border: '1px solid', background:' linear-gradient(90deg, rgba(80, 76, 234, 0.20) 0%, rgba(80, 76, 234, 0.00) 100%), linear-gradient(270deg, rgba(80, 76, 234, 0.20) -1.49%, rgba(80, 76, 234, 0.00) 98.07%), #FFF', boxShadow: '0px 0.636px 0px 0px rgba(255, 255, 255, 0.30) inset'}}>AMBASSADORS</p>
            <h2 className='pt-[16px] text-[48px] sm:text-[28px] md:text-[48px]' style={{fontFamily:'Inter', fontWeight:'700', color:'#000000'}}>Ambassadors</h2>
            <p className='text-[20px] text-center w-[719px] pt-[16px] sm:w-full sm:text-[16px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#000000CC'}}>We are selecting ambassadors from the top 20 countries in IT business, investment, and education sectors.</p>
        </div>

        <div className='flex justify-center gap-[32px] pt-[64px] flex-wrap'>
            {ambassadors.map((item, index) => {
                return (
                    <div className='w-[375px] h-[480px] object-contain flex flex-col justify-end rounded-[44px] overflow-hidden' style={{backgroundImage: `url(${item.image})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
                        <div className='p-[24px] ' style={{background: '#FFFFFF33',backdropFilter: 'blur(24px)', borderRadius: '24px 24px 0 0 '}}>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[30px] pb-[16px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#FFFFFF'}}>{item.name}</h2>
                                <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.0104 20.5737L18.0104 11.9894L9.42612 11.9894M5.98958 24.0102L17.8902 12.1096" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <p className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#FFFFFF'}}>{item.text}</p>
                            <div className='flex pt-[32px] gap-[20px]'>
                                <img src={item.twitter} alt="" />
                                <img src={item.linkedin} alt="" />
                                <img src={item.basketball} alt="" />
                            </div>
                        </div>      
                    </div>
                )
            })}
        </div>

        <div className='flex justify-center pt-[64px]'>
            <button className='py-[12px] px-[24px] rounded-full bg-[#F3F3F7]' style={{fontFamily:'Inter', fontWeight:'500', color:'#030712'}}>View all</button>
        </div>
    </div>
  )
}

export default Ambassadors