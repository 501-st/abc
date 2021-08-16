import * as React from "react"
import styled from "styled-components";
import "../index.css"
import ForAdministration from "../images/ForAdministration.svg"
import ForTeachers from "../images/ForTeachers.svg"
import DashImg from "../images/dash1.svg"
import DashImg2 from "../images/dash2.svg"
import EllipseImg from "../images/ellipse2.svg"
import EllipseImg2 from "../images/ellipse3.svg"


const Btn = styled.button`
  background: #8C63A9;
  border-radius: 11px;
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 18px;
  color: #FFFFFF;
  height: 45px;
  padding: 0 50px;
`;

const Title = styled.div`
  font-family: Rubik;
  font-weight: bold;
  font-size: 59px;
  text-align: center;
  color: #2C143D;
  margin: 0 320px 90px 320px;
  z-index: 1000;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CardLinks = styled.div`
  background: #FFFFFF;
  box-shadow: 0 2px 34px -15px #8C63A9;
  border-radius: 27px;
  width: 546px;
  height: 407px;
  padding-left: 34px;
  z-index: 1000;
`;

const CardLinksText = styled.div`
  font-family: Rubik;
  color: #2C143D;
  font-weight: bold;
  font-size: 24px;
  text-align: start;
  margin: 16px 0 20px 0;
`;

const Dash = styled.img`
  position: absolute;
  left: 0;
  top: 1%;
`;

const Dash2 = styled.img`
  position: absolute;
  right: 0;
  top: 39%;
  z-index: -1;
`;

const Ellipse = styled.img`
  position: absolute;
  left: 0;
  top: 80%;
`;

const Ellipse2 = styled.img`
  position: absolute;
  left: 0;
  top: 60%;
`;

const ReturnImages = () => {
    return (
        <>
            <Dash src={DashImg} alt="dash1"/>
            <Dash2 src={DashImg2} alt="dash2"/>
            <Ellipse src={EllipseImg} alt="ellipse"/>
            <Ellipse2 src={EllipseImg2} alt="ellipse"/>
        </>
    )
}


const LinksForAdminAndTeachers = () => {
    return (
        <>
            <ReturnImages/>
            <Title>
                Сделайте языковую подготовку
                английского в вузе современной
            </Title>
            <RowContainer style={{margin: "0 320px 336px 320px"}}>
                <CardLinks style={{marginRight: "20px"}}>
                    <div style={{
                        textAlign: "center",
                        paddingTop: "60px",
                    }}>
                        <img src={ForAdministration} alt="Admin"/>
                        <CardLinksText>
                            Для администрации вуза
                        </CardLinksText>
                        <Btn style={{float: "left"}}>
                            Подробнее
                        </Btn>
                    </div>
                </CardLinks>
                <CardLinks style={{marginRight: "20px"}}>
                    <div style={{
                        textAlign: "center",
                        paddingTop: "40px",
                    }}>
                        <img src={ForTeachers} alt="Teacher"/>
                        <CardLinksText>
                            Для преподавателей
                        </CardLinksText>
                        <Btn style={{float: "left"}}>
                            Подробнее
                        </Btn>
                    </div>
                </CardLinks>
            </RowContainer>
        </>
    )
}


export default LinksForAdminAndTeachers;
