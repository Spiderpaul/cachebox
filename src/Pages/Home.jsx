import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Row from "../Components/Row/Row";
import Footer from "../Components/Footer/Footer";

const Home = () => {

    return (
        <div>
            <Header/>
            <Banner/>
            <Row categoria="categoria"/>
            <Footer/>
        </div>
    )
}

export default Home