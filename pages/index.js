import Head from 'next/head'
import Typed from 'react-typed';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiLinkedin,
  SiMinutemailer,
  SiUpwork
} from 'react-icons/si'
import { ImCss3 } from 'react-icons/im'

SwiperCore.use([Pagination, Navigation]);


import Project from '../components/Project';
import { useEffect, useRef } from 'react';

const NextAppsData = [
  {
    name: "Spotify Clone",
    description: "Spotify clone made with Next.js, TailwindCSS & SPOTIFY API",
    imgSrc: "https://wallpaperaccess.com/full/1373271.jpg",
    link: "https://github.com/frans203/spotify_clone"

  },
  {
    name: "HULU Clone",
    description: "Front-End Hulu clone made with Next.js & TailwindCSS",
    imgSrc: "https://cdn.vox-cdn.com/thumbor/oR4hqrmTxbX_O4gdJ6np8h-PxFk=/0x439:750x861/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/56311701/Image_uploaded_from_iOS__8_.1503433270.jpg",
    link: "https://hulu-clone-project-seven.vercel.app/"

  },
  {
    name: "3.0 Web D-Chat App",
    description: "Decentralized Chat App made with Next, Tailwind & Moralis. Create a MetaMask crypto wallet to access.",
    imgSrc: "https://cdn.searchenginejournal.com/wp-content/uploads/2021/11/metaverse-marketing-619d04870a8c8-sej.png",
    link: "https://da-pp-metaverse.vercel.app/"

  },
  {
    name: "Netflix Clone",
    description: "Front-End Netflix clone made with React & tmbd API",
    imgSrc: "https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm",
    link: "https://netflix-fs-clone.netlify.app/#"

  },
  {
    name: "Amazon Clone",
    description: "Front-End Amazon clone made with React",
    imgSrc: "http://cdn.wallpaperinhd.net/wp-content/uploads/2018/11/06/Amazon-Com-Logo.jpg",
    link: "https://amazonfs.netlify.app/"

  },
]
const WebsitesData = [
  {
    name: "PayPal Clone",
    description: "Front-End Paypal Homepage Clone",
    imgSrc: "https://wallpaperaccess.com/full/660387.png",
    link: "https://paypalclone.netlify.app/"

  },
  {
    name: "Apple Clone",
    description: "Front-End Apple Homepage-Like Clone",
    imgSrc: "https://wallpaperaccess.com/thumb/291494.jpg",
    link: "https://apple-webtype.netlify.app/"

  },
  {
    name: "Business Template",
    description: "Website template for companies",
    imgSrc: "https://i.ibb.co/tx8X4zJ/ws-3.png",
    link: "https://businessfrans.netlify.app/"

  },
  {
    name: "Architect Template",
    description: "Website template for Architect made with Tilt.js library",
    imgSrc: "https://i.ibb.co/S6h2zzW/ws-6.png",
    link: "https://archisite.netlify.app/"

  },
  {
    name: "Wine Template",
    description: "Website Wine template use scroll, menu & buttons to navigate.",
    imgSrc: "https://i.ibb.co/ZmgvsT6/ws-4.png",
    link: "https://winesitepj.netlify.app/"

  },
  {
    name: "Bank Template",
    description: "Website Bank template",
    imgSrc: "https://i.ibb.co/Hzh775z/ws-5.png",
    link: "https://banksiteapp.netlify.app/"

  },
]

const JSApps = [
  {
    name: "MAPTY",
    description: "Javascript App for Running and Cycling",
    imgSrc: "https://i.ibb.co/hRJ4zc3/js-4.png",
    link: "https://mapjsapp.netlify.app/"

  },
  {
    name: "FOOD APP",
    description: "Search for Thousands of Foods",
    imgSrc: "https://i.ibb.co/GJScLKf/js-2.png",
    link: "https://foodrecipefran.netlify.app/"

  },
  {
    name: "BANK APP",
    description: "App that simulates a bank account. (To access use name and pass: js 1111, jd 2222).",
    imgSrc: "https://i.ibb.co/2jQnqpD/js-1.png",
    link: "https://bankappjs.netlify.app/"

  },
  {
    name: "PIG GAME",
    description: "Simple Javascript Game for 2 players with a dice",
    imgSrc: "https://i.ibb.co/dj159L2/js-3.png",
    link: "https://pigjsgamef.netlify.app/"

  },
]



export default function Home() {
  const aboutMeRef = useRef(null)
  useEffect(() => {
    let i = 0
    setInterval(() => {
      if (!aboutMeRef) {
        return
      }

      const images = [
        'bg-[url("https://i.ibb.co/nRMj7DW/Screenshot-2.png")]',
        'bg-[url("https://i.ibb.co/GWt9BFM/Screenshot-3.png")]',
      ]
      if (i === images.length - 1) {
        i = 0
      }
      if (aboutMeRef.current.classList.contains(images[i])) {
        aboutMeRef.current.classList.remove(images[i])
        aboutMeRef.current.classList.add(images[i + 1])

      } else if (aboutMeRef.current.classList.contains(images[images.length - 1])) {
        aboutMeRef.current.classList.remove(images[images.length - 1])
        aboutMeRef.current.classList.add(images[0])
      }
      i++
      return
    }, 3500)
    return
  }, [aboutMeRef])

  return (
    <>
      <Head>
        <title>FS DEV</title>
      </Head>
      <div className='bg-gradient-to-r h-[90vh] animate-gradient-xy from-gray-800 to-gray-400 text-white flex items-center justify-center flex-col space-y-5'>
        <Typed
          loop
          className='text-3xl md:text-5xl font-[Montserrat] font-thin text-center shadow-2xl'
          strings={["Hello, I'm Francisco Santana", "Front-End Developer"]}
          typeSpeed={50} />
        <div className='flex flex-row justify-center items-center space-x-1'>
          <SiHtml5 className='svg-icon hover:text-[#DD4B25]' />
          <ImCss3 className='svg-icon	hover:text-[#264DE4]' />
          <SiJavascript className='svg-icon	hover:text-[#F7DF1E]' />
          <SiReact className='svg-icon	hover:text-[#5FD6F7]' />
          <SiNextdotjs className='svg-icon hover:text-[white]' />
          <SiTailwindcss className='svg-icon hover:text-[#35B3EB]	' />


        </div>

      </div>
      {/* NOTES:
    CREATE MULTIPLE COLUMNS AND ROWS FOR THE PROJECTS SECTION

*/}
      <div className=' bg-gray-900 p-10 space-y-20 w-screen'>
        <div className='sm:w-3/5 lg:w-full mx-auto overflow-hidden'>
          <h2 className='text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-[Raleway] text-white'>Next & React Apps</h2>
          <Swiper
            loop
            className='swiper-container'
            spaceBetween={0}
            breakpoints={{
              // when window width is >= 640px
              350: {
                width: 500,
                slidesPerView: 1,
              },
              410: {
                width: 600,
                slidesPerView: 1,
              },
              500: {
                width: 700,
                slidesPerView: 1,

              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1000: {
                width: 1000,
                slidesPerView: 3,
              }
            }}
          >
            {
              NextAppsData.map(item => {
                return (
                  <SwiperSlide >
                    <Project item={item} />
                  </SwiperSlide>
                )
              })
            }


          </Swiper>

        </div>



        <div className='lg:w-full sm:w-3/5  mx-auto overflow-hidden'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl text-center mb-12  font-[Raleway] text-white'>Websites</h2>
          <Swiper
            loop={true}
            className='swiper-container'
            breakpoints={{
              // when window width is >= 640px
              350: {
                width: 500,
                slidesPerView: 1,
              },
              410: {
                width: 600,
                slidesPerView: 1,
              },
              500: {
                width: 700,
                slidesPerView: 1,

              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1000: {
                width: 1000,
                slidesPerView: 3,
              }
            }}

          >
            {
              WebsitesData.map(item => {
                return (
                  <SwiperSlide>
                    <Project item={item} />
                  </SwiperSlide>
                )
              })
            }


          </Swiper>

        </div>


        <div className='lg:w-full sm:w-3/5  mx-auto overflow-hidden'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl text-center mb-12  font-[Raleway] text-white'>Vanilla Javascript Apps</h2>
          <Swiper
            loop={true}
            className='swiper-container'
            breakpoints={{
              // when window width is >= 640px
              350: {
                width: 500,
                slidesPerView: 1,
              },
              410: {
                width: 600,
                slidesPerView: 1,
              },
              500: {
                width: 700,
                slidesPerView: 1,

              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1000: {
                width: 1000,
                slidesPerView: 3,
              }
            }}

          >
            {
              JSApps.map(item => {
                return (
                  <SwiperSlide>
                    <Project item={item} />
                  </SwiperSlide>
                )
              })
            }


          </Swiper>

        </div>



      </div>
      <div className=' bg-gray-700 p-10 space-y-20'>
        <div className='text-4xl md:text-[5rem] font-extrabold text-center'>
          <span className='font-[Montserrat] text-white shadow-xl'>
            About Me
          </span>
        </div>
        <div className='overflow-hidden flex flex-col items-start justify-center md:flex-row'>
          <div className='space-y-12 w-full md:w-3/5 align-top text-center lg:text-left'>
            <div className='space-y-5'>
              <p className='font-[Raleway] text-justify relative text-md lg:text-lg text-gray-200 '>
                Graduating in <strong>Computer Science</strong>, I am a student in the <strong>IT area</strong> and currently working as a freelancer. I'm a self-taught programmer and I gained experience as a front-end developer working with a <strong>European</strong> start-up. I've taken several online courses, and created <strong>many projects</strong>. Always looking to improve my knowledge in the languages that I have experience, in addition to always wanting to acquire new knowledge in <strong>technologies</strong>, especially the <strong>most used in the job market</strong>.
              </p>

            </div>

            <div className='mt-12 flex flex-col items-center justify-center space-y-6'>
              <h3 className='font-[Raleway]  relative text-md lg:text-3xl text-gray-200 font-bold'>See What Clients Are Saying</h3>
              <h3 className='text-white text-lg text-center w-2/3'>"Great experience as always from this Freelancer. Quick to complete all work, and does so exactly as requested. Highly recommend."
                <br />
                <strong>– Conor Finn, <span className='text-blue-500'>POD1UM</span></strong>
              </h3>

              <h3 className='text-white text-lg text-center w-2/3'>"Francisco is an excellent freelancer, very quick to complete tasks, and he a very good communicator."
                <br />
                <strong>– Conor Finn, <span className='text-blue-500'>POD1UM</span></strong>
              </h3>
            </div>

            <div className=' flex flex-col items-center justify-center font-[Montserrat]' >
              <h2 className='shadow-xl font-extrabold text-center  text-2xl text-white px-4 py-2 mb-4'>Contact</h2>
              <div className='flex justify-center items-center space-x-4'>
                <a href="https://www.linkedin.com/in/fsantanadev/">
                  <SiLinkedin
                    onClick={() => router.push("https://www.linkedin.com/in/fsantanadev/")}
                    className='svg-icon hover:text-[#0A66C2]' />
                </a>

                <a href="mailto:franciscosantana203@gmail.com?subject=Vamos conversar!" data-letters="contact me">
                  <SiMinutemailer
                    className='svg-icon hover:text-[white]' />
                </a>

                <a href="https://www.upwork.com/freelancers/~017de2abd62e50c7a0">
                  <SiUpwork
                    onClick={() => router.push("https://www.upwork.com/freelancers/~017de2abd62e50c7a0")}
                    className='svg-icon hover:text-[#14A800]' />
                </a>

              </div>
              <p className='text-gray-300'>Hope to see you soon! :)</p>

            </div>


          </div>
          <div className=' mx-auto bg-top clip transition-all duration-300 relative w-[15rem] h-[25rem] lg:w-[25rem] object-cover lg:h-[35rem] bg-[url("https://i.ibb.co/nRMj7DW/Screenshot-2.png")]' ref={aboutMeRef}>
            <div className='w-full h-full bg-blue-900 opacity-40' />
          </div>
        </div>

      </div>
    </>


  )
}
