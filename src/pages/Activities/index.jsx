import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'
import activity from '../../assets/images/activity.png'
import Arrow45 from '../../assets/icons/arrow45.svg'
import View from '../../assets/icons/viewmore.svg'
const ActivitiesPage = () => {
    const activities = [
        { image: activity, date: 'Started date • 19 Oct 2024', title:'IT Business Expert', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'IT Business Expert', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'IT Business Expert', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'IT Business Expert', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'IT Business Expert', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'IT Business Expert', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
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
                >Activities</p>
            </div>
            <h2 className='text-[48px] pb-[24px]' style={{fontFamily:'Inter', fontWeight:'700', color:'#000000'}}>Upcoming activities</h2>
            <p className='text-[20px] ' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Activities include professional support for startups, skill development seminars,<br/> and analysis for projects undertaken by the Ministry</p>
        </div>
    </div>
      </div>
    <div>
    <div className="p-[20px] flex justify-center flex-wrap gap-y-[20px] gap-x-[32px]">
    {activities.map((item) => {
        return (
            <div
                className="p-[24px] rounded-[48px] w-full sm:w-[380px] md:w-[470px] flex flex-col items-center"
                style={{ background: '#F3F3F7' }}
            >
                <img className="w-full rounded-t-[24px]" src={item.image} />
                <div className="pl-[12px] pt-[24px] pr-[20px] pb-[20px] w-full">
                    <p className="text-[14px] font-semibold text-[#6941C6]" style={{ fontFamily: 'Inter' }}>
                        {item.date}
                    </p>
                    <div className="flex justify-between items-center pt-[8px]">
                        <h3 className="text-[20px] font-semibold text-[#101828]" style={{ fontFamily: 'Inter' }}>
                            {item.title}
                        </h3>
                        <img src={item.arrow} alt="" />
                    </div>
                    <p className="text-[16px] pt-[8px] text-[#475467]" style={{ fontFamily: 'Inter', fontWeight: '400' }}>
                        {item.text}
                    </p>
                </div>
            </div>
        );
    })}
    
</div>
<div className='flex justify-center mb-[120px] mt-[32px]'>
<button className='flex items-center justify-center py-[12px] px-[24px]'  style={{borderRadius: '12px',
background: '#F3F3F7'}}>
    <img className='mr-[10px]' src={View}/>
    <p>View more</p>
</button>
</div>
    </div>
     
  
  
  <Footer/>
    </div>
  )
}

export default ActivitiesPage