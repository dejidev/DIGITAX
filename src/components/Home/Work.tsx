
import ourwork1 from "../../assets/ourworks/icon1.png";
import ourwork2 from "../../assets/ourworks/icon2.png";
import ourwork3 from "../../assets/ourworks/icon3.png";
import ourwork4 from "../../assets/ourworks/icon4.png";
import abstractBg from "../../assets/AbstractDesign.png";

import Arrowbutton from '../Arrowbutton';

export interface CardItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface OurWork extends CardItem {
  date: string;
  category: string
}

const ourWorkItems: OurWork[] = [
  {
    id: 1,
    icon: ourwork1,
    title: "Mobile App Development",
    category: "Category: Web Development.",
    date: "January 2022",
    description: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
  },
  {
    id: 2,
    icon: ourwork2,
    title: "Mobile App for Enhanced Fitness",
    category: "Category: Mobile App Development.",
    date: "March 2022",
    description: "Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience."
  },
  {
    id: 3,
    icon: ourwork3,
    title: "Modern Corporate Website",
    category: "Category: Web Design.",
    date: "April 2022",
    description: "Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices. ",
  },
  {
    id: 4,
    icon: ourwork4,
    title: "Digital Marketing Success Story",
    category: "Category: Digital Marketing.",
    date: "May 2022",
    description: "Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads.",
  }
];


const Work = () => {
  return (

      <section className="mt-16 md:mt-32 ">
          {/* <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
              <span className="text-[#666666]"> </span>
          </h1>
          <p className="text-[#808080] mt-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
          </p> */}
          <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
              <span className="text-[#666666]">Our </span>Works
          </h1>
          <p className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
              Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
              {ourWorkItems.map(({ id, icon, title, description, category, date }) => (
                  <div
                      key={id}
                      className="relative bg-cover bg-center rounded-xl shadow-lg p-6 text-white"
                      style={{
                          backgroundImage: `url(${abstractBg})`,
                      }}
                  >
                      <div className="flex flex-col gap-4">
                          <div className="relative w-fit">
                              <img src={icon} alt="ouricon" className="block" />



                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 max-w-[90vw]">
                                  <Arrowbutton>
                                      <span className="whitespace-nowrap text-xs sm:text-sm md:text-base">
                                          View Project Details
                                      </span>
                                  </Arrowbutton>
                              </div>

                          </div>
                          <h3 className="text-[18px] md:text-[24px] font-semibold mt-8 text-center">
                              {title}
                          </h3>
                          <div className="md:flex  md:items-center md:justify-between text-[14px] gap-2 md:gap-0 font-light md:font-normal md:px-8">
                              <p>{category}</p>
                              <p>{date}</p>
                          </div>
                          <p className="text-[#808080] text-[14px] md:text-[16px] md:px-8">
                              {description}
                          </p>


                      </div>
                  </div>
              ))}
          </div>

          <div className="py-8 flex items-center justify-center">
              <Arrowbutton>View All Projects</Arrowbutton>
          </div>

      </section>
  )
}

export default Work
