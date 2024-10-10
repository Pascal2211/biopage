"use client"

import Image from "next/image";
import mail from '/public/EmailIcon.png';
import phone from '/public/phone.png';
import pin from '/public/pin.png'
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="h-screen w-screen bg-customGray flex items-center justify-center">
            <div id="sideBar" className="bg-brownBrown h-5/6 w-96 rounded-2xl grid grid-col-3 gap-4 p-8">
            {/*First coolums*/}
                <div className="h-full w-full rounded-2xl ">
                    <Image  alt="Image of me" className="rounded-full mx-auto mb-4 h-32 w-32"/>
                    <h1 className=" flex items-center justify-center font-semibold">Pascal Sibondagara</h1>
                    <p className="flex items-center justify-center font-light">22.11.2002</p>
                    <div id="button"
                        onClick={() => window.location.href = '/pascal'}>Buttton</div>
                </div>

                  {/*First coolums*/}
                <div className="h-full w-full rounded-2xl grid grid-col-3 gap-4">
                    <div className="flex gap-4 ">
                        <Image src={mail}  alt="It is a email icon" className="bg-backgroundBrown h-16 w-16 flex items-center justify-center rounded-lg shadow-2xl"/>
                        <div className="bg-backgroundBrown h-16 w-80 flex items-center justify-center px-4 rounded-lg">pascalsibondagara@outlook</div>
                    </div>

                    <div className="flex gap-4">
                        <Image src={phone} alt="Image of a phone " className="bg-backgroundBrown h-16 w-16 flex items-center justify-center rounded-lg shadow-2xl" />
                        <div className="bg-backgroundBrown h-16 w-80 flex items-center justify-center px-4 rounded-lg">40188864</div>
                    </div>

                    <div className="flex gap-4">
                        <Image src={pin} alt="Image of a pin" className="bg-backgroundBrown h-16 w-16 flex items-center justify-center rounded-lg shadow-2xl" />
                        <div className="bg-backgroundBrown h-16 w-80 flex items-center justify-center px-4 rounded-lg">Inndalsveien 1A 5063</div>
                    </div>

                </div>

                  {/*First coolums*/}
                <div className="h-full w-full rounded-2xl grid grid-col-2 gap-2 p-1">

                    <div className=" grid grid-cols-2">
                        <div className="bg-specialOrange w-32 gap-4 rounded-lg"></div>
                        <div className="bg-specialOrange gap-4 rounded-lg"></div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="bg-specialOrange w-32 gap-4 rounded-lg"></div>
                        <div className="bg-specialOrange gap-4 rounded-lg"></div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="bg-specialOrange w-32 gap-4 rounded-lg"></div>
                        <div className="bg-specialOrange gap-4 rounded-lg"></div>
                    </div>
                </div>


            </div>
        </div>
    );
}