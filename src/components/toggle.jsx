import { useState } from "react"
import ExpandPlus from '../assets/images/icon-plus.svg'
import ExpandMinus from '../assets/images/icon-minus.svg'

function Toggle({triggerText, contentText}) {
    const [active, setActive] = useState(false)

    return (
        <>
         <div className='toggle text-darkPurple items-center pt-6 cursor-pointer' onClick={() => setActive(!active)}>
            <div className='toggle-text text-darkPurple font-semibold'>{triggerText}</div>
            <img src={active ? ExpandMinus : ExpandPlus} alt='expandBtn' />
         </div>
         <div className={`accordion pb-6 ${active ? 'accordion--active' : '' }`}>
            <div className='accordion__content'>{contentText}</div>       
         </div>
        </>
    )
  }
  
  export default Toggle