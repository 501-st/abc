import * as React from "react"
import styled from "styled-components";
import Logo from "../images/LogoEP.svg"
import "../index.css"

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Rubik;
  margin: 20px 370px 60px 370px;
`;

const LogoAndNav = styled.div`
  display: flex;
  flex-direction: row;
  width: 470px;
`;

const Nav = styled(LogoAndNav)`
  color: #2C143D;
  font-weight: normal;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 15px;
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

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;


const HeaderComponent = ({user}) => {
    return (
        <>
            <Header>
                <LogoAndNav>
                    <img src={Logo} alt="Logo"/>
                    {user !== undefined ? <Nav>
                        <Link href="#" style={{marginRight: "25px"}}>
                            Администрации вуза
                        </Link>
                        <Link href="#" style={{marginRight: "25px"}}>
                            Учителям
                        </Link>
                        <Link href="#">
                            Студентам
                        </Link>
                    </Nav>
                        : ""}
                </LogoAndNav>
                <Btn>
                    Войти
                </Btn>
            </Header>
        </>
    )
}


export default HeaderComponent;