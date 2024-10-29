import { useState } from 'react'
import OpportunityBg from '../../assets/images/Raqamlidunyo/OpportunityBg.jpg'
import modalBg from '../../assets/images/modalBG.png'
import modalPhoto from '../../assets/images/modalPhoto.png'
import uploader from '../../assets/icons/uploader.svg'
import { Modal } from 'antd';

const Opportunity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='flex items-center justify-center bg-[#FFFFFF] '>
    <div className="flex items-center justify-center container pt-[20px] px-[10px] ">
        <div className='rounded-[64px] pt-[158px] max-sm:mx-[10px] max-sm:h-[200px] max-sm:pt-[40px] w-full sm:py-[40px] md:py-[70px] lg:py-[158px]' style={{backgroundImage: `url(${OpportunityBg})`,backgroundPosition:'center', backgroundSize: 'cover'}}>
            <div className='flex flex-col items-center justify-center px-[145px] max-sm:px-[15px] sm:px-[70px]'>
                <h2 className='text-[64px] text-center xl:text-[54px] lg:text-[38px] md:text-[28px] sm:text-[22px] max-sm:text-[16px] max-sm:w-full ' style={{fontFamily: 'Inter', fontWeight: '800', color:'#FFFFFF'}}>Connecting Youth with Global Opportunities in Digital Technologies</h2>
                <p className='text-[20px] text-center pt-[24px] lg:text-[18px] md:text-[14px] sm:text-[16px] max-sm:hidden' style={{fontFamily: 'Inter', fontWeight: '500', color: '#F5F5F5'}}>Connecting Youth with Global Opportunities in Digital Technologies is a program dedicated to empowering young people by providing access to the latest advancements and career opportunities in the digital tech industry</p>
                <button onClick={showModal} className='bg-white rounded-full text-[16px] py-[12px] px-[24px] mt-[48px] md:mt-[28px] md:text-[14px] sm:mt-[18px] max-sm:mt-[40px] max-sm:text-[12px] max-sm:py-[10px] max-sm:px-[18px]' style={{fontFamily:'Inter', fontWeight:'500'}}>Apply as ambassador</button>
            </div>
        </div>
    </div>

    <Modal className='rounded-[24px]'  open={isModalOpen} footer={null} closable={false} onCancel={handleCancel}>
        <div className='flex flex-col items-center'>
          <div className='' style={{backgroundImage:`url(${modalBg})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
              <img src={modalPhoto} alt="" width={120}/>
          </div>
          <div className='pt-[24px]'>
              <h2 className='text-[18px] text-center' style={{fontFamily:'Inter', fontWeight:'600', color:'#101828'}}>Join Us as an Ambassador</h2>
              <p className=' text-[14px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Join our ambassador program for exciting benefits and rewards!</p>

              <input type="text" placeholder='Full name'  className='py-[18px] px-[16px] w-full outline-none rounded-[12px] mt-[24px]'  style={{background: '#F3F3F7'}}/>
              <input type="text" placeholder='Enter your email'  className='py-[18px] px-[16px] w-full outline-none rounded-[12px] mt-[16px]'  style={{background: '#F3F3F7'}}/>
              <textarea type="text" placeholder='Full name'  className='py-[18px] px-[16px] w-full outline-none rounded-[12px] h-[120px] resize-none mt-[16px]'  style={{background: '#F3F3F7'}}/>
          </div>

          <div className='py-[16px] px-[24px] mb-[20px] rounded-[12px] w-full mt-[16px]' style={{border: '1px solid #F3F3F7'}}>
              <input type="file"  className='hidden' id='file-input' name='CV-upload'/>
              <div className='flex flex-col items-center'>
                <label htmlFor="file-input" className='cursor-pointer'>
                  <img src={uploader} alt="" />
                </label>
                  <div className='flex pt-[12px] gap-[4px]'>
                    <p className='text-[14px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#6941C6'}}>CV upload</p>
                    <p className='text-[14px]' style={{fontFamily:'Inter', fontWeight:'400', color:"#475467"}}>or drag and drop</p>
                  </div>
                  <p className='text-[12px]' style={{fontFamily:'Inter', fontWeight:'400', color:"#475467"}}>PDF (max. 15 MB)</p>
              </div>
          </div>

          <div className='pt-[24px] w-full' style={{borderTop: '1px solid #EAECF0'}}>
            <button className='py-[19px] text-center w-full rounded-[12px]' 
            style={{fontFamily:'Inter', fontWeight:'500', color:'#FFFFFF',background: 'radial-gradient(155.51% 90.51% at 98.96% 19.28%, #BA84FF 0%, rgba(38, 34, 200, 0.00) 100%), radial-gradient(98.28% 151.89% at -24.16% 151.48%, #090833 0%, rgba(38, 34, 200, 0.00) 100%), #6561FF', boxShadow: '0px 1px 2px 0px #1018280D;'}}>
              Join Us as an Ambassador
            </button>
          </div>
        </div>
    </Modal>
    </div>
  )
}

export default Opportunity