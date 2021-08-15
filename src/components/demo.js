import * as React from "react"
import styled from "styled-components";
import "../index.css"
import Demo from "../images/demo.svg"

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

const RowContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isReversed === "reversed" ? "row-reverse" : "row"};
  margin: 0 320px 164px 320px;
  justify-content: space-between;
  padding: ${props => props.isTeacher === true ? "75px 0 130px 0" : ""};
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
`;

const Container = styled.div`
  background: ${props => props.isTeacher === true ? "#F2EDF4" : "white"};
  width: 100%;
`;

const DemoComponent = ({user}) => {
    return (
        <Container isTeacher={user === "teacher"}>
            <RowContainer isTeacher={user === "teacher"}>
                <div>
                    <Subtitle style={{marginBottom: "23px"}}>
                        Хотите попробовать?
                    </Subtitle>
                    <DemoAndFormText style={{marginBottom: "64px", width: "743px"}}>
                        Воспользуйтесь бесплатной демо-версией платформы, чтобы оценить удобство использовавния
                    </DemoAndFormText>
                    <Btn style={{padding: "0 25px"}}>
                        Попробовать демо версию
                    </Btn>
                </div>
                <img src={Demo} alt="Demo"/>
            </RowContainer>
        </Container>
    )
}


export default DemoComponent;
