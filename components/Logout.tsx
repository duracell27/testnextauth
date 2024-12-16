'use client'
import { logout } from '@/actions/auth'
import React from 'react'

const Logout = () => {
  return (
    <div onClick={()=>logout()}>
        <p className='text-red-500'>logout</p>
    </div>
  )
}

export default Logout