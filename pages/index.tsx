import Header from "../src/Components/Header";
import Image from "next/image";
import man from "../src/img/man.png";

export default function Index() {
    return (
        <div>
            <Header img="error"></Header>
            <Image src={man} alt="portrait" width={264} height={562}></Image>
        </div>
    )
}
