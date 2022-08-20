import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

const Login: NextPage = () => {

  const router = useRouter();

  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  // const login = trpc.useMutation('login');

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-3xl font-bold text-gray-600 drop-shadow select-none'>Hey there!</h2>
      <div className='p-3'></div>
      <div className='border-2 border-gray-100 bg-white rounded-lg drop-shadow-xl'>
        <form
          onSubmit={e => e.preventDefault()}
          className='p-8 flex flex-col justify-center items-center h-full min-w-[400px] w-[500px]'>

            <span className='w-full text-sm font-extrabold text-gray-500 select-none'>PASSWORD</span>

            <div className='p-2'></div>

            <TextInput 
              value={password}
              onChange={ e => setPassword(e.target.value) }
              hidden
              className='bg-gray-100 w-full p-3 text-lg focus:border-emerald-300 drop-shadow-md'
            ></TextInput>
            {
              error !== '' && <div>
                <div className='p-2'></div>
                <span className='text-red-500'>{error}</span>
              </div>
            }
            
            <div className='p-4'></div>
            
            <Button 
              onClick={async () => {
                // let data = await login.mutateAsync( {
                  // password
                // });
                // if (data.success){
                //   //set states
                //   router.push('/dashboard')
                // }
                // else {
                //   setError('Password incorrect!')
                // }
                
              }}
              className='w-full p-3 text-md border-2 border-emerald-200 bg-emerald-300 active:bg-emerald-400 drop-shadow-md'
            >LOGIN</Button>
            
        </form>
      </div>
    </div>
  )
}

export default Login
