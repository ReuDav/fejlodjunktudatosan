import Link from "next/link";

export default function Footer() {
    return (<footer>
        <div>
            <h2>Kapcsolat</h2>
            <ul>
                <li><Link target="_blank" href="mailto:reucovdavid@gmail.com"> reucovdavid@gmail.com </Link></li>
                <li><Link target="_blank" href="https://linkedin.com/in/reucov-david"> LinkedIn </Link></li>
                <li><Link target="_blank" href="tel:+36203563564"> +36 20 356 3564</Link></li>
            </ul>
        </div>
        <div></div>
        <div></div>
        <div id="Copyright" className="text-center py-2">Fejlődjünk Tudatosan. <br/> {new Date().getFullYear()}, Minden jog fenntartva.</div>
    </footer>)
}