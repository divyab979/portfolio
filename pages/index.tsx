import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
    <Head>
      <title>Diviya's portfolio</title>
    </Head>

    <Header/>
   
    {/* Hero  */}
    <section
    id='hero'
    className='snap-start'>
      <Hero/>
    </section>
    
    {/* About  */}
    <section
    id='about'
    className='snap-center'>
      <About/>
    </section>

    {/* Experience  */}
    <section
    id='experience'
    className='snap-center'>
      <WorkExperience/>
    </section>

    {/* Skills  */}
    <section id='skills' className='snap-center'>
      <Skills/>
    </section>

    {/* Projects  */}
    <section
    id='projects'
    className=''>
      <Projects/>
    </section>
    
    {/* Contact me  */}
    <section
    id='contact'
    className='snap-start'>
      <ContactMe/>
    </section>

    <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img 
          className="h-10 w-10 rounded-full silter grayscale hover:grayscale-0 cursor-pointer"
          src="next.svg" alt="" />
        </div>
      </footer>
    </Link>
   </div>
  )
}
