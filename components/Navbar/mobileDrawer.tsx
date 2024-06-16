import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import { ImCross } from 'react-icons/im'

export default function MobileDrawer({ isOpen, onClose }: any) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform opacity-90 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button className='absolute right-7 top-4 p-3' onClick={onClose}>
        <ImCross />
      </button>
      <ul className='flex flex-col justify-center items-center space-y-4'>
        <li className='text-3xl hover:text-blue-900 hover:font-semibold grid grid-flow-row'>
          <Link className='p-5' href='/'>
            Home
          </Link>
          <Link className='p-5' href='/blogs'>
            Blogs
          </Link>
          <Link className='p-5' href='/projects'>
            Projects
          </Link>
          <Link className='p-5' href='/about'>
            About
          </Link>
          <button onClick={toggleTheme}>
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
        </li>
      </ul>
    </div>
  )
}
