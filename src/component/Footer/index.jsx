import logo from '../../assets/icons/logo.svg'
import phone from '../../assets/icons/phoneBlue.svg'
import mail from '../../assets/icons/mailBlue.svg'

const Footer = () => {
  return (
    <div className='flex justify-center '>
        <div className='flex justify-between'>
            <div>
                <div className='flex items-center gap-[24px] '>
                    <img src={logo} alt="" />
                    <h2>Raqamli dunyo</h2>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>

            <div className='flex'>
                <div>
                    <p>Product</p>
                    <ul>
                        <li>Ambassadors</li>
                        <li>Experts</li>
                        <li>Activities</li>
                        <li>About</li>
                    </ul>
                </div>
                <div>
                    <p>Contact</p>
                    <div className='flex'>
                        <img src={phone} alt="" />
                        <p>+998(55)511-44-00</p>
                    </div>
                    <div className='flex'>
                        <img src={mail} alt="" />
                        <p>hello@raqamlidunyo.io</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer