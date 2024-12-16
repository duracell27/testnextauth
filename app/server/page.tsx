import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'

const ServerPage = async() => {
    const session = await auth();
    if (!session?.user) {
        redirect('/')
    }
    
    return (
      <main className="flex h-full items-center justify-center flex-col gap-2">
        <h1 className="text-3xl">Server Page</h1>
        <div className="text-lg">Logged in as {session?.user?.email}</div>
      </main>
    );
}

export default ServerPage