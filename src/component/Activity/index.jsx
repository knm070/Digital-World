import React from 'react'
import activity from '../../assets/images/activity.png'
import Arrow45 from '../../assets/icons/arrow45.svg'

const Activitiy = () => {

    const activities = [
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
    ]

  return (
    <div>
        <h2 className='pb-[20px] text-[20px]' style={{ fontFamily: 'Inter', fontWeight:'600', color:'#101828',borderBottom:'1px solid #F3F3F7'}}>Activities</h2>
        <div className='grid grid-cols-3 grid-rows-2 pt-[20px] max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' style={{columnGap:'32px', rowGap:'20px'}}>
            {activities.map((item) => {
                return (
                    <div className='bg-[#F3F3F7] rounded-[16px]'>
                        <img src={item.image} alt="" />
                        <div className='pl-[12px] pt-[24px] pr-[20px] pb-[20px]'>
                            <p className='text-[14px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#6941C6'}}>{item.date}</p>
                            <div className='flex justify-between items-center pt-[8px]'>
                                <h3 className='text-[20px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#101828'}}>{item.title}</h3>
                                <img src={item.arrow} alt="" />
                            </div>
                            <p className='text-[16px] pt-[8px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Activitiy