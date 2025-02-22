'use client'
import Image from 'next/image'
import portfolioimg from '../public/bitmoji.jpg'
import optum from '../public/images/company/optum.png'
import refier from '../public/images/company/refier.png'
import sparks from '../public/images/company/tsf.png'
import kobzo from '../public/images/company/kobzo.png'
import microsoft from '../public/images/company/microsoft.png'
import jpmorgan from '../public/images/company/jpmorgan.jpg'
import Typewriter from 'typewriter-effect'
import { AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react'
import { intro } from '@/data/introductionData'

export default function Home() {
  return (
    <div className='space-y-10'>
      <div className='flex flex-col md:flex-row'>
        <div className='order-2 md:order-1 flex-1 py-4 flex flex-col justify-center text-center md:text-left'>
          <div className='text-3xl font-extrabold'>Software Engineer</div>
          <div className='font-semibold text-xl'>Optum, UHG</div>
        </div>
        <div className='order-1 md:order-2 flex-1 py-4 flex justify-end items-center'>
          <Image
            src={portfolioimg}
            alt='Description of the image'
            className='border-2 rounded-full max-w-full h-auto md:ml-auto mx-auto md:mx-0'
          />
        </div>
      </div>
      <ul className='flex flex-col space-y-3'>
        {intro.map((item, index) => (
          <li
            className='list-disc flex items-center font-[580] text-lg'
            key={index}
          >
            <AiOutlineStar className='mr-2' />
            {item}
          </li>
        ))}
      </ul>
      <div className='font-semibold text-xl'>Experiences</div>
      <div className='grid grid-flow-row auto-rows-max space-y-3'>
        <div>
          <div className='grid grid-flow-col auto-cols-max gap-4 items-center'>
            <div>
              <Image
                className='h-10 w-10'
                src={optum}
                alt=''
                height={20}
                width={20}
              />
            </div>
            <div className='grid grid-flow-row auto-rows-max'>
              <div className='text-lg'>
                Optum{' '}
                <span className='bg-gray-600 rounded text-white text-sm px-1 py-2'>
                  May 22 - Present
                </span>
              </div>
              <div>Software Engineer - Full Time</div>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-flow-col auto-cols-max gap-4 items-center'>
            <div>
              <Image
                className='h-10 w-10'
                src={refier}
                alt=''
                height={20}
                width={20}
              />
            </div>
            <div className='grid grid-flow-row auto-rows-max'>
              <div className='text-lg'>
                Refier{' '}
                <span className='bg-gray-600 rounded text-white text-sm px-1 py-2'>
                  Feb 22 - Apr 22
                </span>
              </div>
              <div>Software Developer - Internship</div>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-flow-col auto-cols-max gap-4 items-center'>
            <div>
              <Image
                className='h-10 w-10'
                src={sparks}
                alt=''
                height={20}
                width={20}
              />
            </div>
            <div className='grid grid-flow-row auto-rows-max'>
              <div className='text-lg'>
                The Sparks Foundation{' '}
                <span className='bg-gray-600 rounded text-white text-sm px-1 py-2'>
                  Mar 21
                </span>
              </div>
              <div>
                Data Science and Business <br className='sm:hidden' /> Analytics
                Intern - Internship
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-flow-col auto-cols-max gap-4 items-center'>
            <div>
              <Image
                className='h-10 w-10'
                src={kobzo}
                alt=''
                height={20}
                width={20}
              />
            </div>
            <div className='grid grid-flow-row auto-rows-max'>
              <div className='text-lg'>
                KobZo{' '}
                <span className='bg-gray-600 rounded text-white text-sm px-1 py-2'>
                  Aug 20 - Nov 20
                </span>
              </div>
              <div>Web Developer - Internship</div>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-flow-col auto-cols-max gap-4 items-center'>
            <div>
              <Image
                className='h-10 w-10'
                src={microsoft}
                alt=''
                height={20}
                width={20}
              />
            </div>
            <div className='grid grid-flow-row auto-rows-max'>
              <div className='text-lg'>
                Microsoft{' '}
                <span className='bg-gray-600 rounded text-white text-sm px-1 py-2'>
                  July 20
                </span>
              </div>
              <div>Virtual Internship Trainee - Apprenticeship</div>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-flow-col auto-cols-max gap-4 items-center'>
            <div>
              <Image
                className='h-10 w-10'
                src={jpmorgan}
                alt=''
                height={20}
                width={20}
              />
            </div>
            <div className='grid grid-flow-row auto-rows-max'>
              <div className='text-lg'>
                JPMorgan Chase & Co.{' '}
                <span className='bg-gray-600 rounded text-white text-sm px-1 py-2'>
                  June 20
                </span>
              </div>
              <div>Software Engineer - Internship</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
