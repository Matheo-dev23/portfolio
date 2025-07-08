import { Typewriter } from "react-simple-typewriter"
import meImg from "../assets/me.png"

export const Hero = () => {
    return <div className="max-w-[100%] flex item-center justifiy-between gap-85">
    <div className="flex flex-col max-w-[50%]">
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
    <div className="flex justify-center md:justify-end">
        <img src={meImg} alt="me" className="w-[200px] md:w-[300px] object-cover fade-in"/>
    </div>
    </div>
}