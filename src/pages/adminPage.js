import * as React from "react"
import "../index.css"
import HeaderComponent from "../components/header";
import Cards from "../components/cards";
import Video from "../components/video";
import DemoComponent from "../components/demo";
import FormComponent from "../components/form";
import Footer from "../components/footer";
import AdminAndTeacherCards from "../components/adminAndTeacherCards";
import TitleComponent from "../components/title";



const AdminPage = () => {
    return (
        <>
            <HeaderComponent user="admin"/>
            <TitleComponent user="admin"/>
            <AdminAndTeacherCards user="admin"/>
            <Cards user="admin"/>
            <Video/>
            <DemoComponent/>
            <FormComponent user="admin"/>
            <Footer/>
        </>
    )
}


export default AdminPage;
