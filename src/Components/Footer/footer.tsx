"use client"
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import {motion} from 'framer-motion'
import Link from "next/link"


const Footer = () => {
  return      <footer className="hidden sm:flex   text-2xl fixed lg:text-4xl align-bottom text-green-600 font-bold leading-[90%] tracking-[2px] font-sans py-4 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 flex flex-col items-center justify-center   bottom-0 w-full">

  

<div className="flex items-center gap-10">

<Link href="https://www.instagram.com/mariopsg12/">
  <motion.span className="text-green-800 mt-5" 
  initial={{ x: -200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  whileHover={{scale:0.80, transition:{duration:0.2}}}
  transition={{ delay: 1.5, duration: 2, type: "spring", stiffness: 120 }}  >  
    <AiOutlineInstagram size={30} /> </motion.span>
    </Link>
    <Link href="https://twitter.com">
    <motion.span className="text-green-800 mt-5" 
  initial={{ x: -200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  whileHover={{scale:0.80, transition:{duration:0.2}}}
  transition={{ delay: 1.5, duration: 2, type: "spring", stiffness: 120 }}  >  
    <AiOutlineTwitter size={30} /></motion.span>
</Link>

<Link href="https://facebook.com">
     <motion.span className="text-green-800 mt-5" 
  initial={{ x: -200, opacity: 0,scale:1 }}
  animate={{ x: 0, opacity: 1 }}
  whileHover={{scale:1.5, transition:{duration:0.2}}}
  transition={{ delay: 1.5, duration: 2, type: "spring", stiffness: 120 }}  >  
   <AiOutlineFacebook size={30} />
   </motion.span>
   </Link>
   </div>
  
  </footer>
}

export default Footer