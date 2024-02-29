"use client"

import Image from "next/image"
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid"

export default function Navbar() {

    const [mobile, setMobile] = useState(false);

    return (
        <nav className="w-full">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between text-sm">
                    <div className="flex space-x-4">
                        <div>
                            <a href="/" className="flex items-center py-5 px-2">
                                <Image src="/logo.svg" alt="Shortly logo" width={100} height={20} priority/>
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-5 text-my_GrayishViolet">
                            <a href="#" className="py-5 px-3">Features</a>
                            <a href="#" className="py-5 px-3">Pricing</a>
                            <a href="#" className="py-5 px-3">Resources</a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-5">
                        <a href="" className="py-5 px-3 text-my_GrayishViolet ">Login</a>
                        <a href=""
                        className="py-2 px-5 bg-my_Cyan text-white rounded-full transition duration-300">
                            Sign Up
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button">
                        <Bars3Icon className="w-10 h-10 text-my_DarkViolet" role="button" onClick={() => mobile ? setMobile(false) : setMobile(true)} />
                        </button>
                    </div>
                </div>
            </div>
            {mobile && 
                <div className="mobile-menu text-xs">
                    <a href="#" className="py-5 px-3">Features</a>
                    <a href="#" className="py-5 px-3">Pricing</a>
                    <a href="#" className="py-5 px-3">Resources</a>
                </div>
            }
            
        </nav>
    );
}