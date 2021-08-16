import * as React from "react"
import "../index.css"
import HeaderComponent from "../components/header";
import LinksForAdminAndTeachers from "../components/linksForAdminAndTeachers";
import Cards from "../components/cards";
import Advantages from "../components/advantages";
import Video from "../components/video";
import DemoComponent from "../components/demo";
import FormComponent from "../components/form";
import Footer from "../components/footer";


const StartPage = () => {
    return (
        <>
            <HeaderComponent/>
            <LinksForAdminAndTeachers/>
            <Cards/>
            <Advantages/>
            <Video/>
            <DemoComponent/>
            <FormComponent/>
            <Footer/>
        </>
    )
}


export default StartPage;
