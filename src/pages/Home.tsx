// import img from "../assets/AbstractDesign.png";
import Footer from "../components/Home/Footer";
import Frequent from "../components/Home/Frequent";
import Patners from "../components/Home/Patners";

import Reason from "../components/Home/Reason";
import Service from "../components/Home/Service";
import Testimonial from "../components/Home/Testimonial";
import Work from "../components/Home/Work";


export interface CardItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}



const Home = () => {
  return (
    <div className="">
      {/* grid grid-cols-1 md:grid-cols-2 */}
      <section className=" mn-h-[100vh]  relative z-20 mx-4 md:mx-12 ">
        {/* Left: Image Background */}
        {/* <div
          className="absolute  h-[100vh] md:h-full md:w-1/2 bg-cover bg-center z-[-10]  "
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
        </div> */}

        <div className=" w-full min-h-[60vh] flex py-24 items-center justify-center px-4 mt-8 md:mt-12  text-center ">
          <div className="mx-auto">
            <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold"> Digital Solutions <span className="text-[#666666]">That Drive Success</span></h1>
            <p className="text-[#808080] mt-6 max-w-4xl mx-auto text-[14px] md:text-[18px]">At DigitX, we believe in the transformative power of digital solutions.
              Our team of experts is dedicated to helping businesses like yours thrive
              in the fast-paced digital landscape. From captivating web design to data-driven
              marketing strategies, we are committed to delivering results that exceed expectations.
            </p>
            <div>
              <p className="text-white text-[14px] md:text-[20px] my-8">Unlock Your Digital Potential Today</p>
              <div className="my-4 flex items-center justify-center gap-4">
                <button className="btn text-black bg-white">Get Started</button>
                <button className="btn bg-[#262626] text-white">Free Consultation</button>
              </div>
            </div>
          </div>


        </div>
      </section>


      {/* Reason */}
      <Reason />


      {/* Our Service */}
      <Service />


      {/* Our Works */}
      <Work />


      <Testimonial />

      <Frequent />

      <Patners />

      <Footer />

    </div>

  )
}

export default Home
