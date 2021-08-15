import * as React from "react"
import styled from "styled-components";
import "../index.css"
import HybridSvg from "../images/Hybrid.svg"
import InteractiveSvg from "../images/interactive.svg"
import AppleSvg from "../images/apple.svg"


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
  font-family: Roboto;
  font-weight: normal;
  font-size: 24px;
  color: #5D496A;
  width: 475px;
`;

const Subtitle = styled.div`
  font-family: Rubik;
  font-weight: 500;
  font-size: 36px;
  color: #2C143D;
  margin-bottom: 40px;
  width: 530px;
`;

const ContainerForTextInCards = styled.div`
  margin-right: ${props => props.isReversed === "reversed" ? "0" : "50px"};
  margin-left: ${props => props.isReversed === "reversed" ? "100px" : "0"};
`;


const Cards = () => {
    return (
        <>
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
                    <img style={{marginTop: "30px"}} src={item.image} alt="Pic"/>
                </RowContainer>
            ))}
        </>
    )
}


export default Cards;
