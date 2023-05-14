"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import {  FiMapPin } from 'react-icons/fi';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Despre = () => {

  
const semnatura = `
⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣦⣀⠰⢤⡈⠻⣕⠄⠀⠀⠀⠀
⣿⡅⠈⢙⠳⢦⣄⡀⠀⠀⠀⠀⢀⣠⣴⠶⠛⠛⠉⠉⠉⠋⠙⠒⠾⣿⣄⠀⠀⠀
⠘⢿⡄⠀⠀⠀⠈⠙⠶⣄⣰⡶⠛⠉⠀⠀⠀⠀⠀⢀⣠⣤⣤⣄⡀⠀⠉⠳⣤⡀
⠀⠈⠻⣦⣀⠘⠝⡲⢦⡼⠋⠀⠀⠀⠀⠀⠀⠁⠀⣾⣏⣉⣿⣿⣿⡶⣉⠶⣐⠻
⠀⠀⠀⠈⠙⠛⢶⣶⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⢿⡿⠿⠟⠁⢈⣂⠥⠤
⠀⠀⠀⠀⠀⢠⣿⠃⣴⣾⣿⣷⣦⠀⠀⠀⠀⣀⣘⡷⠀⠀⠀⠀⣀⣼⠏⠀⠀⠀
⠀⠀⠀⠀⠀⣸⡇⢸⣏⣀⣿⣿⡿⠃⠀⠻⠖⠋⠉⠀⣀⣤⣶⡿⣟⣯⠀⣀⣀⣀
⠀⠀⠀⠀⠀⣾⣁⠼⢿⣿⠿⠋⠀⠀⠀⢀⣠⣴⣾⢿⣟⡿⣽⣻⣽⠋⠉⠁⣈⣿
⠀⠀⠀⠀⠸⡿⢤⣫⠶⠃⠀⢀⣠⣴⣾⣿⢿⡽⣾⣿⡞⠛⢷⣿⡇⠀⢸⣿⣻⢾
⠀⢀⣠⣤⣼⣇⠀⢀⣠⣴⣾⢿⣻⢯⣷⣯⣿⣽⠃⠠⣷⡀⠀⢻⣇⠀⠘⣷⢯⣿
⣾⠋⠁⠀⠀⠉⢾⣿⢿⣽⠾⠟⠻⢯⣧⡀⠉⠻⠀⠀⣿⣷⡄⠀⠹⣆⡀⠈⠉⠁
⣿⠀⠀⣀⣤⡶⠟⠋⢻⡏⠀⣠⣀⠀⠙⢿⣶⣄⠀⠀⠙⠻⢿⣆⠀⠘⣿⡶⣴⢶
⡿⣿⡿⠛⠉⠀⠀⣤⣿⡆⠀⠹⣿⣷⣆⠀⢹⣿⠀⢐⣦⣄⣀⣼⣷⣤⣾⢿⣽⣻
⣿⣻⣇⣀⣴⣦⠀⠈⢿⣷⡄⠀⠙⢿⣿⡄⠀⣿⡄⢈⣿⢿⣟⣯⣿⣽⠾⠛⠋⠅
⣿⣯⣟⡿⣯⣟⣷⡀⠀⠻⣿⣶⣤⣀⣀⣀⣴⣿⢿⣿⣿⠿⢟⠋⠁⠀⠀⠀⡀⠀
               

Github: https://github.com/vAndrewKarma
`

console.log(semnatura)
    return (
        <section>
        <div>
        <div className="mx-auto px-4 pt-24 lg:justify-between flex">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8">
              <motion.h2
                className="text-4xl lg:text-8xl font-bold w-full lg:w-[40rem] leading-[90%] tracking-[2px] font-sans mb-4 cursor-pointer"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 120 }}
              >
                Taverna Primaverii
              </motion.h2>
              <Link href="https://www.google.com/maps/place/Primaverii+1+7,+Geam%C4%83na+117141/@44.8345737,24.8854523,19z/data=!3m1!4b1!4m6!3m5!1s0x40b2bcc33b3d5ba5:0xf11195c7c55c7f08!8m2!3d44.8345728!4d24.8860974!16s%2Fg%2F11tfdd2dly">
              <motion.p
                className="lg:text-4xl  mr-12 text-xl font-bold w-full lg:w-[40rem] leading-[90%] tracking-[2px] font-sans ml-2 text-green-600 cursor-pointer mb-2"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{scale:0.80, transition:{duration:0.5}}}
                transition={{ type: "spring", stiffness: 60, duration: 1, delay: 1.2}}
              >
                <span className="flex items-center"> <FiMapPin size={25} className="mr-2" /> Strada Primaverii 1 </span>
              
              </motion.p>

              
              </Link>
              
            </div>
            
          </div>
      
          <motion.div className="sm:flex flex-col flex"
          
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, duration: 1, delay: 1.2 }}

          >
          <Image
  className="rounded-lg shadow-lg "
  src="https://media.discordapp.net/attachments/546051347351601182/1106979026402291802/photo.jpg?width=901&height=676"
  alt={""}
width="800"
height="900"
/>
            </motion.div>
        </div>
        </div>
     


</section>


      


      
      
      );
  

}

export default Despre