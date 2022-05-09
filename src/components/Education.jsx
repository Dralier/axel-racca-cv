import React from "react";

const Education = () => {
    return (
        <div
            name="education"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            Education
                        </p>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4">
                    <div className="sm:text-center md:text-3xl font-bold">
                        <p>ITMaster Academy, Bs AS: Full Stack Developer</p>
                        <p className="text-sm"> Av. Rivadavia 5040, C1424 CES, Buenos Aires</p>
                        <br />
                        <p>
                            Google Data Analytics Professional Certificate
                        </p>
                        <p className="text-sm">(OnGoing)</p>
                        <br />
                        <p >
                            Belgrano Institute - High School 2060, Rosario:
                            Catamarca 2451, S2000 JRE, Santa Fe High School
                            Diploma
                        </p>
                        <p className="text-sm">Catamarca 2451, S2000 JRE, Santa Fe</p>
                        
                        
                       
                    </div>
                    {/* <div>
                        <p>
                        Av. Rivadavia 5040, C1424 CES, Buenos Aires
                        </p>
                        <br />
                        <p>
                        Catamarca 2451, S2000 JRE, Santa Fe
                        </p>
                        <br />
                        <p>(OnGoing)</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Education;
