import { Input } from 'antd'
import React from 'react'

const PasswordChange = () => {
  return (
    <div >
        <div>
            <div className='pb-[20px]' style={{borderBottom:'1px solid #F3F3F7'}}>
                <h2 className='text-[20px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#101828'}}>Password</h2>
                <p className='pt-[4px] text-[14px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Please enter your current password to change your password.</p>
            </div>
            <div className='flex items-start pt-[24px] gap-[32px] pb-[20px]' style={{borderBottom:'1px solid #F3F3F7'}}>
                <p className='w-[280px] text-[14px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#344054'}}>Current password</p>
                <Input.Password placeholder='enter the password' className='py-[10px] px-[14px] h-[44px] w-[512px] rounded-[8px]'/>
            </div>
            <div className='flex items-start pt-[24px] gap-[32px] pb-[20px]' style={{borderBottom:'1px solid #F3F3F7'}}>
                <p className='w-[280px] text-[14px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#344054'}}>New password</p>
                <div>
                    <Input.Password placeholder='enter the password' className='py-[10px] px-[14px] h-[44px] w-[512px] rounded-[8px]'/>
                    <p className='text-[14px] pt-[6px]' style={{fontFamily:'Inter', fontWeight:'400', color:'#475467'}}>Your new password must be more than 8 characters.</p>
                </div>
            </div>
            <div className='flex items-start py-[20px] gap-[32px]' style={{borderBottom:'1px solid #F3F3F7'}}>
                <p className='w-[280px] text-[14px]' style={{fontFamily:'Inter', fontWeight:'600', color:'#344054'}}>Current password</p>
                <Input.Password placeholder='enter the password' className='py-[10px] px-[14px] h-[44px] w-[512px] rounded-[8px]'/>
            </div>
        </div>

        <div className='pt-[20px] flex gap-[12px] justify-end'>
            <button className='py-[10px] px-[16px] bg-[#F6F6FF] rounded-full text-[14px]' style={{fontFamily:'Inter' , fontWeight:'600', color:'#344054' ,boxShadow: '0px 1px 2px 0px #1018280D'}}>Cancel</button>
            <button className='py-[10px] px-[16px] rounded-full text-[14px]' style={{fontFamily:'Inter' , fontWeight:'600', color:'#FFFFFF', background: 'radial-gradient(155.51% 90.51% at 98.96% 19.28%, #BA84FF 0%, rgba(38, 34, 200, 0.00) 100%), radial-gradient(98.28% 151.89% at -24.16% 151.48%, #090833 0%, rgba(38, 34, 200, 0.00) 100%), #6561FF;', boxShadow: '0px 1px 2px 0px #1018280D;'}}>Update password</button>
        </div>
    </div>
  )
}

export default PasswordChange