import OpportunityBg from '../../assets/images/Raqamlidunyo/OpportunityBg.jpg'

const Opportunity = () => {
  return (
    <div className="flex items-center justify-center pt-[20px] ">
        <div className='relative container '>
            <img className='rounded-[64px] ' src={OpportunityBg} alt="" width={1596} height={700}   style={{background: `linear-gradient(0deg, rgba(0, 0, 0, 0) -101.02%, #000000 173.28%), linear-gradient(90deg, #0D1322 1%, rgba(0, 0, 0, 0) 25%), linear-gradient(270deg, #0D1322 1%, rgba(0, 0, 0, 0) 25%)`}}/>
            <div className='flex flex-col items-center justify-center absolute top-[158px] px-[145px]'>
                <h2 className='text-[64px] text-center' style={{fontFamily: 'Inter', fontWeight: '800', color:'#FFFFFF'}}>Connecting Youth with Global Opportunities in Digital Technologies</h2>
                <p className='text-[20px] text-center pt-[24px]' style={{fontFamily: 'Inter', fontWeight: '500', color: '#F5F5F5'}}>Connecting Youth with Global Opportunities in Digital Technologies is a program dedicated to empowering young people by providing access to the latest advancements and career opportunities in the digital tech industry</p>
                <button className='bg-white rounded-full text-black py-[12px] px-[24px] mt-[48px]' style={{fontFamily:'Inter', fontWeight:'500'}}>Apply as ambassador</button>
            </div>
        </div>
    </div>
  )
}

export default Opportunity