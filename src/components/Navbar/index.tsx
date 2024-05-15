import Logo from '@/assets/logo.svg'
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionBtn from "@/shared/ActionBtn"
import { SelectedPage } from "@/shared/types"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import { useState } from "react"
import Link from "./Link"
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = 'flex items-center justify-between'
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'
  return (
    <nav>
      <div className={`${flexBetween} ${navbarBackground} fiex top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-10`}>
            <img src={Logo} alt="logo"className="max-w-40"/>
            {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full gap-8`}>
              <div  className={`${flexBetween} w-full gap-3 text-base`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Benefits"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact us"  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>
              <div className={`flex items-center justify-end w-full gap-8`}>
                <p>Sign in</p>
                <ActionBtn setSelectedPage={setSelectedPage}>Become a member</ActionBtn>
              </div>
            </div>) : (<button className="rounded-full bg-secondary-500 p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}><Bars3Icon className="w-6 h-6 text-white"/></button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (<div className="fixed right-0 bottom-0 h-full w-[300px] z-40 bg-primary-100 drop-shadow-xl">
        <div className="flex justify-end p-12">
          <button onClick={()=>setIsMenuToggled(!isMenuToggled)}><XMarkIcon className="h-6 w-6 text-gray-400"/></button>
        </div>
        <div  className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Benefits"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes"  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>
      </div>)}
    </nav>
  )
}

export default Navbar