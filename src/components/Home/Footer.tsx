import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

import logo from "../../assets/Logo.png";

const footerItems = [
    { title: "Home", link: "/", subtitle: ["Benefits", "Our Testimonials", "Partners"] },
    { title: "Service", link: "/services", subtitle: ["Consulting", "Sales", "Support"] },
    { title: "Project", link: "/projects", subtitle: ["Web Development", "App Development", "SEO"] },
    { title: "About Us", link: "/about", subtitle: ["Our Story", "Team", "Careers"] },
    { title: "Career", link: "/career", subtitle: ["Job Openings", "Internships", "Culture"] },
    { title: "Blog", link: "/blog", subtitle: ["Latest Posts", "Categories", "Archives"] },
];

const Footer = () => {
    return (
        <div>
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




            </div>
            <footer className=" text-white py-12 px-4 my-12">
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

                                <ul className="mt-2 space-y-1">
                                    {item.subtitle.map((subItem, subIndex) => (
                                        <li key={subIndex} className="text-sm text-[#8C8C8C] hover:text-white">
                                            <a href={`${item.link}#${subItem.toLowerCase().replace(/\s+/g, '-')}`}>
                                                {subItem}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                {/* <p className="text-sm text-[#8C8C8C] mt-1">Explore {item.title}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </footer>


            <div className="text-[#8C8C8C] text-xs md:text-sm py-6 px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 pb-16">

                <p className="text-center   md:text-base">
                    © {new Date().getFullYear()} Aerassky. All rights reserved.
                </p>
                <p>Version 1.0</p>
                <div className="flex items-center justify-center gap-2 md:gap-6">
                    <p>Privacy</p>
                    <p>Terms & Condition</p>
                    <p>Cookie and Policys</p>
                </div>
            </div>

            
        </div>

    )
}

export default Footer
