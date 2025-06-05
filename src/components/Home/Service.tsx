
import abstractBg from "../../assets/AbstractDesign.png";
import ouricon1 from "../../assets/ourservice/Icon1.png";
import ouricon2 from "../../assets/ourservice/Icon2.png";
import ouricon3 from "../../assets/ourservice/Icon3.png";
import ouricon4 from "../../assets/ourservice/Icon4.png";
import LearnMore from '../LearnMore';

export interface CardItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}



const ourServiceItems: CardItem[] = [
    {
        id: 1,
        icon: ouricon1,
        title: "Web Development",
        description: "Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success."
    },
    {
        id: 2,
        icon: ouricon2,
        title: "Mobile App Development",
        description: "Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.",
    },
    {
        id: 3,
        icon: ouricon3,
        title: "Web Design",
        description: "Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience that keeps visitors coming back for more. Let us transform your online presence into an immersive journey that showcases your brand's true essence.",
    },
    {
        id: 4,
        icon: ouricon4,
        title: "Digital Marketing",
        description: "Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.",
    }
  ];
const Service = () => {
  return (
        < section className = "mt-16 md:mt-32 " >
        <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
          <span className="text-[#666666]">Our </span> Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {ourServiceItems.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="relative bg-cover bg-center rounded-xl shadow-lg p-6 text-white"
              style={{
                backgroundImage: `url(${abstractBg})`,
              }}
            >
              {/* Foreground content */}
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <img src={icon} alt={`ouricon-${id}`} className=" " />

                <h3 className="text-[18px] md:text-[24px] font-semibold">
                  {title}
                </h3>

                <p className="text-[#808080] text-[14px] md:text-[16px] max-w-md">
                  {description}
                </p>

                <LearnMore />
              </div>
            </div>
          ))}
        </div>
      </section >



  )
}

export default Service
