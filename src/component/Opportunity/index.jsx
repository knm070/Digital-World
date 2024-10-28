import OpportunityBg from '../../assets/images/Raqamlidunyo/OpportunityBg.jpg'

const Opportunity = () => {
  return (
    <div className='flex items-center justify-center bg-[#FFFFFF] '>
    <div className="flex items-center justify-center container pt-[20px] px-[10px] ">
        <div className='rounded-[64px] pt-[158px] max-sm:mx-[10px] max-sm:h-[200px] max-sm:pt-[40px] w-full sm:py-[40px] md:py-[70px]' style={{backgroundImage: `url(${OpportunityBg})`,backgroundPosition:'center', backgroundSize: 'cover'}}>
            <div className='flex flex-col items-center justify-center px-[145px] max-sm:px-[15px] sm:px-[70px]'>
                <h2 className='text-[64px] text-center xl:text-[54px] lg:text-[38px] md:text-[28px] sm:text-[22px] max-sm:text-[16px] max-sm:w-full ' style={{fontFamily: 'Inter', fontWeight: '800', color:'#FFFFFF'}}>Connecting Youth with Global Opportunities in Digital Technologies</h2>
                <p className='text-[20px] text-center pt-[24px] lg:text-[18px] md:text-[14px] sm:text-[16px] max-sm:hidden' style={{fontFamily: 'Inter', fontWeight: '500', color: '#F5F5F5'}}>Connecting Youth with Global Opportunities in Digital Technologies is a program dedicated to empowering young people by providing access to the latest advancements and career opportunities in the digital tech industry</p>
                <button className='bg-white rounded-full text-[16px] py-[12px] px-[24px] mt-[48px] md:mt-[28px] md:text-[14px] sm:mt-[18px] max-sm:mt-[40px] max-sm:text-[12px] max-sm:py-[10px] max-sm:px-[18px]' style={{fontFamily:'Inter', fontWeight:'500'}}>Apply as ambassador</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Opportunity