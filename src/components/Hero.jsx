import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import meImg from "../assets/me.png"
import { FaChevronDown } from "react-icons/fa";


export const Hero = () => {
    return <div className="max-w-[100%] flex item-center justifiy-between gap-85 mt-30">
    <div className="flex flex-col max-w-[50%] p-4">
        <h1 className="text-[52px] font bold mt-17">{' '}
        <Typewriter
            words={["Hi, I'm Mathéo"]}
            loop:true
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
        </h1>
        <span className="text-[#DADADA] text-[28px] mt-[-10px] font-bold">{' '} 
            <Typewriter
            words={["a student developer"]}
            loop:true
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
        />
        </span>
        <p className="mt-6 text-[#DADADA] text-[17px]">
        Student developer 🎓, and future software engineer.  I’m passionate <br />
        about creating projects that blend creativity and code to bring <br />
        ideas to life.
        </p>
    </div>
    <div className="flex justify-center md:justify-end max-h-[400px]">
        <motion.img 
        src={meImg} 
        alt="me" 
        className="w-[200px] md:w-[300px] object-cover" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}/>
    </div>
    </div>
}