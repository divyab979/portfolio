import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCards from './ExperienceCards'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5
    }}
    className=' flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className=' w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory pt-[50%] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
            <ExperienceCards/>
            <ExperienceCards/>
            <ExperienceCards/>
            <ExperienceCards/>
        </div>
    </motion.div>
  )
}

export default WorkExperience