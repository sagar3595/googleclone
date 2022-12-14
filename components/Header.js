import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon} from '@heroicons/react/outline';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
import { XIcon } from '@heroicons/react/outline';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center' >
        <Image 
      src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
      height={30}
      width={120}
      onClick={() => router.push('/')}
      className='cursor-pointer'

      />
      <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border 
      border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
        <input 
        ref={searchInputRef} 
        className='flex-grow w-full focus:outline-none'
        type='text'
        />
        <XIcon className='h-6 sm:mr-3 text-gray-500 cursor-pointer
        transition duration-100 transform hover:scale-125'
        onClick={() =>(searchInputRef.current.value= "")}
         />
        <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex
       text-blue-500 border-l-2 pl-4 border-gray-300' />
       <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' 
       />
       <button hidden type='submit' onClick={search}>
        Search
       </button>
      </form>
      <Avatar className='ml-auto' url={'https://media.licdn.com/dms/image/C4D03AQFDQhEDMFer5Q/profile-displayphoto-shrink_400_400/0/1657286840897?e=1675900800&v=beta&t=rJoR4dyURhgfD0HnZjMAgbN-x6BezxI8CWbjpK1b5F4'} /> 
    </div>
      
    {/* HeaderOptions */}
    <HeaderOptions />
    </header>
  )
}

export default Header