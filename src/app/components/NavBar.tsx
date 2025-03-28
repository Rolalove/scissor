"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
export const NavBar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const toggle = () => {
        setOpen(prev => !prev)
    }
  return (
    <div className='mx-auto container px-10 relative'>
        
        <nav className='flex items-center justify-between py-4'> 
        <div>
            <Image src="/Logo.png" alt='Scissor logo' width={155} height={40}/>
        </div>
        <button onClick={toggle} className='lg:hidden'>
            {open ? <RiCloseLargeFill size={30}/>:<GiHamburgerMenu  size={30}/> }
        
        </button>
        {
            open && <div className='relative'>
                <ul className='flex flex-col absolute mt-6 right-2 items-center text-lg text-[#141414] gap-x-10'>
                    <li className='text-[#0065FE]'>My URLs</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Analytics</li>
                    <li>FAQs</li>
                    <li className='text-[#0065FE] font-semibold'>Log in</li>
                    <li className='text-[#ffffff] bg-[#0065FE] px-4 py-2 rounded-full'>Try for free</li>
                </ul>

            </div>
        }
            <div className='hidden lg:block'>
                <ul className='flex items-center text-lg text-[#141414] gap-x-10'>
                    <li className='text-[#0065FE]'>My URLs</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Analytics</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex items-center gap-x-6 text-base'>
                    <li className='text-[#0065FE] font-semibold'>Log in</li>
                    <li className='text-[#ffffff] bg-[#0065FE] px-4 py-2 rounded-full'>Try for free</li>
                </ul>
            </div>

        </nav>
    </div>
  )
}
