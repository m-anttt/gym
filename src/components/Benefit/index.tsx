import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
type Props = {
  icon: JSX.Element,
  title: string,
  description: string,
  setSelectedPage: (value: SelectedPage) => void;
}

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale: 1}
}

function Benefit({icon, title, description, setSelectedPage}: Props) {
  return (
    <motion.div variants={childVariant} className='mt-5 rounded-md border-2 border-gray-300 px-5 py-16 text-center'>
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full boder-2 border-gray-100 bg-primary-100'>{icon}</div>
      </div>
      <h4 className='font-bold'>{title}</h4>
      <p className='my-3'>{description}</p>
      <AnchorLink  className='text-sm font-bold text-primary-500 underline hover:text-primary-300 transition-all duration-500 ease-in-out' href={`${SelectedPage.ContactUs}`} onClick={() => setSelectedPage(SelectedPage.ContactUs)}>Learn more</AnchorLink>
    </motion.div>
  )
}

export default Benefit