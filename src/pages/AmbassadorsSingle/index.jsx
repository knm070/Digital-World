import React from 'react'
import activity from '../../assets/images/activity.png'
import Arrow45 from '../../assets/icons/arrow45.svg'
import arrowRight from '../../assets/icons/arrowRight.svg'
import arrowLeft from '../../assets/icons/arrowLeft.svg'
import BG from '../../assets/images/ambassadorsBg.png'
import SinglePage from '../../assets/images/ambassadorSingle.png'
import twitter from '../../assets/icons/twitterBlue.svg'
import linkedin from '../../assets/icons/linkedinBlue.svg'
import facebook from '../../assets/icons/facebookBlue.svg'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'

import { useNavigate } from 'react-router-dom'

const AmbassadorsSingle = () => {
    const navigate = useNavigate();

    const activities = [
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
        { image: activity, date: 'Started date • 19 Oct 2024', title:'Migrating to Linear 101', arrow: Arrow45, text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'},
    ]

  return (
    <div className=''>
        <Navbar/>
        <div className='pb-[80px]'>
            <div className='bg-[#F3F3F7] p-[16px] w-full flex items-center justify-center'>
                <div className='container flex gap-[8px] items-center'>
                    <p className='text-[12px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#0F132499'}}>Ambassadors</p>
                    <img src={arrowRight} alt="" />
                    <p className='text-[12px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#14151A'}}>Annie Stanley</p>
                </div>
            </div>
            <div className='container flex pt-[80px] gap-[8px] items-center cursor-pointer pb-[64px] px-[162px]' onClick={() => navigate('/ambassadors')}>
                <img src={arrowLeft} alt="" />
                <p className='text-[14px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#14151A'}}>Ambassadors</p>
            </div>
            <div className=' flex px-[162px] gap-[32px] items-start'>
                <div className='max-w-[360px] w-full rounded-[12px] overflow-hidden' style={{border: '1px solid #6561FF33',boxShadow:' 0px 1px 2px 0px #1018280F ',boxShadow:' 0px 1px 3px 0px #1018281A'}}>
                    <img src={BG} alt=""  className='w-full'/>
                    <div className='flex items-end mt-[-50px] justify-between pr-[24px]'>
                        <img src={SinglePage} alt="" width={150} height={150}/>
                        <div className='flex gap-[12px] pb-[25px] '>
                            <img className='p-[12px] rounded-[8px] cursor-pointer' style={{border: '1px solid #6561FF33', boxShadow: '0px 1px 2px 0px #1018280D'}}  src={twitter} alt="" />
                            <img className='p-[12px] rounded-[8px] cursor-pointer' style={{border: '1px solid #6561FF33', boxShadow: '0px 1px 2px 0px #1018280D'}} src={facebook} alt="" />
                            <img className='p-[12px] rounded-[8px] cursor-pointer' style={{border: '1px solid #6561FF33', boxShadow: '0px 1px 2px 0px #1018280D'}} src={linkedin} alt="" />
                        </div>
                    </div>
                    <div className='px-[24px] pb-[24px] w-full'>
                        <h2 className='text-[24px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#101828'}}>Annie Stanley</h2>
                        <p className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'400', color: '#475467'}}>Former PM for Airtable, Medium, Ghost, and Lumi.</p>

                        <h3 className='text-[14px] pt-[24px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#344054'}}>About</h3>
                        <p className='text-[14px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.</p>
                    </div>
                </div>


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
            </div>
        </div>

    <Footer/>
    </div>
  )
}

export default AmbassadorsSingle