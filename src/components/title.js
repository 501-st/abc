import * as React from "react"
import "../index.css"
import styled from "styled-components";
import PictureAdmin from "../images/ForAdministration.svg"
import PictureTeacher from "../images/ForTeachers.svg"

const SubTitle   = styled.div`
  font-family: Rubik;
  font-weight: 500;
  font-size: 24px;
  color: #2C143D;
  margin-bottom: 43px;
`;

const Title = styled.div`
  font-family: Rubik;
  font-weight: bold;
  font-size: 60px;
  color: #2C143D;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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

const Container = styled.div`
  margin: 0 370px;
  padding-bottom: 126px;
`;

const TitleComponent = ({user}) => {
    return (
        <Container>
            <SubTitle>
                {user === "teacher" ? "Для преподавателей" : "Для администрации вуза"}
            </SubTitle>
            <RowContainer style={{marginBottom: "30px"}}>
                <Title>
                    {user === "teacher" ? "Освободите время для решения творческих задач" : " Сделайте цифровую трансформацию учебного процесса"}
                </Title>
                <img style={{marginTop: "100px"}} src={user === "teacher" ? PictureTeacher : PictureAdmin} alt="pic"/>
            </RowContainer>
            <Btn>
                Попробовать демо версию
            </Btn>
        </Container>
    )
}


export default TitleComponent;
