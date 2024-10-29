import React from 'react'
import Expert from '../../assets/images/experts.png'
import twitter from '../../assets/icons/twitterGray.svg'
import linkedin from '../../assets/icons/linkedinGray.svg'
import instagram from '../../assets/icons/instagramGray.svg'

const Experts = () => {
    const experts = [
        {
            image: Expert,
            name: 'Amélie Laurent',
            text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            Twitter: twitter,
            Linkedin: linkedin,
            Instagram : instagram
        },
        {
            image: Expert,
            name: 'Amélie Laurent',
            text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            Twitter: twitter,
            Linkedin: linkedin,
            Instagram : instagram
        },
        {
            image: Expert,
            name: 'Amélie Laurent',
            text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            Twitter: twitter,
            Linkedin: linkedin,
            Instagram : instagram
        },
        {
            image: Expert,
            name: 'Amélie Laurent',
            text: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
            Twitter: twitter,
            Linkedin: linkedin,
            Instagram : instagram
        },
    ]

  return (
    <div className='bg-[#F3F3F7] pt-[120px] pb-[52px] flex justify-center 2xl:px-[162px]'>
        <div className='flex gap-[64px] xl:flex-row lg:flex-row md:flex-col md:px-[15px] sm:flex-col max-sm:flex-col max-sm:items-center '>
        <div className='flex flex-col items-start xl:items-start lg:items-start md:items-center sm:items-center max-sm:items-center '>
            <p className='py-[4px] px-[16px] text-[12px] rounded-[16px] ' 
            style={{ color : '#413DDE' , border: '1px solid', background:' linear-gradient(90deg, rgba(80, 76, 234, 0.20) 0%, rgba(80, 76, 234, 0.00) 100%), linear-gradient(270deg, rgba(80, 76, 234, 0.20) -1.49%, rgba(80, 76, 234, 0.00) 98.07%), #FFF', boxShadow: '0px 0.636px 0px 0px rgba(255, 255, 255, 0.30) inset'}}
            >EXPERTS</p>
            <h2 className='pt-[16px] text-[48px] sm:text-[28px] max-sm:text-[28px] md:text-[48px]' style={{fontFamily:'Inter', fontWeight:'700', color:'#000000'}}>Experts</h2>
            <p className='text-[20px]  w-[719px] pt-[16px] xl:text-left lg:text-left md:text-center sm:text-center sm:w-full sm:text-[16px] max-sm:text-[16px] max-sm:text-center max-sm:w-full' style={{fontFamily:'Inter', fontWeight:'400', color:'#000000CC'}}>We are selecting ambassadors from the top 20 countries in IT business, investment, and education sectors.</p>
        </div>

        <div className='grid grid-cols-2 grid-rows-2 gap-[24px] max-sm:grid-cols-1 max-sm:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-2 xl:grid-rows-2 sm:flex sm:flex-col sm:items-center max-sm:mx-[10px]'>
            {experts.map((item, index) => {
                return (
                <div key={index} className='flex flex-col items-center justify-center  max-w-[394px] p-[24px] bg-[#FFFFFF] rounded-[48px] sm:max-w-full'>
                    <img src={item.image} alt="" />
                    <h2 className='text-[24px] pt-[20px]' style={{fontFamily: 'Inter', fontWeight:'600', color:'#101828'}}>{item.name}</h2>
                    <p className='text-[16px] text-center pt-[8px] pb-[16px]' style={{fontFamily:'Inter', fontWeight: '400' , color:'#475467'}}>{item.text}</p>
                    <div className='flex gap-[16px]'>
                        <img src={item.Twitter} alt="" />
                        <img src={item.Linkedin} alt="" />
                        <img src={item.Instagram} alt="" />
                    </div>
                </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default Experts