import { motion } from "framer-motion"

export const ProjectCard = ({imgProject, imgTechno, title, description, className=''}) => {
    return <motion.div 
        className={"bg-[#050a30] border border-gray-500/50 rounded-xl text-[20px] w-[450px]"}
        initial={{ opacity: 0, x: -100 }}   
        whileInView={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: -100 }}     
        viewport={{ once: false, amount: 0.5 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <div className="flex item-center justify-center h-[220px] shadow-[0_4px_10px_rgba(0,0,0,0.3)]  ">
            <img src={imgProject} alt="imgProject" className="object-cover w-[100%] rounded-t-lg"/>
        </div>
        <div>
        <div className="mt-2 flex item-center gap-4 p-3">
            <h1 className="text-center">{title}</h1> 
            <img src={imgTechno} alt="imgTechno" className={"w-[23px] " + className}/>
        </div>
        <p className="text-[13px] mt- pl-3 pb-5">{description}</p>
        </div>
    </motion.div>
}