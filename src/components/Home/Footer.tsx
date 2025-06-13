import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

import logo from "../../assets/Logo.png";

const footerItems = [
    { title: "Home", link: "/" },
    { title: "Service", link: "/services" },
    { title: "Project", link: "/projects" },
    { title: "About Us", link: "/about" },
    { title: "Career", link: "/career" },
    { title: "Blog", link: "/blog" },
  ];

const Footer = () => {
    return (
        <div className="mt-24 md:mt-48 flex items-center justify-between mx-6">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 md:justify-end">
                <p className="text-white font-light text-sm ">Follow Us On Social Media</p>
                <div className="flex gap-4 items-center">

                    <div className="bg-gradient-to-b from-[#292929] to-black p-4 w-fit text-white text-xl rounded-full ">
                        <FaLinkedin />
                    </div>
                    <div className="bg-gradient-to-b from-[#292929] to-black p-4 w-fit text-white text-xl rounded-full ">
                        <FaSquareInstagram />
                    </div>
                    <div className="bg-gradient-to-b from-[#292929] to-black p-4 w-fit text-white text-xl rounded-full ">
                        <FaTwitter />
                    </div>
                </div>

            </div>



            <footer className="bg-[#1A1A1A] text-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center md:text-left">
                        {footerItems.map((item, index) => (
                            <div key={index}>
                                <a
                                    href={item.link}
                                    className="text-base font-medium hover:underline"
                                >
                                    {item.title}
                                </a>
                                <p className="text-sm text-[#8C8C8C] mt-1">Explore {item.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center text-sm text-[#666666]">
                        &copy; {new Date().getFullYear()} DigitX. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
