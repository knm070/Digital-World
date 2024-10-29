import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import arrowRight from '../../assets/icons/arrowRight.svg'
import ActivityBg from '../../assets/images/activitySignleBg.png'
import twitter from '../../assets/icons/twitterBlue.svg'
import linkedin from '../../assets/icons/linkedinBlue.svg'
import facebook from '../../assets/icons/facebookBlue.svg'
import astronomer from '../../assets/images/astronomer.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ActivitiesSingle = () => {
    const navigate =  useNavigate();
  
  
    return (
    <div>
        <Navbar/>
            <div>
                <div className='bg-[#F3F3F7] p-[16px] w-full flex items-center justify-center'>
                    <div className='container flex gap-[8px] items-center'>
                        <p className='text-[12px] cursor-pointer' onClick={() => navigate('/activities')} style={{fontFamily:'Inter', fontWeight:'500', color:'#0F132499'}}>Upcoming activities</p>
                        <img src={arrowRight} alt="" />
                        <p className='text-[12px] cursor-pointer' style={{fontFamily:'Inter', fontWeight:'500', color:'#14151A'}}>IT Business Expert</p>
                    </div>
                </div>

                <div className='flex flex-col items-center py-[96px] md:mx-[10px] sm:mx-[10px] max-sm:mx-[10px]'>
                    <p className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#6941C6'}}> Started date • 19 Oct 2024</p>
                    <h2 className='text-[48px] pt-[12px] max-sm:text-center' style={{fontFamily:'Inter', fontWeight:'600', color:'#101828'}}>IT Business Expert</h2>
                    <p className='text-[20px] pt-[24px] max-w-[960px] text-center' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <ul className='flex gap-[8px] pt-[40px] pb-[64px]'>
                        <li className='text-[14px] py-[2px] px-[10px] rounded-[16px] bg-[#F9F5FF]' style={{fontFamily:'Inter', fontWeight:'500', color:'#6941C6', border: '1px solid #E9D7FE'}}>Design</li>
                        <li className='text-[14px] py-[2px] px-[10px] rounded-[16px] bg-[#EEF4FF]' style={{fontFamily:'Inter', fontWeight:'500', color:'#3538CD', border: '1px solid #C7D7FE'}}>Research</li>
                        <li className='text-[14px] py-[2px] px-[10px] rounded-[16px] bg-[#FDF2FA]' style={{fontFamily:'Inter', fontWeight:'500', color:'#C11574', border: '1px solid #FCCEEE'}}>Presentation</li>
                    </ul>

                    <img src={ActivityBg} alt="" />

                    <div className='max-w-[720px] pt-[64px] max-sm:text-center'>
                        <h2 className='text-[30px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#101828'}}>Introduction</h2>
                        <p className='py-[20px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                        <p className='pb-[48px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.  </p>
                        <img src={ActivityBg} alt="" className='rounded-[8px]'/>

                        <div className='flex items-center gap-[6px] pt-[16px]'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.47203 12.2428L7.52922 13.1856C6.22748 14.4873 4.11693 14.4873 2.81518 13.1856C1.51343 11.8838 1.51343 9.77329 2.81518 8.47154L3.75799 7.52874M12.2433 8.47154L13.1861 7.52874C14.4878 6.22699 14.4878 4.11644 13.1861 2.81469C11.8843 1.51294 9.77378 1.51294 8.47203 2.81469L7.52922 3.7575M5.66729 10.3335L10.334 5.66679" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='text-[14px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Image courtesy of Fauxels via Pexels</p>                        
                        </div>

                        <p className='pt-[48px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>

                        <div className='pl-[22px] pb-[8px] my-[48px]'  style={{borderLeft:'2px solid #6941C6'}}>
                            <p className='pb-[32px] text-[24px]' style={{fontFamily:'Inter-Italic', fontWeight:'500', color:'#101828'}} >“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</p>
                            <span >— Astronomer X, Space Exploration</span>
                        </div>
                        <p className='text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
                        <p className='pt-[20px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
                        <p className='pt-[20px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>

                        <h2 className='text-[24px] pt-[32px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#101828'}}>Software and tools</h2>
                        <p className='py-[16px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                        <p className='pb-[48px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.  </p>

                        <div className='p-[32px] rounded-[16px]' style={{background:'#F9FAFB'}}>
                            <h2 className='text-[24px] ' style={{fontFamily:'Inter', fontWeight:'600', color:'#101828'}}>Conclusion</h2>
                            <p className='py-[16px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                            <p className='pb-[48px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                            <p className='pb-[48px] text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.</p>
                        </div>

                        <div className='pt-[24px] mt-[48px] flex justify-between items-center flex-wrap max-sm:justify-center max-sm:gap-[20px]' style={{borderTop:' 1px solid #EAECF0'}}>
                            <div className='flex items-center gap-[16px] '>
                                <img src={astronomer} alt="" width={60} height={60}/>
                                <div>
                                    <p className='text-[20px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#030712'}}>Astronomer X</p>
                                    <p className='text-[18px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#4B5563'}}>Space Exploration</p>
                                </div>
                            </div>
                            <div className='flex gap-[12px]  '>
                                <img className='p-[12px] rounded-[8px] cursor-pointer' style={{border: '1px solid #6561FF33', boxShadow: '0px 1px 2px 0px #1018280D'}}  src={twitter} alt="" />
                                <img className='p-[12px] rounded-[8px] cursor-pointer' style={{border: '1px solid #6561FF33', boxShadow: '0px 1px 2px 0px #1018280D'}} src={facebook} alt="" />
                                <img className='p-[12px] rounded-[8px] cursor-pointer' style={{border: '1px solid #6561FF33', boxShadow: '0px 1px 2px 0px #1018280D'}} src={linkedin} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <Footer/>
    </div>
  )
}

export default ActivitiesSingle