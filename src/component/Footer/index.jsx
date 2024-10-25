import logo from '../../assets/icons/logo.svg'
import phone from '../../assets/icons/phoneBlue.svg'
import mail from '../../assets/icons/mailBlue.svg'
import instagram from '../../assets/icons/instagramBlue.svg'
import twitter from '../../assets/icons/twitterBlue.svg'
import telegram from '../../assets/icons/telegramBlue.svg'
import linkedin from '../../assets/icons/linkedinBlue.svg'
import facebook from '../../assets/icons/facebookBlue.svg'

const Footer = () => {
  return (
    <div className='flex justify-center pt-[120px] bg-[#FFFFFF] '  style={{boxShadow: '0px -1px 24px 0px #0000000A', borderRadius:'120px 120px 0 0'}}>
    <div className=' container'>
        <div className='flex justify-between flex-wrap w-full pb-[48px] md:px-[20px] sm:flex sm:justify-center' style={{borderBottom: '1px solid #0000001A'}}>
            <div className='w-[330px] sm:w-full '>
                <div className='flex items-center gap-[24px] sm:justify-center'>
                    <img src={logo} alt="" />
                    <h2 className='text-[24px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#030712'}}>Raqamli dunyo</h2>
                </div>
                <p className='text-[13px] pt-[24px] sm:text-center' style={{fontFamily:'Inter', fontWeight:'400', color:'#4B5563'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>

            <div className='flex flex-wrap gap-[120px] lg:gap-[100px] md:gap-[80px] sm:pt-[40px] '>
                <div>
                    <p className='pb-[16px] text-[14px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#4B5563'}}>Product</p>
                    <ul>
                        <li className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#030712'}}>Ambassadors</li>
                        <li className='text-[16px] pt-[12px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#030712'}}>Experts</li>
                        <li className='text-[16px] pt-[12px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#030712'}}>Activities</li>
                        <li className='text-[16px] pt-[12px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#030712'}}>About</li>
                    </ul>
                </div>
                <div>
                    <p className='pb-[16px] text-[14px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#4B5563'}}    >Contact</p>
                    <div className='flex gap-[12px]'>
                        <img src={phone} alt="" />
                        <p className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#030712'}}>+998(55)511-44-00</p>
                    </div>
                    <div className='flex pt-[12px] gap-[12px]'>
                        <img src={mail} alt="" />
                        <p className='text-[16px] ' style={{fontFamily:'Inter', fontWeight:'600', color:'#030712'}}>hello@raqamlidunyo.io</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-[50px] flex justify-between'>
            <p className='text-[16px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#667085'}}>© 2024 Raqamli Dunyo. All rights reserved.</p>

            <div className='flex gap-[24px]'>
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={telegram} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer