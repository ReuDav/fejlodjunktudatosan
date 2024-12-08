import Link from "next/link";

export default function Navbar() {
    return (
        <header className="absolute top-0 inset-x-0 !bg-transparent z-50 container mx-auto h-20 w-full flex items-center justify-between">
            <div id="Logo" className="">
                <Link href="/" className="w-20">
                    Fejlődjünk tudatosan
                </Link>
            </div>
            <nav>
                <ul className="flex items-center">
                    <li className=""><Link className="block p-2" href="/">Kezdőlap</Link></li>
                    <li className=""><Link className="block p-2" href="/">Projektek</Link></li>
                    <li className=""><Link className="block p-2" href="/">Készségek</Link></li>
                    <li className=""><Link className="block p-2" href="/">Kapcsolat</Link></li>
                </ul>
            </nav>
        </header>
    )
}