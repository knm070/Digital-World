import Navbar from '@/component/Navbar';
import React, { useState } from 'react'
import IconBlue1 from '../../assets/icons/profileIcon1Blue.svg'
import IconBlue2 from '../../assets/icons/profileIcon2Blue.svg'
import IconBlue3 from '../../assets/icons/profileIcon3Blue.svg'
import IconWhite1 from '../../assets/icons/profileIcon1White.svg'
import IconWhite2 from '../../assets/icons/profileIcon2White.svg'
import IconWhite3 from '../../assets/icons/profileIcon3White.svg'
import Logout from '../../assets/icons/profileLogoutIcon.svg'
import PersonalInfo from '@/component/Personalnfo';
import PasswordChange from '@/component/PasswordChange';
import Activitiy from '@/component/Activity';
import Footer from '@/component/Footer';

const Login = () => {
    const [selected, setSelected] = useState('personal-info')
    const profile = [
        {id:'personal-info', name:'Personal info', icon1: IconBlue1, icon2: IconWhite1},
        {id:'settings', name:'Settings', icon1: IconBlue2, icon2: IconWhite2},
        {id:'activities', name:'Activities', icon1: IconBlue3, icon2: IconWhite3},
    ]

  return (
    <div>
    <div className='flex flex-col items-center'>
        <Navbar/>
        <div className='mt-[20px] py-[120px] flex gap-[20px] w-full justify-center items-start container'>
            <div className='p-[16px] rounded-[24px]' style={{border: '1px solid #6561FF33', backdropFilter: 'blur(25px)'}}>
                <p className='text-[18px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#030712'}}>Profile</p>
                <ul className='w-[304px] pt-[24px]'>
                    {profile.map((item) => {
                        return(
                            <li key={item.id}
                                onClick={() =>setSelected(item.id)}
                                className={`flex items-center gap-[12px] p-[12px] cursor-pointer ${selected === item.id ? 'bg-[#F6F6FF] rounded-[12px]' : ''}`}
                                style={{fontFamily:'Inter', fontWeight:'500', color: selected === item.id ? '#6561FF' : '#030712'}}
                            >
                                <img src={selected === item.id ? item.icon1 : item.icon2} alt="" />
                                
                                {item.name}
                            </li>
                        )
                    })}
                    <li className='flex items-center gap-[12px] p-[12px] cursor-pointer' style={{fontFamily:'Inter', fontWeight:'500', color:'#030712'}}>
                        <img src={Logout} alt="" />
                        Logout</li>
                </ul>
            </div>

            <div className='p-[32px] rounded-[32px] w-full' style={{border: '1px solid #6561FF33'}}>
                {selected === 'personal-info' && <PersonalInfo/>} 
                {selected === 'settings' && <PasswordChange/>}
                {selected === 'activities' && <Activitiy/>}
            </div>
        </div>  

    </div>
        <Footer/>
    </div>
  )
}

export default Login;