import { useState } from "react"
import emailjs from "emailjs-com"

export const Contact = () => {

    const [form, setFrom] = useState({name: "", email:"", message:""});

    const handleChange = e => {
        setFrom({...form, [e.target.name]: e.target.value});
    }

    const sendEmail = e => {
        e.preventDefault();

        emailjs.send(
            "service_8t5gyme",
            "template_fx9ubjj",
            form,
            "fJspK9QDy_yjVVwh3"
        )
        .then(() => {
            alert("Email sent successfully !");
            setFrom({name: "", email:"", message:""});
        })
        .catch(() => {
            alert("Sommething went wrong during sending.");
        })
    }

    return <div className="mt-30 flex flex-col pb-30">
        <div className="m-auto">
            <h1 className="text-[50px]">Contact me</h1>
        </div>
        <form onSubmit={sendEmail} className="m-auto flex flex-col md:w-[40%] gap-5 w-full">
            <label htmlFor="name" className="text-sm font-medium text-gray-500 mb-[-15px] pl-1">Your name/company</label>
            <input 
            type="text" 
            className="bg-[#050a30] border border-gray-500/50 h-10 p-2 rounded-sm" 
            name="name" 
            value={form.name}
            onChange={handleChange}
            required/>

            <label htmlFor="name" className="text-sm font-medium text-gray-500 mb-[-15px] pl-1" >Your email</label>
            <input 
            type="text" 
            className="bg-[#050a30] border border-gray-500/50 h-10 p-2 rounded-sm" 
            name="email" 
            value={form.email}
            onChange={handleChange}
            required/>
            
            <label htmlFor="name" className="text-sm font-medium text-gray-500 mb-[-15px] pl-1">Message</label>
            <textarea 
            type="text" 
            className="bg-[#050a30] border border-gray-500/50  px-2 h-35  pt-2 rounded-sm text-left w-full resize-none align-top" 
            name="message" 
            wrap="soft"
            value={form.message}
            onChange={handleChange}
            required
            />
            
            <button type="submit" className="mt-5 p-3 bg-[#050a30] border border-gray-500/50 w-[100%] m-auto cursor-pointer hover:opacity-70">Submit</button>
        </form>
        
    </div>
}