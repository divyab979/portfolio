import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCards({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        viewport={{
            once: true
        }}

        src='next.svg'
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'/>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Internship with A3M NextGen</h4>
            <div className='flex space-x-2 my-2'>
                <img src='next.svg' alt='' className='h-10 w-10 rounded-full'/>
                <img src='next.svg' alt='' className='h-10 w-10 rounded-full'/>
                <img src='next.svg' alt='' className='h-10 w-10 rounded-full'/>
                {/* tech used  */}
                {/* tech used  */}
                {/* tech used  */}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                Started work 19th June 2023 Ends 19th August 2023
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCards