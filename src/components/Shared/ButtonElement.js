import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({ green_bg, blue_bg }) => (green_bg ? '#52AD80' : blue_bg ? '#6497b1' : '#010606')};
    white-space: nowrap;
    padding: ${(big) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark_text }) => (dark_text ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ hover_green_bg, hover_blue_bg }) => (hover_green_bg ? '#52AD80' : hover_blue_bg ? '#6497b1' : '#fff')};
    }
`