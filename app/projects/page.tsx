import { projectPostData } from '@/data/projectsData'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className=''>
      <h1 className='text-4xl font-bold py-9'>Projects</h1>
      <div className='space-y-3'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
          {projectPostData.map((posts, index) => (
            <div
              key={posts.title}
              className={`border-[1px] mb-10 border-gray-600 rounded-lg ${
                index % 2 === 0
                  ? 'lg:mr-10 sm:m-6 xl:mr-5 md:m-6'
                  : 'lg:ml-10 sm:m-6 xl:ml-5 md:m-6'
              }`}
            >
              <Image
                className='rounded-t-lg w-[100%] h-44'
                src={posts.img}
                alt={posts.title}
                height={100}
                width={100}
              />
              <div className='p-4 space-y-3'>
                <div className='text-xl'>{posts.title}</div>
                <div>{posts.description}</div>
                <div className='text-sm'>{posts.genre}</div>
                {posts.genre === 'Web Development' ? (
                  <div className='flex justify-between'>
                    <Link href={posts.link1}>Client</Link>
                    <Link href={posts.link2 as string}>Server</Link>
                  </div>
                ) : (
                  <div>
                    <Link href={posts.link1}>Learn more</Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
