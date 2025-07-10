import { AnimatePresence, motion } from "framer-motion";

export const Card = ({img = [], title, description, className='', litleImg = "", spin = false}) => {

    const images = img.map((image, index) => {
        
        return <img src={image} alt="" width="170px" key={index} className={`w-[170px] ${spin ? "animate-spin duration-1000" : ""}`}/>
    });

    return <motion.div 
        className={`${className}` + " bg-[#050a30] p-5 border border-gray-500/50 rounded-xl text-[20px]"}
        initial={{ opacity: 0, x: -100 }}   
        whileInView={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: -100 }}     
        viewport={{ once: false, amount: 0.5 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="flex item-center justify-center gap-8 h-[200px]">
                {images}
            </div>
            <div className="mt-4">
                <img src={litleImg == "" ? img[0] : litleImg} alt="" width="25px"/>
                <h1 className="mt-2">{title}</h1>
                <p className="text-[#DADADA] text-[14px] mt-1">{description}</p>
            </div>
    </motion.div>
    
}
