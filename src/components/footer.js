import * as React from "react"
import styled from "styled-components";
import "../index.css"
import Telegram from "../images/telegram.svg"
import WhatsUp from "../images/whatsup.svg"

const RowContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isReversed === "reversed" ? "row-reverse" : "row"};
  justify-content: center;
`;

const FooterTitle = styled.div`
  font-family: Rubik;
  font-weight: 500;
  font-size: 24px;
  color: #2C143D;
  margin-bottom: 19px;
`;

const FooterText = styled.div`
  font-family: Rubik;
  font-size: 18px;
  color: #5D496A;
  margin-bottom: 12px;
`;


const Footer = () => {
    return (
        <>
            <RowContainer style={{margin: "0 320px", justifyContent: "space-between"}}>
                <div>
                    <FooterTitle>
                        Контакты
                    </FooterTitle>
                    <FooterText>
                        ipstomsk20@gmail.com
                    </FooterText>
                    <FooterText style={{marginBottom: "52px"}}>
                        г. Томск, ул. Елизаровых, 53/2
                    </FooterText>
                    <FooterText>
                        copyright IPST© 2021
                    </FooterText>
                </div>
                <div>
                    <FooterTitle>
                        Документы
                    </FooterTitle>
                    <a style={{textDecoration: "none"}} href="#">
                        <FooterText style={{color: "#BA68C8"}}>
                            Пользовательское соглашение
                        </FooterText>
                    </a>
                    <a style={{textDecoration: "none"}} href="#">
                        <FooterText style={{color: "#BA68C8"}}>
                            Политика обработки данных
                        </FooterText>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img style={{marginRight: "30px"}} src={WhatsUp} alt="WhatsUp"/>
                    </a>
                    <a href="#">
                        <img src={Telegram} alt="Telegram"/>
                    </a>
                </div>
            </RowContainer>
        </>
    )
}


export default Footer;
