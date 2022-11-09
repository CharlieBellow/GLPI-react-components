import {List, Question,} from "phosphor-react";
import React from "react";
import CardHomeMobile from "../../components/CardHomeMobile";


function HomeMobile(){
    return(
       <div className="bg-white-strong-ice h-screen flex flex-col items-center">
       <div className="h-40 bg-gradient w-full rounded-b-lg rounded-bl-lg text-white-100">
            <div className="flex justify-between mx-4 pt-5 items-center">
                <List size={24} />
                <div className="flex gap-6 items-center">
                    <Question size={20} className="mr-2" />
                    <div className="flex-1 flex">
                    <img
                        src="https://www.github.com/charliebellow.png"
                        alt="favicon"
                        className=" w-8 h-8 rounded-full  top-0"
                    />
                    </div>
                </div>
            </div>
       </div>
       <CardHomeMobile />
       </div> 
    )
}

export default HomeMobile;