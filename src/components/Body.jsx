import React from 'react'

function Body() {
  return (
    <>
      <div id="bodyContainer">
        <div id="heading" className='text-gray text-[22px] leading-[32px] font-light text-center font-["Libre_Franklin"] pb-[15px] xl:pb-[16px] xl:text-[48px] xl:leading-[60px]'>
          <h1>We are launching <span className='text-darkBlue font-bold'>soon!</span></h1>
        </div>
        <div id="text" className='text-darkBlue text-xs font-light text-center font-["Libre_Franklin"] xl:text-[20px]'>
          <p>Subscribe and get notified</p>
        </div>
      </div>
    </>
  )
}

export default Body