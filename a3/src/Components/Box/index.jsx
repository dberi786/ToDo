import React, { useState } from 'react'
import {BsTrashFill} from 'react-icons/bs';

export default function Box() {
    
   
  return (
    
      <div className="cursor-pointer w-full border-b p-3 flex justify-between items-center">
        <div>
            <span className="pr-2 text-[14px] text-slate-400">
               10:30
                
            </span>
            <span className= "text-[20px]">
               Items
            </span>
        </div>
        
        <div>
      < BsTrashFill className="text-[#e74c3c]"/>
        </div>
        </div>
    
     
  )
}
