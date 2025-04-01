import React from 'react'
import Form from '@/components/Form';

function Login() {
  return (
    <div className=' h-screen flex items-center justify-center flex-col gap-5'>
      <div className='flex items-center justify-center'>
        <img src="/logo.png" alt="SmartKrishi" className=''/>
        <h1 className='text-3xl font-bold'>SmartKrishi</h1>
      </div>
      <Form label={"Login"} isLogin={true} />
      </div>
  )
}

export default Login