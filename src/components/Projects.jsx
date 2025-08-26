import { ProjectCard } from "./ProjectCard";
import javaSvg from "../assets/java.svg";
import aresImg from "../assets/ares.png";
import jsSvg from "../assets/javascript-logo-svgrepo-com.svg";
import starshipImg from "../assets/starship.png";
import todoImg from "../assets/todo.png";
import reactSvg from "../assets/react.svg";
import bitmapImg from "../assets/raymond-6.png";
import pythonSvg from "../assets/python-svgrepo-com.svg";

export const Projects = () => {
    return <div className="flex flex-col item-center justify-center">
        <div className="m-auto">
            <h1 className="text-[52px] font bold mt-17">Projects I've worked on </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 m-auto gap-15 mt-13 gap-y-8 md:w-[75%]">
            <ProjectCard title="Ares and Demeter" 
            description="Two games sharing a common board system: Ares (war and conquest), Demeter (farming and development)."
            imgTechno={javaSvg}
            imgProject={aresImg}
            className="mt-[-8px]"
            />
            <ProjectCard title="Starship 2D"
            description="Simple 2D spaceship shooting game with keyboard controls and scoring system."
            imgTechno={jsSvg}
            imgProject={starshipImg}
            />
            <ProjectCard title="TaskApp" 
            description="A React-based todo app that allows users to add, manage, and track their tasks efficiently"
            imgTechno={reactSvg}
            imgProject={todoImg}
            />
            <ProjectCard title="Image bitmap" 
            description="Image compression using recursive quad-tree color averaging to simplify and reduce visual data"
            imgTechno={pythonSvg}
            imgProject={bitmapImg}
            />
        </div>
    </div>
}