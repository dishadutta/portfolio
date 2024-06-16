import { GiHamburgerMenu } from 'react-icons/gi'

export default function MobileMenuButton({ onClick }: any) {
  return (
    <button className='absolute right-2 top-2 p-2 py-6' onClick={onClick}>
      {/* <FontAwesomeIcon className='text-4xl' icon={faBars} /> */}
      <GiHamburgerMenu />
    </button>
  )
}
