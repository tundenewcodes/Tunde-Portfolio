

import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"



const ActionButton = ({children, setSelectedPage}) => {
  return (
   <AnchorLink  className="cv-btn"  onClick={()=>setSelectedPage} >
    {children}
   </AnchorLink>
  )
}

export default ActionButton