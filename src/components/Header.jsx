import React from 'react'
import Logo from '../images/logo.svg'
function Header() {
  return (
    <>
      <div id="headerContainer" className='flex justify-center'>
        <img src={Logo} alt="Logo" />
      </div>
    </>
  )
}

export default Header