import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";

export const headerData = {
    nav: [
        {
            key: 'dictionary',
            label: 'Dictionary',
            ref: '/',
            icon: IoBookOutline
        },
    ],
    social: [
        {
            key: 'github',
            url: 'https://github.com/humtej1204',
            icon: FaGithub
        },
        {
            key: 'linkedin',
            url: 'https://www.linkedin.com/in/humberto-g-tejada-espinoza-b0155a138/',
            icon: FaLinkedin
        },
        {
            key: 'whatsapp',
            url: 'https://api.whatsapp.com/send?phone=940683605',
            icon: IoLogoWhatsapp
        },
    ]
}