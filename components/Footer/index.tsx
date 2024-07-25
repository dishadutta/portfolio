import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMediumSquare,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='py-14 text-center flex flex-col items-center justify-center gap-3'>
      <div className='flex justify-center space-x-4'>
        <a href='mailto:duttadisha12345@gmail.com'>
          <HiMail size='28px' />
        </a>
        <a href='https://www.linkedin.com/in/dishadutta14/'>
          <AiFillLinkedin size='28px' />
        </a>
        <a href='https://github.com/dishadutta'>
          <AiFillGithub size='28px' />
        </a>
        <a href='https://medium.com/@duttadisha12345'>
          <AiFillMediumSquare size='28px' />
        </a>
        <a href='https://twitter.com/disha_dutta20'>
          <AiOutlineTwitter size='28px' />
        </a>
        <a href='https://www.youtube.com/@DishaVlogs-14'>
          <AiFillYoutube size='28px' />
        </a>
      </div>
      <div className='text-sm font-bold'>ⓒ {currentYear} DISHA DUTTA</div>
      <div className='flex'>
        <a
          className='text-sm font-bold tracking-widest'
          href='https://drive.google.com/file/d/1ylYZLDIusQeak3HKe1CDE0X9FTWusfQa/view?usp=sharing'
        >
          Resume
        </a>
      </div>
    </div>
  )
}
