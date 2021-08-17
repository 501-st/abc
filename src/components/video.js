import * as React from "react"
import styled from "styled-components";
import "../index.css"
import DashImg from "../images/dashVideo.svg"
import EllipseImg from "../images/ellipseVideo.svg"

const Subtitle = styled.div`
  font-family: Rubik;
  font-weight: 500;
  font-size: 36px;
  color: #2C143D;
  margin-bottom: 40px;
  width: 530px;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;
  background: ${props => props.isTeacher === true ? "white" : "#F2EDF4"};
`;

const Ellipse = styled.img`
  position: absolute;
  left: -200px;
  top: 150px;
`;

const Dash = styled.img`
  position: absolute;
  left: -320px;
  bottom: -510px;
`;

const ReturnImages = () => {
    return (
        <>
            <Ellipse src={EllipseImg} alt="ellipse"/>
            <Dash src={DashImg} alt="ellipse"/>
        </>
    )
}

const Content = styled.div`
  margin: 0 320px; 
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 85px 0 123px 0;
  position: relative;
`;

const Video = ({user}) => {
    return (
        <>

            <Container isTeacher={user === "teacher"}>
                <Content>
                    {user !== "teacher" ? <ReturnImages/> : ""}
                    <Subtitle style={{width: "1113px"}}>
                        English Patient - творческое пространство для каждого преподавателя и индивидуальная траектория
                        познания для каждого студента.
                    </Subtitle>
                    <iframe style={{zIndex: "1000"}} width="1180" height="570"
                            src="https://www.youtube.com/embed/xZIh2so3-AU"
                            title="YouTube video player"
                            frameBorder="0"/>
                </Content>
            </Container>
        </>
    )
}


export default Video;
