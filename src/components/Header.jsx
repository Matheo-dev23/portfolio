import linkedingIcon from "../assets/logo-linkedin.png"
import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.png"

export const Header = () => {
    return <nav className="mb-20 flex item-center justify-between py-9">
        <h1 className="text-xl ">Matheo.</h1>
        <div className="flex item-center justify-between gap-10 py-5">
            <a href="https://www.linkedin.com/in/math%C3%A9o-paszkowski-69b7142a1/"><img src={linkedingIcon} alt="linkedin" width="20px"/></a>
            <a href="https://github.com/Matheo-dev23"><img src={githubIcon} alt="github" width="20px"/></a>
            <a href="https://www.instagram.com/matheo.psz/"><img src={instagramIcon} alt="instagram" width="20px"/></a>
        </div>
    </nav>
}