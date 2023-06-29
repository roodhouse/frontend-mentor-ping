import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {

  const { register, resetField, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      email: ''
    }
  })

  function onSubmit(data) {
    // Change the border color back to the original color 
    let emailContainer = document.getElementById('emailContainer')
    emailContainer.style.borderColor = '#C2D3FF'
    // Reset the email field to empty
    resetField('email')
    // Log the input
    console.log(data)
  }

  function onError(e) {
    let errorText = document.getElementById('warningContainer')
    let emailContainer = document.getElementById('emailContainer')
    // Change the visibility of the error div
    errorText.style.visibility = 'visible'
    // Change the border color to the warning color
    emailContainer.style.borderColor = '#FF5466'
  }

  return (
    <>
      <div id="formContainer" className='px-[20px]'>
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className='flex flex-col items-center justify-center'>
          <div id="emailContainer" className='py-[10px] pl-8 rounded-[28px] border border-solid border-formBorder shadow-[0px_0px_7px_3px_rgba(0,0,0,0.00)] w-full'>
            <input type="email" id='email' name='email' placeholder='Your email address...' className='placeholder:font-["Libre_Franklin"] placeholder:text-placeHolder placeholder:text-xs placeholder:leading-[20px] placeholder:font-light'
              {...register('email', {
                required: 'Please provide a vaild email address',
                pattern: {
                  value:  /\w+@\w+\.\w{2,3}/,
                  message: 'Please provide a vaild email address'
                }
              })}
            />
          </div>
          <div id="warningContainer" className='text-warning font-["Libre_Franklin"] italic font-normal text-[10px] leading-[20px] tracking-[0.125px] mt-[2px] invisible h-[20px]'>
            <p>{errors.email?.message}</p>
          </div>
          <div id="submitContainer" className='cursor-pointer hover:bg-blue/[.7] rounded-[28px] bg-blue shadow-[0px_5px_10px_2px_rgba(76,123,243,0.23)] text-white w-full text-center text-xs font-["Libre_Franklin"] font-semibold leading-[16px] mt-[2px]'>
            <input type="submit" id="submit" name='submit' value="Notify Me" className='py-[15px] w-full'/>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form