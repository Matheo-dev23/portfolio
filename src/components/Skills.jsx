import { Card } from "./Card"
import reactSvg from "../assets/react.svg";
import javaSvg from "../assets/java.svg";
import jsSvg from "../assets/javascript-logo-svgrepo-com.svg";
import phpSvg from "../assets/php-svgrepo-com.svg";
import postgresSvg from "../assets/postgresql-svgrepo-com.svg";
import pythonSvg from "../assets/python-svgrepo-com.svg";
import cSvg from "../assets/c-1.svg";
import nodeSvg from "../assets/nodejs-icon.svg"

export const Skills = () => {
    return <div className="flex flex-col item-center justify-center mt-20">
            <h1 className="text-[50px] ml-4 pl-1">How i can help you ?</h1>
            <span className="text-[20px] ml-4 pl-1">i can build applicatons and work across the full stack, from front-end interfaces to back-end logic.</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 mt-5">
        <Card title="React" 
        description="it's my favorite front-end library and I can build whatever you want with it."
        img={[reactSvg]}
        className="img:animate-spin duration-1000"
        spin={true}
        />
        <Card title="Java" 
        description="I enjoy working with Java and exploring its object-oriented concepts to build clean and structured code."
        img={[javaSvg]}
        />
        <Card title="Javascript is my favorite language" img={[jsSvg]} className="text-[25px]"/>
        <Card title="Backend NodeJS/Express and others programming languages" 
        description="I can create efficient back-end applications using Node.js and/or Express, including designing RESTful APIs, handling server-side logic, and managing database interactions. Also proficient in PHP, Python, and C." 
        className="md:col-span-2"
        img={[phpSvg, pythonSvg, cSvg]}
        litleImg={nodeSvg}
        />
        <Card title={`SELECT skills FROM db where firstname = “matheo”;`} img={[postgresSvg]}/>
    </div>
    </div> 
}