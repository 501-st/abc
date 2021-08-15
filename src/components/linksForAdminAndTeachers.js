import * as React from "react"
import styled from "styled-components";
import "../index.css"
import ForAdministration from "../images/ForAdministration.svg"
import ForTeachers from "../images/ForTeachers.svg"


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
`;

const CardLinksText = styled.div`
  font-family: Rubik;
  color: #2C143D;
  font-weight: bold;
  font-size: 24px;
  text-align: start;
  margin: 16px 0 20px 0;
`;


const LinksForAdminAndTeachers = () => {
    return (
        <>
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
