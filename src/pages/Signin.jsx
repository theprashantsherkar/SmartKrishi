import Form from '@/components/Form'
import React from 'react'

function Signin() {
  return (
    <div className=' h-screen flex justify-center items-center flex-col gap-5'>
      <div className='flex items-center justify-center'>
        <img src="/logo.png" alt="SmartKrishi" />
        <h1 className='text-3xl font-bold'>SmartKrishi</h1>
      </div>
          <Form label={"Sign Up"} isLogin={false}  />
    </div>
  )
}

export default Signin