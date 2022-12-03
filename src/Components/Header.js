import Link from "next/link";
import styles from "../Styles/Header.module.css";

export default function Header(img){
    const icon = img == "erro" ? 'e' : 'a';

    return (
        <div className={styles['header']}>
            <div className ={styles['header-title']}><h1>
                <Link href="/">JT</Link>
                </h1></div>
            <div className="header-list">
                <ul className={styles['header-items']}>
                    <li>Programming</li>
                    <li>Modeling</li>
                    <li>Contact me</li>
                </ul>
            </div>
        </div>
    )
}