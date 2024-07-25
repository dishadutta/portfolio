import { blogPostData } from '@/data/blogData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Blogs',
  description:
    'Portfolio of Disha Dutta, created using next.js and tailwind css',
}

export default function Blogs() {
  return (
    <div className='mx-auto'>
      <h1 className='text-4xl font-bold py-9'>Blogs</h1>
      <div className='space-y-4'>
        {blogPostData.map((post) => (
          <div key={post.href} className='py-6'>
            <a
              href={post.href}
              className='text-xl font-semibold text-blue-500 hover:underline'
            >
              {post.title}
            </a>
            <div className='text-lg text-gray-500'>{post.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
