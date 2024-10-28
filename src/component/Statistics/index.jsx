import React from 'react'

const Statistics = () => {
    const statistics = [
        {   
            
            number: '400+',
            name: 'Ambassadors'
        },
        {
            number: '120+',
            name: 'Experts'
        },
        {
            number: '10k',
            name: 'Activities'
        },
    ]
    

  return (
    <div className='py-[120px] flex justify-center bg-[#FFFFFF]  px-[10px] w-full'>
        <div className='bg-[#6561FF0F] py-[64px] px-[48px] rounded-[48px] flex gap-[32px] container max-sm:gap-[10px] max-sm:px-[18px]'>
            {statistics.map((item, index) => {
                return(
                <div key={index} className='w-[478px] flex flex-col items-center justify-center max-sm:w-full'>
                    <span className='text-[96px] lg:text-[86px] md:text-[66px] sm:text-[46px] max-sm:text-[26px]' style={{fontFamily: 'Inter', fontWeight:'700', color: '#6561FF'}}>{item.number}</span>
                    <p className='text-[32px] text-center lg:text-[28px] md:text-[22px] sm:text-[18px] max-sm:text-[16px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#42307D'}}>{item.name}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Statistics