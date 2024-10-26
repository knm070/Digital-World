import { Drawer, Select, Button } from 'antd';
import logo from '../../assets/icons/logo.svg'
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import {  useNavigate, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    const navigate =  useNavigate();
    const [open, setOpen] = useState(false);

    const handleNavigation = (path ) => {
        navigate(path);
    }
    
    const onClose= () => {
        setOpen(false);
    }
    const showDrawer = () => {
        setOpen(true);
    }

    const menu = [
        'Ambassadors',
        'Experts',
        'Activities',
        'About',
        'Contact'
    ]

     const getBackgroundColor= () => {
        if(location.pathname === '/experts') {
            return '#F3F3F7'
        }
    }



  return (
    <div className="py-[20px] flex items-center justify-center  w-full" style={{background:getBackgroundColor()}}>
        <div className='flex flex-wrap justify-between items-center container   w-full'>
            <div className='md:hidden'>
                <Button  icon={<MenuOutlined/>} onClick={showDrawer}/>
            </div>
            <div className=''>
                <img onClick={() => navigate('/')} src={logo} alt="" />
            </div>
            
                <div className='max-sm:hidden sm:hidden md:block '>
                    <ul className='flex gap-[32px] '>
                        <li className='text-[16px] cursor-pointer' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}} onClick={() =>  handleNavigation('/ambassadors')}>Ambassadors</li>
                        <li className='text-[16px] cursor-pointer' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}} onClick={() =>  handleNavigation('/experts')}>Experts</li>
                        <li className='text-[16px] cursor-pointer' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}  onClick={() =>  handleNavigation('/activities')}>Activities</li>
                        <li className='text-[16px] cursor-pointer' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}>About</li>
                        <li className='text-[16px] cursor-pointer' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}>Contact</li>
                    </ul>
                </div>
                <div className='flex items-center gap-[20px] '>
                    <Select
                    style={{width: '63px'}}
                        options={[
                            { id: 1, label: 'En', value: 'En' },
                            { id: 2, label: 'Ru', value: 'Ru' },
                            { id: 3, label: 'Uz', value: 'Uz' },
                        ]}
                    />

                    <button onClick={()=>navigate('/login')} className='py-[12px] px-[24px] rounded-full' style={{ fontFamily: 'Inter', fontWeight: '500', color: '#FFFFFF', background: `linear-gradient(0deg, #6561FF, #6561FF), radial-gradient(74.79% 132.2% at -24.16% 151.48%, #090833 0%, rgba(38, 34, 200, 0) 100%)`,}}>Login</button>
                </div>
        </div>

        <Drawer
            title='Menu'
            onClose={onClose}
            open={open}
            placement='left'
        >
            <ul className='flex flex-col gap-[32px]'>
                <li className='text-[16px] cursor-pointer p-[10px] rounded hover:bg-gray-300 transition-all duration-300' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}>Ambassadors</li>
                <li className='text-[16px] cursor-pointer p-[10px] rounded hover:bg-gray-300 transition-all duration-300' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}>Experts</li>
                <li className='text-[16px] cursor-pointer p-[10px] rounded hover:bg-gray-300 transition-all duration-300' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}>Activities</li>
                <li className='text-[16px] cursor-pointer p-[10px] rounded hover:bg-gray-300 transition-all duration-300' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}>About</li>
                <li className='text-[16px] cursor-pointer p-[10px] rounded hover:bg-gray-300 transition-all duration-300' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}     >Contact</li>
            </ul>
        </Drawer>
    </div>
  )
}

export default Navbar;