import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


interface NavLinkItem  {
    id: number;
    name: string;
    path: string;
}

interface ContactItem  {
    id: number;
    name: string;
    description: string;
}

export interface SocialItem  {
    id: number;
    name: string;
    icon: React.ReactNode;
    url: string;
}

interface DataLinksType  {
  navLinks: NavLinkItem[];
  links: NavLinkItem[];
  support: NavLinkItem[];
  contactUs: ContactItem[];
  socialProviders: SocialItem[];
};
export const DataLinks:DataLinksType = {

    "navLinks": [
        { id: 1, name: 'Home', path: 'home' },
        { id: 2, name: 'Features', path: 'features' },
        { id: 3, name: 'About Us', path: 'about-us' },
        { id: 4, name: 'Contact Us', path: 'contact-us' }
    ],
    "links": [
        { id: 1, name: 'Pricing', path: 'pricing' },
        { id: 2, name: 'About', path: 'about-us' },
        { id: 3, name: 'Contact Us', path: 'contact-us' },
        { id: 4, name: 'Find an agent', path: 'find-agent' }
    ],
    "support": [
        { id: 1, name: 'FAQ', path: 'faq' },
        { id: 2, name: 'Features', path: 'features' },
        { id: 3, name: 'Support Centre', path: 'support-centre' }
    ],
    "contactUs": [
        { id: 1, name: 'address', description: '52 Redcliffe Way street wooler, United Kingdom.' },
        { id: 2, name: 'Email', description: 'drh@gmail.com' },
        { id: 3, name: 'Phone', description: '+44 7769734465' }
    ],
    "socialProviders": [
        { id: 1, name: 'Google', icon: <FcGoogle size={20} />, url: 'https://www.google.com' },
        { id: 2, name: 'Facebook', icon: <FaFacebook size={20} color="blue" />, url: 'https://www.facebook.com' },
        { id: 3, name: 'Tiktok', icon: <FaTiktok size={20} />, url: 'https://www.tiktok.com' },
        { id: 4, name: 'FacebookSquare', icon: <FaFacebookSquare color="#0a4174" size="24px" />, url: 'https://www.facebook.com' },
        { id: 5, name: 'Instagram', icon: <FaInstagramSquare color="#0a4174" size="24px" />, url: 'https://www.instagram.com/' },
        { id: 6, name: 'Twitter', icon: <FaSquareXTwitter color="#0a4174" size="24px" />, url: 'https://x.com/' },
        { id: 7, name: 'Linkedin', icon: <FaLinkedin color="#0a4174" size="24px" />, url: 'https://www.linkedin.com/' }
    ]
};


