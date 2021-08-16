import * as React from "react"
import styled from "styled-components";
import "../index.css"
import HybridSvg from "../images/Hybrid.svg"
import InteractiveSvg from "../images/interactive.svg"
import AppleSvg from "../images/apple.svg"
import EllipsePng from "../images/ellipseCard.svg"
import EllipsePng2 from "../images/ellipseCard2.svg"
import EllipsePng3 from "../images/ellipseCard3.svg"
import EllipsePng4 from "../images/ellipseCard4.svg"
import DashPng from "../images/dashCard.svg"
import EllipseStartPng from "../images/ellipseStart.svg"
import EllipseStartPng2 from "../images/ellipseStart2.svg"
import EllipseStartPng3 from "../images/ellipseStart3.svg"

const data = [{
    title: "Гибридный формат обучения",
    text: "Платформа «Английский пациент» отличается тем, что является помощником преподавателей не только в онлайн-занятиях, но и в аудиторном формате.",
    image: HybridSvg
}, {
    title: "Интерактивные формы",
    text: "На платформе есть уникальные формы для создания заданий - диалоги и карточки, которые сделают выполение заданий проще и приятнее",
    image: InteractiveSvg
}, {
    title: "Доступность в любом месте и устройстве",
    text: "Платформа доступна на любом устройстве: от компьютера до смартфона. Придумать какой-нибудь текст, мол, работаем даже в местах, где плохо с интересом",
    image: AppleSvg
},]

const RowContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isReversed === "reversed" ? "row-reverse" : "row"};
  justify-content: space-between;
`;

const TextInCards = styled.div`
  font-family: Rubik;
  font-weight: normal;
  font-size: 24px;
  color: #5D496A;
  width: 475px;
  z-index: 1000;
`;

const Subtitle = styled.div`
  font-family: Rubik;
  font-weight: 500;
  font-size: 36px;
  color: #2C143D;
  margin-bottom: 40px;
  width: 530px;
  z-index: 1000;
`;

const ContainerForTextInCards = styled.div`
  margin-right: ${props => props.isReversed === "reversed" ? "0" : "50px"};
  margin-left: ${props => props.isReversed === "reversed" ? "100px" : "0"};
`;

const Ellipse = styled.img`
  position: absolute;
  left: -3%;
  top: 167%;
  z-index: -1;
`;

const Ellipse2 = styled.img`
  position: absolute;
  left: -5%;
  top: 207%;
`;

const Ellipse3 = styled.img`
  position: absolute;
  right: 5%;
  top: 177%;
`;

const Ellipse4 = styled.img`
  position: absolute;
  right: 0;
  top: 300%;
  z-index: ${props => props.user === "admin" ? "-1" : "1"};
`;

const Ellipse5 = styled.img`
  position: absolute;
  right: 10%;
  top: 342%;
  z-index: ${props => props.user === "admin" ? "-1" : "1"};
`;


const Dash = styled.img`
  position: absolute;
  right: 0;
  top: 289%;
  z-index: -1;
`;


const EllipseStart = styled.img`
  position: absolute;
  left: 24%;
  top: 147%;
  z-index: -1;
`;

const EllipseStart2 = styled.img`
  position: absolute;
  right: -3.5%;
  top: 127%;
`;

const EllipseStart3 = styled.img`
  position: absolute;
  left: 10%;
  top: 277%;
`;

const EllipseStart4 = styled.img`
  position: absolute;
  right: 0;
  top: 230%;
  z-index: 1;
`;

const EllipseStart5 = styled.img`
  position: absolute;
  right: 8%;
  top: 272%;
  z-index: 1;
`;


const DashStart = styled.img`
  position: absolute;
  right: 0;
  top: 233%;
  z-index: -1;
`;

const ReturnImages = ({user}) => {
    return (
        <>
            <Ellipse src={EllipsePng4} alt="ellipse"/>
            <Ellipse2 src={EllipsePng2} alt="ellipse"/>
            <Ellipse3 src={EllipsePng3} alt="ellipse"/>
            <Ellipse4 user={user} src={EllipsePng} alt="ellipse"/>
            <Ellipse5 user={user} src={EllipsePng2} alt="ellipse"/>
            <Dash src={DashPng} alt="ellipse"/>
        </>
    )
}

const ReturnImages2 = () => {
    return (
        <>
            <EllipseStart src={EllipseStartPng} alt="ellipse"/>
            <EllipseStart2 src={EllipseStartPng2} alt="ellipse"/>
            <EllipseStart3 src={EllipseStartPng3} alt="ellipse"/>
            <EllipseStart4 src={EllipsePng} alt="ellipse"/>
            <EllipseStart5 src={EllipsePng2} alt="ellipse"/>
            <DashStart src={DashPng} alt="ellipse"/>
        </>
    )
}



const Cards = ({user}) => {
    return (
        <>
            {user !== undefined
                ? <ReturnImages user={user}/>
            : <ReturnImages2/>}
            {data.map((item, index) => (
                <RowContainer style={{margin: "0 320px 203px 320px"}} isReversed={index % 2 === 0 ? "" : "reversed"}>
                    <ContainerForTextInCards isReversed={index % 2 === 0 ? "" : "reversed"}>
                        <Subtitle>
                            {item.title}
                        </Subtitle>
                        <TextInCards>
                            {item.text}
                        </TextInCards>
                    </ContainerForTextInCards>
                    <img style={{marginTop: "30px", zIndex: "2"}} src={item.image} alt="Pic"/>
                </RowContainer>
            ))}
        </>
    )
}


export default Cards;
