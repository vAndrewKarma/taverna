"use client"
import Image from "next/image"

import {motion} from 'framer-motion'
import Link from "next/link"
import {AiOutlineMenu,AiOutlineClose,AiOutlineTwitter,AiOutlineFacebook,AiOutlineInstagram} from 'react-icons/ai'
import { useState } from "react"
const Navbar = () => {
        const [menuOpen,setmenuOpen]=useState(false)
        const handleNav =()=>{ setmenuOpen(!menuOpen) }

  return <motion.nav className="font-sans fixed w-full  shadow-xl h-20 bg-cream"   animate={{ y: 0, transition: { duration: 1 } }}  initial={{ y: -100 }}>
  <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 ">
  <div className="flex items-center">  

  <Image
              src='https://media.discordapp.net/attachments/546051347351601182/1106977555476660304/Logo.png'
              width="35"
              height="75"
              className="cursor-pointer"
              priority alt={"Taverna Primaverii"}  /> 
              <motion.h1 whileHover={{scale:1.05,transition:{duration:1},color:["rgb(0,0,0)","rgb(8,100,13)"]}}  className="ml-3 cursor-pointer  text-2xl text-color w-auto h-auto">
             
              
               Taverna <span className="text-color-secondary rewrite">Primaverii</span>
              
              </motion.h1>
              </div>

   <div className="hidden sm:flex"> 

    <ul className="hidden sm:flex">
<Link href="#despre">
    <motion.li whileHover={{scale:0.85,transition:{duration:1},color:["rgb(0,0,0)","rgb(8,100,13)"]}} className="ml-10 uppercase hover:border-b text-xl">Despre noi</motion.li>
</Link>
<Link href="#inchirieri">
    <motion.li whileHover={{scale:0.85,transition:{duration:1},color:["rgb(0,0,0)","rgb(8,100,13)"]}} className="ml-10 uppercase hover:border-b text-xl">Inchirieri</motion.li>
</Link>

<Link href="#contact">
    <motion.li whileHover={{scale:0.85,transition:{duration:1},color:["rgb(0,0,0)","rgb(8,100,13)"]}} className="ml-10 mr-5 uppercase hover:border-b text-xl">Contact</motion.li>
</Link>
    </ul>


   </div>
<div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
    <AiOutlineMenu size={25}/>
</div>
  </div>
  <div className={
    menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
  }>
<div className="flex w-full items-center justify-end">
<div onClick={handleNav} className="cursor-pointer">
    <AiOutlineClose size={25}></AiOutlineClose>
</div>
</div>
<div className="flex-col py-10">
  
    <ul>
        <li className="py-4 text-xl">Meniu cu optiuni</li>
<Link href="#despre">
    <li onClick={()=>setmenuOpen(false)} className="font-bold py-10 cursor-pointer text-xl uppercase "> - Despre</li>
</Link>
<Link href="#inchirieri">
    <li onClick={()=>setmenuOpen(false)} className="py-10 cursor-pointer text-xl uppercase font-bold ">- Inchiriere</li>
</Link>
<Link href="#contact">
    <li onClick={()=>setmenuOpen(false)} className="py-10 cursor-pointer text-xl uppercase font-bold ">- Contact</li>
</Link>
    </ul>

</div>
<div className="flex flex-row justify-around pt-10 items-center">
   <Link href="https://facebook.com">
    <AiOutlineFacebook size={30} className="cursor-pointer"/>
    </Link>
    <Link href="https://www.instagram.com/mariopsg12/">
    <AiOutlineInstagram size={30} className="cursor-pointer"/>
    </Link>
    <Link href="https://twitter.com">
    <AiOutlineTwitter size={30} className="cursor-pointer"/>
</Link>
</div>
  </div>
</motion.nav>
}

export default Navbar