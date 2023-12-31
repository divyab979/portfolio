import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
    className='fle relative flex-col tet-center md:text-left xl:flex-row max-w-[200px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
         Skills
       </h3>

       <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
         Hover over a skill for currency profieciency 
       </h3>

       <div className='grid grid-cols-4 gap-5 pt-72'>
         <Skill/>
         <Skill/>
         <Skill/>
         <Skill/>
         <Skill/>
         <Skill/>
         <Skill/>
         <Skill/>
         <Skill/>
         <Skill/>
         <Skill/>
         <Skill/>
         <Skill/>
       </div>
    </motion.div>
  )
}

export default Skills