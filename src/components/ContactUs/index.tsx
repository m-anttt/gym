import ContactUsPageGraphic from '@/assets/contact.jpg';
import { EMAIL_KEY } from '@/config';
import HText from '@/shared/Htext';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { SelectedPage } from '../../shared/types';
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const inputStyles = 'mt-5 w-full rounded-lg bg-primary-100 px-5 py-3 placeholder-white text-primary-500 placeholder-primary-500 outline-none' 

function ContactUs({setSelectedPage}: Props) {
  const {register, trigger, formState: {errors}} = useForm()
  const handleSubmit = async (e: any) =>{
    const isValid = await trigger()
    if (!isValid){
      e.preventDefault()
    }
  }

  return (
    <section id='contactus' className='mx-auto w-5/6 py-24'>
      <motion.div onViewportEnter={() =>setSelectedPage(SelectedPage.ContactUs)}>
      <motion.div className='md:w-3/5' initial="hidden" whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
      <HText><span className='text-primary-500'>Join now</span> to get in shape</HText>
      </motion.div>

      <div className='mt-10 justify-between gap-8 md:flex'>
        <motion.div className='mt-10 basis-3/5 md:mt-0'  initial="hidden" whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 1}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
        <form method="POST" target='_blank' onSubmit={handleSubmit} action={EMAIL_KEY}>
          <input type="text" className={inputStyles} placeholder='Name' {...register("name", {
            required: true,
            maxLength: 50,
          })}/>
          {errors.name && (
            <p className='mt-1 text-primary-500'>{errors.name.type === "required" && 'This field is required'} {errors.name.type === "maxLength" && 'Max length is 100 characters'}</p>
          )}
           <input type="text" className={inputStyles} placeholder='Email' {...register("email", {
            required: true,
            maxLength: 100,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}/>
          {errors.email && (
            <p className='mt-1 text-primary-500'>{errors.email.type === "required" && 'This field is required'} {errors.email.type === "maxLength" && 'Max length is 100 characters'} {errors.email.type === "pattern" && 'Enter correct email address'}</p>
          )}
           <textarea rows={4} cols={50} className={inputStyles} placeholder='Message' {...register("message", {
            required: true,
            maxLength: 500,
          })}/>
          {errors.message && (
            <p className='mt-1 text-primary-500'>{errors.message.type === "required" && 'This field is required'} {errors.message.type === "maxLength" && 'Max length is 100 characters'}</p>
          )}
          <button type='submit' className='mt-5 rounded-lg hover:bg-secondary-500 px-20 py-3 transition duration-500 text-white bg-primary-500 uppercase'>Submit</button>
        </form>
        </motion.div>
        <motion.div className='mt-16 basis-2/5 md:mt-0 '  initial="hidden" whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 1}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
            <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className='rounded-lg'/>
        </motion.div>
      </div>
      </motion.div>
    </section>
  )
}

export default ContactUs