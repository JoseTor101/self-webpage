import Header from "../src/Components/Header"
import Image from "next/image"
import index from '../src/styles/index.module.css'
import man from "../src/img/man.jpg"

export default function Index() {
    return (
        <div>
            <Header img="error"></Header>
            <div className={index['content-container']}>
                <Image src={man} className={index['img']} alt="portrait"></Image>
                <div className={index['content-text']}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti nemo quidem dolore asperiores in dolores aut. Aperiam consequatur totam explicabo obcaecati atque ex! Nulla reiciendis commodi repellat harum voluptatibus. lorem200
                    </p>
                </div>
            </div>
        </div>
    )
}