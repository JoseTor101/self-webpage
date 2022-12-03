import Header from "../src/Components/Header"
import Image from "next/image"
import index from '../src/styles/index.module.css'
import man from "../src/img/man.jpg";

export default function Index() {
    return (
        <div>
            <Header img="error"></Header>
            <Image src={man} className={index['img']} alt="portrait"></Image>
        </div>
    )
}
