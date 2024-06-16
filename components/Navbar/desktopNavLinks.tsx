import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'

export default function DesktopNavLinks() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className='flex justify-between items-center w-full py-10'>
        <div className='text-3xl font-extrabold'>Disha</div>
        <div className='space-x-4 text-lg font-bold'>
          <Link href='/'>Home</Link>
          <Link href='/blogs'>Blogs</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/about'>About</Link>
          <button onClick={toggleTheme}>
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </>
  )
}
