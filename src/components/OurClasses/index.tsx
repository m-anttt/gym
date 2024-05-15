import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.jpg'
import image4 from '@/assets/image4.jpg'
import image5 from '@/assets/image5.jpg'
import image6 from '@/assets/image6.jpg'
import HText from '@/shared/Htext'
import { ClassType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Class from '../Class'


type Props = {
  setSelectedPage: (value: SelectedPage) =>void
}

const ourclasses: Array<ClassType> = [
  {name: 'Yoga Classes',
    description: "Focus on combining physical postures, breathing exercises, and meditation to improve flexibility, strength, and mental well-being. It emphasizes balance, relaxation, and mindfulness.",
    image: image1
  },
  {name: 'HIIT Classes',
  description: "Involves short bursts of intense exercise followed by brief periods of rest or lower-intensity exercise. It is known for its efficiency in burning calories, improving cardiovascular health, and boosting metabolism in a shorter amount of time compared to traditional workouts.",
  image: image2
},
{name: 'CrossFit Classes',
description: "High-intensity fitness program that incorporates elements from various sports and exercises, including weightlifting, gymnastics, and cardio. It aims to improve overall fitness through constantly varied, functional movements performed at high intensity.",
image: image3
},
{name: 'Weight Training Classes',
description: "Involves using resistance, such as free weights, machines, or body weight, to build strength, muscle mass, and endurance. It typically includes exercises targeting specific muscle groups and can be customized for various fitness goals.",
image: image4
},
{name: 'Fitness Classes',
description: "A fun and dynamic way to exercise while learning different dance styles such as hip-hop, salsa, ballet, or contemporary. They improve cardiovascular health, coordination, flexibility, and overall mood.",
image: image5
},
{name: 'Dance Classes',
description: "A fun and dynamic way to exercise while learning different dance styles such as hip-hop, salsa, ballet, or contemporary. They improve cardiovascular health, coordination, flexibility, and overall mood.",
image: image6
}
]

function OurClasses({setSelectedPage}: Props) {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div className='mx-auto w-5/6' initial="hidden" whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
          <div className='md:w-3/5'>
            <HText>Our classes</HText>
            <p className='py-5'>Choose your inspirational workout from our wide range of classes and programs or book an individual training.</p>
          </div>
        </motion.div>
        <div className='mt-10 w-5/6 mx-auto'>
          <Swiper spaceBetween={300} loop={true}
   breakpoints={{
    640: {
      width: 640,
      slidesPerView: 1,
    },
    768: {
      width: 768,
      slidesPerView: 2,
    },
    1060: {
      width: 1060,
      slidesPerView: 3,
    },
  }} modules={[Pagination]} pagination={{clickable: true}}
    direction='horizontal' style={{paddingBottom: '50px'}}
    
   >
              {ourclasses.map((card: ClassType, index) => (
                <SwiperSlide key={index}>
                <Class key={`${card.name}-${index}`} name={card.name} description={card.description} image={card.image}/>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses