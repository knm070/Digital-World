import { Select } from 'antd';
import logo from '../../assets/icons/logo.svg'

const Navbar = () => {
    const menu = [
        'Ambassadors',
        'Experts',
        'Activities',
        'About',
        'Contact'
    ]



  return (
    <div className="py-[20px] flex items-center justify-center bg-[#FFFFFF]">
        <div className='flex justify-between items-center container w-full'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div >
            <ul className='flex gap-[32px]'>
                <li className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}>Ambassadors</li>
                <li className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}>Experts</li>
                <li className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}>Activities</li>
                <li className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}>About</li>
                <li className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'500', color:'#000000'}}     >Contact</li>
            </ul>
        </div>
        <div className='flex items-center gap-[20px]'>
            <Select
            style={{width: '63px'}}
                options={[
                    { id: 1, label: 'En', value: 'En' },
                    { id: 2, label: 'Ru', value: 'Ru' },
                    { id: 3, label: 'Uz', value: 'Uz' },
                ]}
            />

            <button className='py-[12px] px-[24px] rounded-full' style={{ fontFamily: 'Inter', fontWeight: '500', color: '#FFFFFF', background: `linear-gradient(0deg, #6561FF, #6561FF), radial-gradient(74.79% 132.2% at -24.16% 151.48%, #090833 0%, rgba(38, 34, 200, 0) 100%)`,}}>Login</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar;