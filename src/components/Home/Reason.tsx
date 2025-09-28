import icon1 from "../../assets/random-icon/Icon1.png";
import icon2 from "../../assets/random-icon/Icon2.png";
import icon3 from "../../assets/random-icon/Icon3.png";
import icon4 from "../../assets/random-icon/Icon4.png";
import icon5 from "../../assets/random-icon/Icon5.png";
import icon6 from "../../assets/random-icon/Icon.png";
import LearnMore from "../LearnMore";







export interface CardItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}



const cardItems: CardItem[] = [
    {
        id: 1,
        icon: icon6,
        title: "Expertise That Drives Results",
        description: "Our team of seasoned professionals brings years of experience and expertise to the table.",
    },
    {
        id: 2,
        icon: icon1,
        title: "Tailored Business Solutions ",
        description: "We understand that every business is unique. That's why our solutions are customized.",
    },
    {
        id: 3,
        icon: icon2,
        title: "Cutting-Edge Web Design",
        description: "Leave a lasting impression on your audience with our top-notch web design services.",
    },
    {
        id: 4,
        icon: icon3,
        title: "Mobile-First Approach",
        description: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website.",
    },
    {
        id: 5,
        icon: icon4,
        title: "Marketing Strategies",
        description: "Our data-driven marketing strategies allow us to target the right audience with precision.",
    },
    {
        id: 6,
        icon: icon5,
        title: "Search Engine Optimization",
        description: "(SEO) Mastery Boost your online visibility with our expert SEO techniques.",
    },
];


const Reason = () => {
  return (
    <div className="mt-16 md:mt-32 mx-4 md:mx-12">
          <section>
              <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold flex flex-col items-center justify-center text-center">
                  <p>Reasons to Choose Aerassky for</p>
                  <p className="text-[#666666]"> Your Digital Journey</p>
              </h1>
              <p className="text-[#808080] mt-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
                  Partnering with DigitX offers a multitude of advantages.
                  Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.
              </p>


              <div className="mt-8 md:mt-12 lg:mt-16 md:mx-8 border-y border-[#1F1F1F]">
                  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
                      {cardItems.map((card) => (
                          <div key={card.id} className="flex flex-col justify-center items-center text-center px-4 my-4 md:border-x border-[#1F1F1F] p-4">
                              <img src={card.icon} alt={card.title} className="mb-4" />
                              <h3 className="text-white text-[18px] md:text-[24px] mt-4">{card.title}</h3>
                              <p className="text-[#808080] mt-2 text-[14px] md:text-[18px]">
                                  {card.description}
                              </p>
                              <LearnMore />
                          </div>
                      ))}


                  </div>
              </div>
          </section>
    </div>
  )
}

export default Reason
