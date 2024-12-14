"use client";
import { useState } from "react";
import { Pivot } from "hamburger-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <header
            className={`absolute p-4 box-border top-0 inset-x-0 bg-transparent transition-colors duration-500 z-50 container mx-auto h-20 w-full flex items-center justify-between`}
        >
            <div id="Logo" className="animate-fade-in relative z-50">
                <a href="#" className="md:w-20 md:text-[16px] text-[20px]">
                    Fejlődjünk Tudatosan
                </a>
            </div>
            <nav
                className={`animate-fade-in grid-menu md:grid-rows-1 ${
                    menuOpen ? "open md:bg-transparent bg-slate-100" : ""
                } bg-inherit md:relative absolute inset-0 md:w-auto w-full md:h-auto z-40 md:top-0 left-0 md:bg-transparent `}
            >
                <ul className="overflow-hidden flex md:flex-row md:h-auto h-full flex-col items-center md:gap-0 gap-6 justify-center">
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("Projects");
                            }}
                            className="hover:underline block p-2 md:text-[16px] text-[24px]"
                            href="#"
                        >
                            Projektek
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("Skills");
                            }}
                            className="hover:underline block p-2 md:text-[16px] text-[24px]"
                            href="#"
                        >
                            Készségek
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("Contact");
                            }}
                            className="hover:underline block p-2 md:text-[16px] text-[24px]"
                            href="#"
                        >
                            Kapcsolat
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("Experience");
                            }}
                            className="hover:underline block p-2 md:text-[16px] text-[24px]"
                            href="#"
                        >
                            Tapasztalat
                        </a>
                    </li>
                </ul>
            </nav>
            <button name="Menu" className="animate-fade-in relative z-50 size-10 md:hidden" type="button">
                <Pivot duration={0.5} toggled={menuOpen} onToggle={() => setMenuOpen(!menuOpen)}/>
            </button>
        </header>
    );
}
