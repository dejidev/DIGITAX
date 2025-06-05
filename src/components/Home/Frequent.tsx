import React, {useState} from "react";
type AccordionItem = {
    id: number;
    question: string;
    answer: string;
};

const accordionData: AccordionItem[] = [
    {
        id: 1,
        question: "What services does DigitX offer?",
        answer: "We offer web development, digital strategy, and marketing services.",
    },
    {
        id: 2,
        question: "How long does a typical project take?",
        answer: "Timelines vary, but most projects take 4–6 weeks depending on scope.",
    },
    {
        id: 3,
        question: "Do you provide post-launch support?",
        answer: "Yes, we provide maintenance, updates, and technical support.",
    },
    {
        id: 4,
        question: "Can you help with branding?",
        answer: "Yes, we assist with logos, brand identity, and visual design.",
    },
    {
        id: 5,
        question: "What services does DigitX offer?",
        answer: "We offer web development, digital strategy, and marketing services.",
    },
    {
        id: 6,
        question: "How long does a typical project take?",
        answer: "Timelines vary, but most projects take 4–6 weeks depending on scope.",
    },
    {
        id: 7,
        question: "Do you provide post-launch support?",
        answer: "Yes, we provide maintenance, updates, and technical support.",
    },
    {
        id: 8,
        question: "Can you help with branding?",
        answer: "Yes, we assist with logos, brand identity, and visual design.",
    },
];


const Frequent: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenIndex(prev => (prev === id ? null : id));
    };
    return (
        < section className="mt-16 md:mt-32 " >
            <h1 className="font-semibold text-[34px] md:text-[58px] text-white sora-bold text-center">
                <span className="text-[#666666]">Frequently </span>Asked Questions
            </h1>
            <p className="text-[#808080] my-6 max-w-4xl mx-auto text-[14px] md:text-[18px] text-center">
                Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
            </p>





            <div className="max-w-xs md:max-w-xl flex items-center mx-auto mt-8  bg-[#1A1A1A] border border-[#262626] rounded-full px-4 py-2 ">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 text-[#666666] mr-2"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent text-[#666666] placeholder-[#666666] outline-none w-full"
                />
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 md:py-16">
                {accordionData.map(({ id, question, answer }) => {
                    const isOpen = openIndex === id;
                    return (
                        <div
                            key={id}
                            className="  p-4 text-white  "
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggle(id)}
                            >
                                <h3 className="text-white text-base md:text-lg">{question}</h3>
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#262626] text-xl font-bold">
                                    {isOpen ? "−" : "+"}
                                </div>
                            </div>
                            {isOpen && (
                                <p className="text-[#8C8C8C] mt-3 text-sm md:text-base">{answer}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section >

    )
}

export default Frequent;
