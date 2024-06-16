import Link from 'next/link'

export default function LogoLink() {
  return (
    <div className='mb-4 text-center sm:mb-0 absolute left-0'>
      <Link className='font-extrabold text-2xl' href='/'>
        Disha
      </Link>
    </div>
  )
}
