import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext/ThemeContext';

function Footer(props) {
    const themeContext = useContext(ThemeContext);

    return (
        <FooterContainer className={themeContext.theme}>
            <h4>Copyright &copy; company A</h4>
            <p>ducnq@gmail.com</p>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.div`
    font-size: 14px;
    width: 100%;
    height: 7vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 8px 0;
`