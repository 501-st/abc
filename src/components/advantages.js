import * as React from "react"
import styled from "styled-components";
import "../index.css"
import Autonomy from "../images/autonomy.svg"
import Neural from "../images/neural.svg"
import Cogwheel from "../images/cogwheel.svg"
import Education from "../images/education.svg"

const dataForCards = [{
    title: "Автономность",
    text: "Для работы платформы «Английский пациент» вам не потребуется никаких дополнительных приложений, кроме веб-браузера.",
    image: Autonomy
}, {
    title: "Доступность",
    text: "Платформа способна интегрироваться с системой Moodle или с любой системой, хранящей информацию о ваших студентах.",
    image: Neural
}, {
    title: "Совместимость",
    text: "Продукт не требует никакой самостоятельной настройки и прост в использовании." +
        " В дальнейшем он может как придерживаться нами, так и быть переданным на полную эксплуатацию.",
    image: Cogwheel
}, {
    title: "Гибридность",
    text: "Платформа «Английский пациент» отличается тем, что является помощником преподавателей не только в онлайн-занятиях, но и в аудиторном формате.",
    image: Education
},]


const RowContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isReversed === "reversed" ? "row-reverse" : "row"};
  justify-content: center;
`;


const Subtitle = styled.div`
  font-family: Rubik;
  font-weight: 500;
  font-size: 36px;
  color: #2C143D;
  margin-bottom: 40px;
  width: 530px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0 2px 34px -15px #8C63A9;
  border-radius: 27px;
  text-align: center;
  margin-right: 20px;
  align-items: center;
  width: 320px;
  height: 380px;
  min-width: 220px;
`;

const Text = styled.div`
  font-family: Rubik;
  font-weight: 500;
  font-size: 16px;
  margin: 0 15px 15px 15px;
`;



const Advantages = () => {
    return (
        <>
            <div style={{margin: "0 320px 0 320px"}}>
                <Subtitle>
                    Наши преимущества
                </Subtitle>
                <RowContainer style={{marginBottom: "165px"}}>
                    {dataForCards.map((item, index) => (
                        <Card>
                            <div style={{
                                background: "#F2EDF4", borderRadius: "50px", width: "100px", height: "100px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "48px 0 29px 0"
                            }}>
                                <img src={item.image} alt="pic"/>
                            </div>
                            <Text>
                                {item.title}
                            </Text>
                            <Text style={{fontWeight: "400"}}>
                                {item.text}
                            </Text>
                        </Card>
                    ))}
                </RowContainer>
            </div>

        </>
    )
}


export default Advantages;
