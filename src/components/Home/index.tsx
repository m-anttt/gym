import SponsorAdidas from "@/assets/adidas.svg";
import HomePageGraphic from "@/assets/fitness.png";
import SponsorForbes from "@/assets/forbes.svg";
import HomePagetext from "@/assets/logo.svg";
import SponsorNike from "@/assets/nike.svg";
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionBtn from '@/shared/ActionBtn';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function Home({setSelectedPage}: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section id="home" className='gap-16 bg-gray-20 py-10 '>
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 sm:mb-10'> 
        <div className='z-10 mt-32 md:basis-3/5 pb-5'>
          <motion.div className='md:-mt-20' initial="hidden" whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:w-[900px] md:before:content-evolvetext max-w-[600px]'><img src={HomePagetext} alt="home-page-text" /></div>
            </div>
          </motion.div>
          <p className='mt-8 text-sm md:text-start'>FitForm isn't just a place to work out; it's a destination where your fitness journey ascends to new heights. From cutting-edge equipment to expert guidance, we're dedicated to helping you surpass your limits and elevate your physical potential. Whether you're a beginner or a seasoned athlete, our comprehensive approach to fitness ensures that every step you take with us leads you closer to your goals. Join us at FitForm and experience the exhilaration of reaching new peaks in your fitness journey.</p>
          <motion.div className='mt-8 flex items-center gap-8' initial="hidden" whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
          <ActionBtn setSelectedPage={setSelectedPage}>Join now</ActionBtn>
          <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-primary-300 transition-all duration-500 ease-in-out' href={`${SelectedPage.ContactUs}`} onClick={() => setSelectedPage(SelectedPage.ContactUs)}>Learn more</AnchorLink>
        </motion.div>
        </div>
       
      <div className='flex basis-2/5 justify-center items-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
        <img src={HomePageGraphic} alt="home-page-graphic" className='md:w-[500px] sm:w-[300px]'/>
      </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className='w-full -mt-10 bg-primary-100 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex gap-40 justify-center items-center'>
              <img src={SponsorNike} alt="sponsor-nike" />
              <img src={SponsorForbes} alt="sponsor-forbes" />
              <img src={SponsorAdidas} alt="sponsor-adidas" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home