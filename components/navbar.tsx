"use client"
import Link from "next/link";
import {useState} from "react";
import {Pivot} from 'hamburger-react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header
            className={`absolute p-4 box-border top-0 inset-x-0 ${menuOpen ? "bg-slate-100" : "bg-transparent"} transition-colors duration-500 delay-300 z-50 container mx-auto h-20 w-full flex items-center justify-between`}>
            <div id="Logo" className="animate-fade-in">
                <Link href="/" className="md:w-20 md:text-[16px] text-[20px]">
                    Fejlődjünk tudatosan
                </Link>
            </div>
            <nav
                className={`animate-fade-in grid-menu md:grid-rows-1 ${menuOpen ? "open" : ""} bg-inherit md:relative absolute inset-0 md:w-auto w-full md:h-auto z-50 md:top-0 top-20 md:bg-transparent `}>
                <ul className="overflow-hidden flex md:flex-row md:h-auto h-full flex-col items-center md:gap-0 gap-6 justify-center">
                    <li className=""><Link className="hover:underline block p-2 md:text-[16px] text-[24px]"
                                           href="/">Kezdőlap</Link></li>
                    <li className=""><Link className="hover:underline block p-2 md:text-[16px] text-[24px]"
                                           href="/">Projektek</Link></li>
                    <li className=""><Link className="hover:underline block p-2 md:text-[16px] text-[24px]"
                                           href="/">Készségek</Link></li>
                    <li className=""><Link className="hover:underline block p-2 md:text-[16px] text-[24px]"
                                           href="/">Kapcsolat</Link></li>
                </ul>
            </nav>
            <button className="animate-fade-in size-10 md:hidden" type="button">
                <Pivot duration={0.5} toggled={menuOpen} onToggle={() => setMenuOpen(!menuOpen)}/>
            </button>
        </header>
    )
}