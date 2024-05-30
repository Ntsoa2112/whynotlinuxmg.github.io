import React from 'react'
import Foire from "../assets/images/foire.png"
import Accordion from '../components/AccordionItem'
const Questions = () => {
  return (
    <div className='mt-20 mb-9'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-[32px] md:text-[58px] text-white font-kontes uppercase '>Foire aux <span className='text-yellow'>Questions</span></h2>
      </div>
      <div className='flex items-start justify-between'>
          <img className='hidden md:flex md:w-[500px]' src={Foire} alt="" />
            <div>
              <Accordion/>
            </div>
      </div>
    </div>
  )
}

export default Questions