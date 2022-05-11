import React from "react";

const Education = () => {
    return (
        <div
            name="education"
            className="w-full h-screen bg-backg text-[#D3D5D7]"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full flex justify-start">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-rose">
                            Education
                        </p>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4">
                    <div className="sm:text-center md:text-2xl font-bold">
                        <p className="text-rose">2022</p>
                        <p className="py-3">
                            Google Data Analytics Professional Certificate
                        </p>
                        <p className="text-sm">(OnGoing)</p>
                        <br />
                        <p className="text-rose">2021</p>
                        <p className="py-3">
                            ITMaster Academy, Bs AS: Full Stack Developer
                        </p>
                        <p className="text-sm">
                            {" "}
                            Av. Rivadavia 5040, C1424 CES, Buenos Aires
                        </p>
                        <br />
                        <p className="text-rose">2009</p>
                        <p className="py-3">
                            Belgrano Institute - High School 2060, Rosario High
                            School Diploma
                        </p>
                        <p className="text-sm">
                            Catamarca 2451, S2000 JRE, Santa Fe
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
