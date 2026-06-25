import "../css/Home.css"

import Header from "../components/Header";
import Center from "../components/Center";
import Footer from "../components/Footer";

export default function Homepage() {
    return (
        <div className="home">
            <Header />
            <Center />
            <Footer />
        </div>
    )
}