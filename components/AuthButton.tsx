'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const AuthButton = () => {
    const {pending} = useFormStatus()
  return (
    <button disabled={pending} type='submit' className="bg-blue-600 w-full text-white text-sm px-4 py-2 rounded-md">
        {pending ? 'Loading...' : 'Sign in'}
    </button>
  )
}

export default AuthButton