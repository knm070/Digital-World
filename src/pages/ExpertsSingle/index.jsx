import Navbar from '@/component/Navbar'
import React from 'react'
import arrowRight from '../../assets/icons/arrowRight.svg'
import arrowLeft from '../../assets/icons/arrowLeft.svg'
import Profile from '../../assets/images/ProfileIcon.png'
import linkedin from '../../assets/icons/linkedinBlue.svg'
import twitter from '../../assets/icons/twitterBlue.svg'
import partner1 from '../../assets/icons/Polymath.svg'
import partner2 from '../../assets/icons/spherule.svg'
import partner3 from '../../assets/icons/acme.svg'
import partner4 from '../../assets/icons/cloudWatch.svg'
import { useNavigate } from 'react-router-dom'
import Footer from '@/component/Footer'

const ExpertsSingle = () => {
    const navigate =  useNavigate();
    const partners = [
        {image : partner1, title:'Lead Product Designer', name: 'Polymath', date: 'May 2020 – Present'},
        {image : partner2, title:'Product Designer', name: 'Spherule', date: 'Jan 2018 – May 2020'},
        {image : partner3, title:'UX Designer', name: 'Acme Group', date: 'Mar 2017 – Jan 2018'},
        {image : partner4, title:'Visual Designer', name: 'CloudWatch', date: 'Apr 2015 – Mar 2017'},
    ]

  return (
    <div>
        <Navbar/>
        <div>
            <div className=' w-full  flex flex-col items-center justify-center'>
                <div className='bg-[#F3F3F7] p-[16px] w-full flex items-center justify-center'>
                    <div className='container flex gap-[8px] items-center'>
                        <p className='text-[12px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#0F132499'}}>Experts</p>
                        <img src={arrowRight} alt="" />
                        <p className='text-[12px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#14151A'}}>Phoenix Baker</p>
                    </div>

                </div>
                    <div className='container flex pt-[80px] gap-[8px] items-center cursor-pointer' onClick={() => navigate('/experts')}>
                        <img src={arrowLeft} alt="" />
                        <p className='text-[14px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#14151A'}}>Experts</p>
                    </div>

                    <div className='px-[32px] py-[48px] max-sm:p-[14px] rounded-[32px] max-w-[1272px] mt-[64px] mb-[80px] mx-[10px] max-sm:max-w-full' style={{border: '1px solid #6561FF33'}}>
                        <div className=''>
                            <div className='flex items-center max-sm:justify-center '>
                                <img src={Profile} alt="" className='max-sm:w-[100px] max-sm:h-[100px]'/>
                                <div>
                                    <h2 className='text-[30px] max-sm:text-[18px]' style={{fontFamily: 'Inter', fontWeight:'600', color:'#101828'}}>Akbarali Khasanov</h2>
                                    <p className='pt-[4px] text-[16px]  max-sm:text-[14px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>I'm a Product Designer based in Tashkent.</p>
                                </div>
                            </div>

                            <div className='flex gap-[32px] max-sm:flex-col'>
                                <div className='w-[305px] max-sm:pt-[20px] max-sm:w-full'>
                                    <div className=''>
                                        <p className='text-[14px] pb-[8px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#475467'}}>Country</p>
                                        <span className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#344054'}}>Uzbekistan</span>
                                    </div>
                                    <div className='pt-[24px]'>
                                        <p className='text-[14px] pb-[8px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#475467'}}>Organization</p>
                                        <span className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#6561FF'}}>ITIC </span>
                                    </div>
                                    <div className='pt-[24px]'>
                                        <p className='text-[14px] pb-[8px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#475467'}}>User code</p>
                                        <span className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#6561FF'}}>123456</span>
                                    </div>
                                    <div className='pt-[24px]'>
                                        <p className='text-[14px] pb-[8px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#475467'}}>Email</p>
                                        <span className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#6561FF'}}>hi@exmample.com</span>
                                    </div>

                                    <div className='flex pt-[24px] gap-[20px]'>
                                        <img src={twitter} alt="" />
                                        <img src={linkedin} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h2>About me</h2>
                                        <p className='pt-[8px] text-[16px] text-left' style={{fontFamily:'Inter', fontWeight:'400', color:'#4B5563'}}>
                                            I'm a Product Designer based in Tashkent, Uzbekistan. I specialise in UX/UI design, brand strategy, and Webflow development. I'm always striving to grow and learn something new and I don't take myself too seriously.
                                        </p>
                                        <p className='pt-[10px] text-[16px] text-left' style={{fontFamily:'Inter', fontWeight:'400', color:'#4B5563'}}>
                                            I'm passionate about helping startups grow, improve their customer experience, and to raise venture capital through good design.
                                        </p>
                                        <p className='pt-[10px] text-[16px] pb-[20px] text-left' style={{fontFamily:'Inter', fontWeight:'400', color:'#4B5563'}}>
                                            My work has been featured on Typewolf, Mindsparkle Magazine, Webflow, Fonts In Use, CSS Winner, httpster, Siteinspire, and Best Website Gallery.
                                        </p>

                                        <a href="#" className='list-none ' style={{fontFamily:'Inter', fontWeight:'600', color:'#6941C6'}}>Read more</a>
                                    </div>
                                    <div className='grid grid-cols-2 grid-rows-2 gap-[20px] pt-[32px] max-sm:grid-cols-1'>
                                        {partners.map((item) => {
                                            return (
                                                <div className='p-[24px] bg-[#F3F3F7] rounded-[12px]'>
                                                    <div className='flex items-center gap-[12px] pb-[24px]'>
                                                        <img src={item.image} alt="" />
                                                        <div>
                                                            <p className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#101828'}}>{item.title}</p>
                                                            <span className='text-[14px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#101828'}}>{item.name}</span>
                                                        </div>
                                                    </div>

                                                    <p className='text-[14px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>{item.date}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default ExpertsSingle