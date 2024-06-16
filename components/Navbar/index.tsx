'use client'

import React, { useState } from 'react'
import LogoLink from './logoLink'
import DesktopNavLinks from './desktopNavLinks'
import MobileMenuButton from './mobileMenuButton'
import MobileDrawer from './mobileDrawer'
import Link from 'next/link'

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      {/* <div className='hidden relative py-6 sm:flex items-center text-center justify-center w-[60%]'> */}
      <div className='hidden sm:flex'>
        {/* <LogoLink /> */}
        <DesktopNavLinks />
      </div>
      <div className='sm:hidden py-6'>
        {/* <LogoLink /> */}
        <div className='text-center absolute'>
          <Link href='/' className='font-extrabold text-xl'>
            Disha
          </Link>
        </div>
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  )
}
