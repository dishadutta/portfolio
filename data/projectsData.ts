interface ProjectDataType {
  img: string
  title: string
  description: string
  genre: string
  link1: string
  link2?: string
}

export const projectPostData: ProjectDataType[] = [
  {
    img: '/images/projects/blueprint.jpg',
    title: 'Blueprint',
    description:
      'An application which to manage your own upcoming or ongoing projects.',
    genre: 'Web Development',
    link1: 'https://github.com/dishadutta/Blueprint-react',
    link2: 'https://github.com/dishadutta/Blueprint_Backend',
  },
  {
    img: '/images/projects/object.jpg',
    title: 'Object Detection',
    description:
      'Detection of all the objects present in a static image or real time webcam.',
    genre: 'Deep Learning',
    link1: 'https://github.com/dishadutta/Object_Detection',
  },
  {
    img: '/images/projects/cartlog.jpg',
    title: 'CartLog',
    description: 'An e-Commerce app for seeling or buying books worldwide.',
    genre: 'Web Development',
    link1: 'https://github.com/dishadutta/Cartlog_Client',
    link2: 'https://github.com/dishadutta/Cartlog_Server',
  },
  {
    img: '/images/projects/sayitsocial.jpg',
    title: 'Say It Social',
    description:
      'An Application to let users connect on day to day basis and share their stories.',
    genre: 'Web Development',
    link1: 'https://github.com/dishadutta/SayItSocialClient',
    link2: 'https://github.com/dishadutta/SayItSocialServer',
  },
  {
    img: '/images/projects/captioning.jpg',
    title: 'Image Captioning',
    description: 'A model that generates caption for any given image.',
    genre: 'Deep Learning',
    link1: 'https://github.com/dishadutta/Image-Captioning',
  },
  {
    img: '/images/projects/maskdetector.jpg',
    title: 'Mask Detector',
    description:
      'A real time webcam application that detects whether a person is wearing mask or not.',
    genre: 'Deep Learning',
    link1: 'https://github.com/dishadutta/Real-Time-Face-Mask-Detector/',
  },
  {
    img: '/images/projects/tiempo.jpg',
    title: 'Tiempo',
    description:
      'A Modern weather app thats shows additional information along with weather.',
    genre: 'Flutter App',
    link1: 'https://github.com/dishadutta/Tiempo',
  },
]
