import React from 'react'
import card from '../../assets/images/statisticsCard.jpg'
import PersonComment from '../../assets/icons/statComment.svg'
import Arrow45 from '../../assets/icons/arrow45.svg'


const Activities = () => {
    const statistics = [
        {
            image: card,
            title : 'IT Business Expert',
            text : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            comment: PersonComment,
            commentName : 'Astronomer X',
            commentJob: 'Space Exploration'
        },
        {
            image: card,
            title : 'IT Business Expert',
            text : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            comment: PersonComment,
            commentName : 'Astronomer X',
            commentJob: 'Space Exploration'
        },
        {
            image: card,
            title : 'IT Business Expert',
            text : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            comment: PersonComment,
            commentName : 'Astronomer X',
            commentJob: 'Space Exploration'
        },
    ]
    const borderImageSource = `linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)),
conic-gradient(from 90deg at 50% 50%, rgba(255, 255, 255, 0) -35.78deg, rgba(255, 255, 255, 0) 256.65deg, rgba(255, 255, 255, 0.3) 289.14deg, rgba(255, 255, 255, 0) 324.22deg, rgba(255, 255, 255, 0) 616.65deg),
linear-gradient(270deg, rgba(80, 76, 234, 0.1) -1.49%, rgba(80, 76, 234, 0) 98.07%),
linear-gradient(90deg, rgba(80, 76, 234, 0.1) 0%, rgba(80, 76, 234, 0) 100%);
`
    const background = `linear-gradient(0deg, #FFFFFF, #FFFFFF) , linear-gradient(270deg, rgba(80, 76, 234, 0.2) -1.49% , rgba(80, 76, 234, 0) 98.07%) , linear-gradient(90deg, rgba(80, 76, 234, 0.2) 0% , rgba(80, 76, 234, 0) 100%)`


  return (
    <div className='py-[80px] '>
        <div className='flex flex-col items-center justify-center px-[10px]'>
            <p className='py-[4px] px-[16px] text-[12px] rounded-[16px] ' 
            style={{ color : '#413DDE' , border: '1px solid', background:' linear-gradient(90deg, rgba(80, 76, 234, 0.20) 0%, rgba(80, 76, 234, 0.00) 100%), linear-gradient(270deg, rgba(80, 76, 234, 0.20) -1.49%, rgba(80, 76, 234, 0.00) 98.07%), #FFF', boxShadow: '0px 0.636px 0px 0px rgba(255, 255, 255, 0.30) inset'}}
            >ACTIVITIES</p>
            <h2 className='pt-[16px] text-[48px] sm:text-[28px]' style={{fontFamily:'Inter', fontWeight:'700', color:'#000000'}}>Upcoming activities</h2>
            <p className='text-[20px] text-center w-[719px] pt-[16px] sm:text-[16px] sm:w-full' style={{fontFamily:'Inter', fontWeight:'400', color:'#000000CC'}}>Activities include professional support for startups, skill development seminars, and analysis for projects undertaken by the Ministry</p>
        </div>

        <div className='flex items-center justify-center gap-[20px] pt-[64px] px-[20px] flex-wrap w-full'>
            {statistics.map((item, index) => {
                return(
                <div className='bg-[#FFFFFF] p-[24px] max-w-[518px] w-full rounded-[48px] xl:max-w-[518px] lg:max-w-full lg:flex lg:flex-col lg:items-center'>
                    <img src={item.image} alt=""  className='rounded-[32px] lg:w-full lg:rounded-[16px]' />
                    <div className='flex items-center justify-between pt-[24px]'>
                        <h3 className='text-[28px]' style={{fontFamily:'Inter', fontWeight:'700', color:'#030712'}}>{item.title}</h3>
                        <img src={Arrow45} alt="" />
                    </div>
                    <p className='pt-[20px] text-[20px] lg:text-center'style={{fontFamily:'Inter', fontWeight:'400', color:'#000000CC'}}>{item.text}</p>
                    <div className='flex items-center pt-[24px] gap-[16px] '>
                        <img src={item.comment} alt="" width={60} height={60}/>
                        <div>
                            <p className='text-[20px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#030712'}}>{item.commentName}</p>
                            <p className='pt-[2px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#4B5563'}}>{item.commentJob}</p>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>  
  )
}

export default Activities