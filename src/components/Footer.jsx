import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <>
     <div id="footerContainer" className='flex flex-col items-center'>
      <div id="iconContainer" className='flex mb-[27px] xl:mb-[25px]'>
        <div id="facebook" className='w-[32px] h-[32px] rounded-[31.224px] border-[0.918px] border-solid border-[rgba(76,123,243,0.15)] flex justify-center items-center text-blue mr-3 hover:bg-blue hover:text-white cursor-pointer'>
          <FaFacebookF />
        </div>
        <div id="twitter" className='w-[32px] h-[32px] rounded-[31.224px] border-[0.918px] border-solid border-[rgba(76,123,243,0.15)] flex justify-center items-center text-blue mr-3 hover:bg-blue hover:text-white cursor-pointer'>
          <FaTwitter />
        </div>
        <div id="instagram" className='w-[32px] h-[32px] rounded-[31.224px] border-[0.918px] border-solid border-[rgba(76,123,243,0.15)] flex justify-center items-center text-blue hover:bg-blue hover:text-white cursor-pointer'>
          <FaInstagram />
        </div>
      </div>
      <div id="copyrightContainer" className='font-["Libre_Franklin"] text-gray text-[10px] font-light'>
        <p>© Copyright Ping. All rights reserved.</p>
      </div>
     </div>
    </>
  )
}

export default Footer