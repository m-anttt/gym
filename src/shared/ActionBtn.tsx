import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
  children: React.ReactNode,
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionBtn = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink className="rounded-md bg-primary-500 px-10 py-2 hover:bg-primary-300 text-white transition-all duration-500" onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>{children}</AnchorLink>
  )
}

export default ActionBtn