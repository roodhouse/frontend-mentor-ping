import React from 'react'

function Form() {
  return (
    <>
      <div id="formContainer" className='px-[20px]'>
        <form className='flex flex-col items-center justify-center'>
          <div id="emailContainer" className='py-[10px] pl-8 rounded-[28px] border border-solid border-formBorder shadow-[0px_0px_7px_3px_rgba(0,0,0,0.00)] w-full'>
            <input type="email" id='email' name='email' placeholder='Your email address...' className='placeholder:font-["Libre_Franklin"] placeholder:text-placeHolder placeholder:text-xs placeholder:leading-[20px] placeholder:font-light' />
          </div>
          <div id="warningContainer" className='text-warning font-["Libre_Franklin"] italic font-normal text-[10px] leading-[20px] tracking-[0.125px] mt-[2px] invisible'>
            <p>Please provide a valid email address</p>
          </div>
          <div id="submitContainer" className='cursor-pointer rounded-[28px] bg-blue shadow-[0px_5px_10px_2px_rgba(76,123,243,0.23)] text-white w-full text-center text-xs font-["Libre_Franklin"] font-semibold leading-[16px]'>
            <input type="submit" id="submit" name='submit' value="Notify Me" className='py-[15px] w-full'/>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form