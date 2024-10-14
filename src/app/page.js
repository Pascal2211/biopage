"use client"

import Image from "next/image";
import mail from '/public/EmailIcon.png';
import phone from '/public/phone.png';
import pin from '/public/pin.png'
import me from '/public/me.png'
import { Link } from "react-router-dom";

var boringTxt = "Lorem ipsum dolare annent si annet. Eg er en Ung mann fra nordfjordeid som liker å utvikle ting som mobil apper. Nettsider så liker eg forskjellig idretter. Eg stammer egent fra burundi, bujumbura. Eg kom med mamma og 2 søsken mens 3 andre søsken og pappa var igjen i Burundi. Eg liker å sette meg inn i nye ting. Eg liker å spise mat, kose meg med venner og eg glemte å nevne at eg har en bachelor innen frontend og mobilutvikling sim gjir meg frontend evner og mobil evener. Masse frontend og masse mobil"

export default function home() {
    return (
        <div className="min-h-screen w-screen bg-customGray grid grid-cols-1 lg:grid-cols-4 gap-2 px-16 py-16">
            {/** Sidebar */}
            <div className="bg-brownBrown h-full w-10/12 rounded-xl grid grid-col-1 gap-2 shadow-brownBrown shadow-lg">
                <div className="h-full w-full rounded-xl pt-8">
                    <Image src={me} alt="Image of me" className="mx-auto mb-2 h-40 w-40 rounded-lg"/>
                    <h1 className="flex items-center justify-center font-semibold text-2xl">Pascal Sibondagara</h1>
                    <p className="flex items-center justify-center font-light text-lg">22.11.2002</p>
                    <div id="button" className="text-center text-sm mt-2 cursor-pointer" onClick={() => window.location.href = '/pascal'}>
                        Button
                    </div>
                </div>

                {/* Contact Info */}
                <div className="h-full w-full rounded-lg grid gap-2 px-6">
                    <div className="flex gap-2 ">
                        <Image src={mail} alt="Email icon" className="bg-backgroundBrown h-14 w-14 flex items-center justify-center rounded-lg shadow-lg"/>
                        <div className="bg-backgroundBrown h-14 w-full flex items-center justify-center px-2 rounded-lg text-l">pascalsibondagara@outlook</div>
                    </div>

                    <div className="flex gap-2">
                        <Image src={phone} alt="Phone icon" className="bg-backgroundBrown h-14 w-14 flex items-center justify-center rounded-lg shadow-lg" />
                        <div className="bg-backgroundBrown h-14 w-full flex items-center justify-center px-2 rounded-lg text-l">40188864</div>
                    </div>

                    <div className="flex gap-2">
                        <Image src={pin} alt="Pin icon" className="bg-backgroundBrown h-14 w-14 flex items-center justify-center rounded-lg shadow-lg" />
                        <div className="bg-backgroundBrown h-14 w-full flex items-center justify-center px-2 rounded-lg text-l">Inndalsveien 1A 5063</div>
                    </div>
                </div>

                {/* Social/Other Info */}
                <div className="h-full w-full rounded-lg grid grid-cols-2 gap-2 p-6">
                    <div className="bg-specialOrange w-24 rounded-lg"></div>
                    <div className="bg-specialOrange rounded-lg"></div>
                    <div className="bg-specialOrange w-24 rounded-lg"></div>
                    <div className="bg-specialOrange rounded-lg"></div>
                    <div className="bg-specialOrange w-24 rounded-lg"></div>
                    <div className="bg-specialOrange rounded-lg"></div>
                </div>
            </div>

            {/** Main content area */}
            <div className="col-span-3 flex flex-col gap-2 w-full h-full space-y-2">

                <div id="navbar" className="bg-specialOrange rounded-lg p-4 w-full h-20 flex-shrink-0 shadow-specialOrange shadow-lg">
                    <div className="flex space-x-4 justify-center w-full">
                        <div className="bg-brownBrown rounded-lg p-4 text-center w-full cursor-pointer hover:bg-brown-600 hover:scale-105 transition-all duration-300 ease-in-out" onClick={() => window.location.href = '/pascal'}>OM MEG</div>

                        <div className="bg-brownBrown rounded-lg p-4 text-center w-full cursor-pointer hover:bg-brown-600 hover:scale-105 transition-all duration-300 ease-in-out" onClick={() => window.location.href ='/experience'} >ERFARING</div>
                        
                        <div className="bg-brownBrown rounded-lg p-4 text-center w-full cursor-pointer hover:bg-brown-600 hover:scale-105 transition-all duration-300 ease-in-out" onClick={() => window.location.href = '/projects'}>PROSJEKTER</div>

                        <div className="bg-brownBrown rounded-lg p-4 text-center w-full cursor-pointer hover:bg-brown-600 hover:scale-105 transition-all duration-300 ease-in-out" onClick={() => window.location.href = '/education'} >UTDANNINGSLØP</div>
                    </div>
                </div>

                <div id="mainContent" className="bg-brownBrown p-4 rounded-lg w-full flex-grow shadow-brownBrown shadow-lg ">
                    <div className="grid grid-cols-1 gap-4 pt-4 pl-4">
                        <div className="bg-customGray text-brownBrown w-32 h-20 flex items-center justify-center rounded-xl text-xl">Om meg</div>
                        <div className="pb-8 pt-4 text-lg">{boringTxt}</div>
                        <div className="bg-customGray text-brownBrown w-32 h-20 flex items-center justify-center rounded-xl text-xl">Egenskaper</div>

                        <div className="grid grid-cols-3 gap-4 h-80 grid-auto-columns overflow-x-auto">
                            <div className="bg-specialOrange h-3/7 flex-shrink-0 rounded-xl flex items-center justify-center">1 box</div>
                            <div className="bg-specialOrange h-3/7 flex-shrink-0 rounded-xl flex items-center justify-center">2 box</div>
                            <div className="bg-specialOrange h-3/7 flex-shrink-0 rounded-xl flex items-center justify-center">3 box</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}