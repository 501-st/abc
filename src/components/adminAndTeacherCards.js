import * as React from "react"
import "../index.css"
import styled from "styled-components";
import DashImg from "../images/dashAdmin.svg"
import DashImg2 from "../images/dashAdmin2.svg"

const data = [{
    title: "Автоматическая проверка заданий",
    text: "С помощью искуственного интеллекта платформа выставляет оценки ученикам  за задания и формирирует статистику прогресса"
}, {
    title: "Автоматическая проверка заданий",
    text: "С помощью искуственного интеллекта платформа выставляет оценки ученикам  за задания и формирирует статистику прогресса"
}, {
    title: "Большая методическая база",
    text: "Платформа содержит большое количество обучающих материалов, которые были тщательно отобраны методистами ТГУ"
}, {
    title: "Автоматическая проверка заданий",
    text: "С помощью искуственного интеллекта платформа выставляет оценки ученикам  за задания и формирирует статистику прогресса"
}, {
    title: "Автоматическая проверка заданий",
    text: "С помощью искуственного интеллекта платформа выставляет оценки ученикам  за задания и формирирует статистику прогресса"
}, {
    title: "Автоматическая проверка заданий",
    text: "С помощью искуственного интеллекта платформа выставляет оценки ученикам  за задания и формирирует статистику прогресса"
},]

const Container = styled.div`
  background: #F2EDF4;
  margin-bottom: 140px;
  z-index: 1;
`;

const Subtitle = styled.div`
  font-family: Rubik;
  font-weight: 500;
  font-size: 36px;
  color: #2C143D;
  margin-bottom: 46px;
  margin-left: 10px;
  width: 1180px;
  z-index: 3;
`;

const Card = styled.div`
  width: 380px;
  height: 240px;
  margin: 10px;
  padding: 35px;
  box-sizing: border-box;
  display: inline-block;
  background: #FFFFFF;
  box-shadow: 0 2px 34px -15px #8C63A9;
  border-radius: 13px;
  z-index: 4;
  position: relative;
`;

const CardTitle = styled.div`
  font-family: Rubik;
  font-weight: 500;
  font-size: 24px;
  color: #2C143D;
  margin-bottom: 15px;
`;

const CardText = styled.div`
  font-family: Rubik;
  font-size: 18px;
  color: #5D496A;
`;

const Dash = styled.img`
  position: absolute;
  right: 0;
  top: 860px;
  z-index: 0;
`;

const Dash2 = styled.img`
  position: absolute;
  left: 0;
  top: 1040px;
`;

const ReturnImages = () => {
    return (
        <>
            <Dash src={DashImg} alt="ellipse"/>
            <Dash2 src={DashImg2} alt="ellipse"/>
        </>
    )
}

const AdminAndTeacherCards = ({user}) => {
    return (
        <>
            <ReturnImages/>
            <Container>
                <div style={{marginLeft: "320px", padding: "57px 0 75px 0", zIndex: "2"}}>
                    <Subtitle>
                        {user === "teacher" ? "Разгрузите себя от рутинных операций"
                            : "Подключите ваш университет к современной платформе с автопроверкой заданий и большой методической базой"}
                    </Subtitle>
                    {data.map((item, index) => (
                        <Card>
                            <CardTitle>
                                {item.title}
                            </CardTitle>
                            <CardText>
                                {item.text}
                            </CardText>
                        </Card>
                    ))}
                </div>
            </Container>
        </>
    )
}


export default AdminAndTeacherCards;
