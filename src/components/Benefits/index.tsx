import BenefitsPageGraphic from '@/assets/benefits.png'
import Benefit from '@/components/Benefit'
import ActionBtn from '@/shared/ActionBtn'
import HText from '@/shared/Htext'
import { BenefitType, SelectedPage } from '@/shared/types'
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
  {icon: <HomeModernIcon className='w-6 h-6'/>,
title: "State of the Art Facilities",
description: "More than 300+ types of equipment"},
{icon: <UserGroupIcon className='w-6 h-6'/>,
title: "100's of Diverse Classes",
description: "From beginners to professionals"},
{icon: <AcademicCapIcon className='w-6 h-6'/>,
title: "Expert and Pro Trainers",
description: "Educated and certified specialists"}
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}
function Benefits({setSelectedPage}: Props) {
 
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div  onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
        <motion.div className='md:my-5 md:w-3/5'  initial="hidden" whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
          <HText>More than just a gym.</HText>
          <p className='my-5 text-sm'>Our gym isn't just a place to sweat; it's a community where empowerment thrives. From our friendly staff to our supportive members, everyone is united by a common goal: to uplift and inspire each other on the journey to better health and wellness. You'll always find the encouragement and camaraderie you need to push past barriers and achieve greatness. Join our empowering atmosphere and discover the transformative power of community-driven fitness.</p>
        </motion.div>
        <motion.div className='md:flex items-center justify-between gap-8 mt-5' initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} variants={container}>
          {benefits.map((benefit: BenefitType) =>(
            <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>
          ))}
        </motion.div>

        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          <img  src={BenefitsPageGraphic} className='mx-auto max-w-[300px]' alt="" />
          <div className='relative'>
            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractWaves'>
            <motion.div className="relative"  initial="hidden" whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
              <HText>10+ years helping to get <span className='text-primary-500'>fit</span></HText>
            </motion.div>
            </div>
          </div>
          <motion.div  initial="hidden" whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
            <p className='my-5'>At FitForm, we understand that one size doesn't fit all when it comes to fitness. That's why our team of expert trainers is committed to crafting personalized workout plans tailored specifically to your unique needs, preferences, and goals. </p>
            <p className='mb-5'>Through detailed assessments and ongoing support, we ensure that every aspect of your fitness journey is customized to maximize results and minimize guesswork. With FitForm's personalized approach, you'll not only see progress faster but also gain the knowledge and confidence to sustain your newfound fitness lifestyle for the long haul.</p>
            <div className='relative mt-16'>
            <div className='before:absolute before:bottom-0 before:right-20 before:z-[-1] before:content-sparkles'>
              <ActionBtn setSelectedPage={setSelectedPage}>Join now</ActionBtn>
            </div>
          </div>
          </motion.div>
        
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits