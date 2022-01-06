import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'


function Project({item}) {
    const router = useRouter()
    const [isShow, setIsShow] = useState(false)
    return (
        <div onClick={() => {
            setIsShow(prev => !prev)
        }} className='group relative transform lg:hover:scale-105  overflow-hidden cursor-pointer z-30 transition-all duration-300 hover:z-40 w-2/4 md:w-full mx-[5%] md:mx-0'>
            <div
            onClick={() => {
                router.push(item.link)
            }}
            className={`${isShow ? "top-2 md:-top-10" : "-top-10"} transition-all duration-200 z-50 fixed  right-2 flex flex-col items-center justify-center bg-gray-800 text-white  decoration-none font-bold font-inherit px-2 rounded-md md:group-hover:top-2`}>
                <p>Go To Project</p>
            </div>
            <Image 
            src={item.imgSrc}
            alt="project"
            width={400}
            height={200}
            layout='responsive'
            className=' transition-all duration-200 object-cover'
            />
            <div className={`opacity-0 ${isShow ? "opacity-100 bottom-0 md:opacity-0 md:-bottom-[50%]" : "-bottom-[50%] opacity-0 "} md:group-hover:opacity-100 md:group-hover:bottom-0 absolute w-full  transition-all duration-500  bg-gray-800 border-t border-white p-1`}>
                <h1 className='text-white text-base md:text-lg font-[Raleway]'>{item.name}</h1>
                <p className='text-sm md:text-base text-gray-400'>{item.description}</p>
            </div>
        </div>
    )
}

export default Project
