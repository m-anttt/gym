import { useEffect, useState } from 'react'
import NavBar from "@/components/Navbar"
import Home from '@/components/Home'
import Benefits from '@/components/Benefits'
import { SelectedPage } from './shared/types'
import OurClasses from '@/components/OurClasses'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination' 
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.screenY !== 0){
        setIsTopOfPage(false)
      }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className='app bg-gray-20' >
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
