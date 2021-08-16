import * as React from "react"
import "../index.css"
import HeaderComponent from "../components/header";
import Cards from "../components/cards";
import Advantages from "../components/advantages";
import Video from "../components/video";
import DemoComponent from "../components/demo";
import Footer from "../components/footer";
import AdminAndTeacherCards from "../components/adminAndTeacherCards";
import TitleComponent from "../components/title";



const TeacherPage = () => {
    return (
        <>
            <HeaderComponent user="teacher"/>
            <TitleComponent user="teacher"/>
            <AdminAndTeacherCards user="teacher"/>
            <Cards user="teacher"/>
            <Video user="teacher"/>
            <DemoComponent user="teacher"/>
            <Footer/>
        </>
    )
}


export default TeacherPage;
