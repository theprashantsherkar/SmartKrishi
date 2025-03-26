import React from 'react'
import Form from '@/components/Form';

function Login() {
  return (
    <div className=' h-screen flex items-center justify-center'><Form label={"Login"} isLogin={true} /></div>
  )
}

export default Login