"use client"
import AnimatedGridBackground from '@/components/animatingBackground'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
     <AnimatedGridBackground/>
     <div className='bg-white rounded-xl shadow-lg overflow-hidden m-8 transition-all duration-300 hover:shadow-xl'>
        <h1 className='text-2xl font-bold p-4 text-center'>Accomodation Details for Opted Participants</h1>
        <p className='p-4 text-center'>Check your Alloted Accomodation, Click on the Hall Name to get list</p>
        <ul className='p-4'>
          <Link href="/NorthGuestHouse.pdf">  <li className='py-2 border-b border-gray-200 text-blue-600'>North Guest House</li></Link>
          <Link href="/VKHall.pdf">  <li className='py-2 border-b border-gray-200 text-blue-600'>VK Hall Of Residence</li></Link>
          <Link href="/VSHall.pdf">  <li className='py-2 border-b border-gray-200 text-blue-600'>VS Hall of Residence (Only for Gents)</li></Link>
          <Link href="/SouthGuestHouse.pdf">  <li className='py-2 border-b border-gray-200 text-blue-600'>South Guest House</li></Link>
          <Link href="/CVR.pdf">  <li className='py-2 border-b border-gray-200 text-blue-600'>CV Raman Hall Of Residence (Only for Ladies)</li></Link>
        </ul>

     </div>

    </div>
  )
}

export default page
