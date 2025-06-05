
import ourwork1 from "../../assets/ourworks/icon1.png";
import ourwork2 from "../../assets/ourworks/icon2.png";
import ourwork3 from "../../assets/ourworks/icon3.png";
import ourwork4 from "../../assets/ourworks/icon4.png";

import contain1 from "../../assets/patner/Container1.png";
import contain2 from "../../assets/patner/Container2.png"
import contain3 from "../../assets/patner/Container3.png"
import contain4 from "../../assets/patner/Container4.png"
import contain5 from "../../assets/patner/Container5.png"
import contain6 from "../../assets/patner/Container6.png"



import abstractBg from "../../assets/AbstractDesign.png";

import Arrowbutton from '../Arrowbutton';

export interface CardItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}


const ourWorkItems: CardItem[] = [
    {
        id: 1,
        icon: contain1,
        title: "ABC Tech Solutions",
        description: "A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services.",
    },
    {
        id: 2,
        icon: contain2,
        title: "GreenEarth Eco Store",
        description: "ODigitX collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products."
    },
    {
        id: 3,
        icon: contain3,
        title: "HealthTech Innovations",
        description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    },
    {
        id: 4,
        icon: contain4,
        title: "GlobalTech Solutions",
        description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    },
    {
        id: 3,
        icon: contain5,
        title: "TechGuru Inc.",
        description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    },
    {
        id: 4,
        icon: contain6,
        title: "ArtScape Gallery",
        description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    }
];

const Patners = () => {
    return (
        <section className="mt-16 md:mt-32 ">
            <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
                <span className="text-[#666666]">Our </span>Partners and Clients
            </h1>
            <p className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
                We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                {ourWorkItems.map(({ id, icon, title, description }) => (
                    <div
                        key={id}
                        className="bg-gradient-to-b from-[#292929] to-black   bg-cover bg-center rounded-xl shadow-lg p-6 text-white"
                        style={{
                            backgroundImage: `url(${abstractBg})`,
                        }}
                    >
                        <div className="flex flex-col gap-4">
                            <div className=" w-fit">
                                <img src={icon} alt="ouricon" className="m-auto" />
                            </div>
                            <h3 className="text-[18px] md:text-[24px] font-semibold mt-8 text-center">
                                {title}
                            </h3>
                            <p className="text-[#808080] text-[14px] md:text-[16px] md:px-8">
                                {description}
                            </p>


                        </div>
                    </div>
                ))}
            </div>



            <div
                className="bg-gradient-to-b from-[#292929] to-black   bg-cover bg-center rounded-xl shadow-lg p-6 text-white mt-16"
                style={{
                    backgroundImage: `url(${abstractBg})`,
                }}
            >
                <div className="flex flex-col gap-4">
                    <h3 className="text-[18px] md:text-[24px] font-semibold mt-8 text-center">
                        Ready to Transform Your Digital Presence?
                    </h3>
                    <p className="text-[#808080] text-[14px] md:text-[16px] md:px-8">
                        Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.\
                    </p>

                    <div className="mt-8">
                        <p className="my-4">Unlock Your Digital Potential Today</p>
                        <div className="flex items-center justify-center gap-4">
                            <button className="btn bg-white text-black ">Get started</button>
                            <button className="btn bg-[#1A1A1A]">Free Consultation</button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Patners
