import React from "react";

type ArrowProps = {
    children: React.ReactNode;
};

const Arrowbutton: React.FC<ArrowProps> = ({ children }) => {
    return (
        <button className="btn1 bg-black text-white tex border border-[#1F1F1F] px-[24px] py-[18px] mt-2 flex items-center gap-2 rounded-lg">
            {children}
            <span className="rounded-full px-2 py-1 text-white]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                </svg>
            </span>
        </button>
    );
};

export default Arrowbutton;
