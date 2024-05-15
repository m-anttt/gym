import Logo from '@/assets/logo.svg'

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='md:flex justify-between  gap-20 mx-auto w-5/6'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt="logo" width={256}/>
          <p className='my-5'>Join our community at FitForm and start your fitness journey today. With state-of-the-art facilities, expert trainers, and a range of classes to suit all levels, you'll be closer to achieving your health and wellness goals than ever before.</p>
          <p>All rights reserved. 2024</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Membership</h4>
          <a href='#!' className='mt-5 block'>Join Us</a>
          <a href='#!' className='mt-5 block'>Membership Benefits</a>
          <a href='#!' className='mt-5 block'>Pricing Plans</a>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>About us</h4>
          <a href='#!' className='mt-5 block'>Our professionals</a>
          <a href='#!' className='mt-5 block'>Facilities</a>
          <a href='#!' className='mt-5 block'>Gallery</a>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer