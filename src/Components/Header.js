import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header({img}){
    var name = "JT";

    if (img == "prog") {
        name = "JT-Programming"
    }
    if (img == "model") {
        name = "JT-Modeling"
    } 

    return (
        <div className={styles['header']}>
            <div className ={styles['header-title']}><h1>
                <Link href="/">{name}</Link>
                </h1></div>
            <div className="header-list">
                <ul className={styles['header-items']}>
                    <li><Link href="/Programming">Programming</Link></li>
                    <li><Link href="/Modeling">Modeling</Link></li>
                    <li><Link href="/Contact">Contact me</Link></li>
                </ul>
            </div>
        </div>
    )
}