import * as React from "react"
import styled from "styled-components";
import "../index.css"
import EllipseImg from "../images/ellipseForm.svg"

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

const DemoAndFormText = styled.div`
  font-family: Rubik;
  font-weight: normal;
  font-size: 24px;
  color: #5D496A;
  z-index: 1000;
`;

const Input = styled.input`
  font-family: Rubik;
  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  border-radius: 5px;
  width: 580px;
  height: 60px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #8E8E8E;
  padding-left: 18px;
`;

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


const Ellipse = styled.img`
  position: absolute;
  left: 0;
  bottom: -495%;
`;

const ReturnImages = () => {
    return (
        <Ellipse src={EllipseImg} alt="ellipse"/>
    )
}

const FormComponent = ({user}) => {
    return (
        <>
            <ReturnImages/>
            <div style={{background: "#F2EDF4", width: "100%", marginBottom: "164px"}}>
                <RowContainer
                    style={{
                        margin: "0 320px",
                        justifyContent: "space-between",
                        paddingTop: "90px",
                        paddingBottom: "72px"
                    }}>
                    <div>
                        <Subtitle>
                            {user === "admin" ? "Присоединяйтесь к нам" : "Остались вопросы?"}
                        </Subtitle>
                        <DemoAndFormText>
                            {user === "admin" ? "Оставьте свои контакты, мы с вами свяжемся и расскажем дальнейшие шаги действий"
                                : "Оставьте свои контакты, мы с вами свяжемся и ответим на всё, что вас интересует"}
                        </DemoAndFormText>
                    </div>
                    <form>
                        <Input required placeholder="ФИО*"/>
                        <Input placeholder="Организация"/>
                        <Input required placeholder="Должность*"/>
                        <Input required placeholder="E-mail*"/>
                        <Input placeholder="Телефон"/>
                        <Btn style={{
                            width: "598px",
                            height: "60px", marginBottom: "16px"
                        }} type="submit">
                            Отправить
                        </Btn>
                        <div style={{
                            fontSize: "18px",
                            color: "#999999",
                            fontFamily: "Rubik",
                            width: "457px"
                        }}>
                            Нажимая кнопку, вы соглашаетесь с положениями об обработке персональных данных
                        </div>
                    </form>
                </RowContainer>
            </div>
        </>
    )
}


export default FormComponent;
