import React from 'react'

const Header = () => {
  return (
    <div className="bg-red-300">
      <div className="max-w-[1240px] py-[150px] border flex justify-between border-black mx-auto">
        <div className="text-3xl font-bold gap-20">
          Shyam Baba
        </div>
        
        <ul className=" md:flex text-while gap-10">
          <li>
           Home
          </li>
          <li>
          Company
          </li>
          <li>
           Resources
          </li>
          <li>
           About
          </li>
          <li>
           Contact
          </li>
        </ul>
      
      
    </div>
    
    </div> 
  )
}

export default Header