import Image from 'next/image'
import nextJs from '../../public/images/about/next.png'
import reactJs from '../../public/images/about/react.jpg'
import tailwindcss from '../../public/images/about/tailwindcss.png'
import htmlcss from '../../public/images/about/html_css.png'
import typescript from '../../public/images/about/typescript.png'
import javascript from '../../public/images/about/javascript.png'
import graphql from '../../public/images/about/graphql.png'
import bootstrap from '../../public/images/about/bootstrap.png'
import spring from '../../public/images/about/spring.png'
import json from '../../public/images/about/json.png'
import redux from '../../public/images/about/redux.jpg'
import nodejs from '../../public/images/about/node.png'
import java from '../../public/images/about/java.png'
import sql from '../../public/images/about/sql.jpg'
import cypress from '../../public/images/about/cypress.jpg'
import jest from '../../public/images/about/jest.png'
import { LuChefHat } from 'react-icons/lu'
import { RiFlightTakeoffFill } from 'react-icons/ri'
import { GiGuitar } from 'react-icons/gi'

export default function Projects() {
  return (
    <div className=''>
      <h1 className='text-4xl font-bold py-9'>About</h1>
      <div className='text-base'>
        Passionate Software Engineer, an ambitious and results-driven full-stack
        developer, I aspire to contribute my expertise to a dynamic team where
        innovation is valued. My goal is to secure a challenging full-stack
        developer role that allows me to leverage my proficiency in frontend and
        backend technologies to architect robust and scalable solutions. I am
        enthusiastic about collaborating on forward-thinking projects, bringing
        a keen eye for detail and a passion for creating seamless user
        experiences.
      </div>
      <div className='text-3xl font-bold py-9'>Skills</div>
      <div className='space-y-3'>
        <span className='text-lg'>Frontend Technologies -</span>
        <div className='grid grid-cols-5 justify-items-center'>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={nextJs}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Next.js</p>
          </div>
          <div className='m-6'>
            {' '}
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={reactJs}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>React.js</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={tailwindcss}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Tailwind CSS</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={htmlcss}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>HTML/CSS</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={javascript}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Javascript</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={typescript}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Typescript</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={bootstrap}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Bootstrap</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={json}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>JSON</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={redux}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Redux</p>
          </div>
        </div>
      </div>
      <div className='space-y-3'>
        <span className='text-lg'>Backend Technologies -</span>
        <div className='grid grid-cols-3 justify-items-center'>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={java}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Java</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={spring}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Spring</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={nodejs}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Node.js</p>
          </div>
        </div>
      </div>
      <div className='space-y-3'>
        <span className='text-lg'>Databases -</span>
        <div className='grid grid-cols-2 justify-items-center'>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={graphql}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>GraphQl</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={sql}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>SQL</p>
          </div>
        </div>
      </div>
      <div className='space-y-3'>
        <span className='text-lg'>Testing Library for Web Automation -</span>
        <div className='grid grid-cols-2 justify-items-center'>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={cypress}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Cypress</p>
          </div>
          <div className='m-6'>
            <Image
              className='h-16 w-16 animate-fadeIn'
              src={jest}
              alt=''
              height={20}
              width={20}
            />
            <p className='text-center text-xs animate-fadeIn'>Jest</p>
          </div>
        </div>
      </div>
      <div>
        <span className='text-3xl font-bold py-9'>Interest</span>
        <div className='grid grid-row-3'>
          <div className='flex items-center p-3'>
            <GiGuitar className='mr-3' /> Passionate about singing and enhancing
            vocal skills
          </div>
          <div className='flex items-center p-3'>
            <LuChefHat className='mr-3' /> Enjoy experimenting with new recipes
            and cooking techniques
          </div>
          <div className='flex items-center p-3'>
            <RiFlightTakeoffFill className='mr-3' /> Love traveling and
            experiencing diverse cultures and environments
          </div>
        </div>
      </div>
    </div>
  )
}
