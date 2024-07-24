import React, { useState } from 'react';
import { IoHome, IoPersonCircleSharp, IoFlash } from "react-icons/io5";
import { AiFillProject, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { MdArrowForwardIos } from 'react-icons/md';
import { colors } from './globals/colors';
import DarkMode from "./DarkMode/DarkMode";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Nav>
            <NavbarContainer>
                <Sidebar>
                    <FullIcon onClick={toggle}>
                        <MdArrowForwardIos />
                    </FullIcon>
                    <SidebarContainer isOpen={isOpen} onClick={toggle}>
                        <SidebarWrapper>
                            <SidebarMenu>
                                <SidebarLinkHome style={{ border: `2.5px solid ${colors.navHomeDark}` }} activeClass="active" to='home' smooth='easeInCubic' duration={500} spy exact offset={-500}>
                                    <IoHome />
                                </SidebarLinkHome>
                                <SidebarLinkIntro style={{ background: `${colors.navIntro}`, border: `2.5px solid ${colors.navIntroDark}` }} activeClass="active" to='about' smooth='easeInCubic' duration={500} spy exact>
                                    <IoPersonCircleSharp />
                                </SidebarLinkIntro>
                                <SidebarLinkHobbies style={{ background: `${colors.navHobbies}`, border: `2.5px solid ${colors.navHobbiesDark}` }} activeClass="active" to='skills' smooth='easeInCubic' duration={500} spy exact offset={-100}>
                                    <IoFlash />
                                </SidebarLinkHobbies>
                                <SidebarLinkProject style={{ background: `${colors.navProject}`, border: `2.5px solid ${colors.navProjectDark}` }} activeClass="active" to='projects' smooth='easeInCubic' duration={500} spy exact offset={-100}>
                                    <AiOutlineFundProjectionScreen />
                                </SidebarLinkProject>
                                <SidebarLinkSkills style={{ background: `${colors.navSkills}`, border: `2.5px solid ${colors.navSkillsDark}` }} activeClass="active" to='skills' smooth='easeInCubic' duration={500} spy exact offset={-100}>
                                    <AiFillProject />
                                </SidebarLinkSkills>
                                <SidebarLinkContact style={{ background: `${colors.navContact}`, border: `2.5px solid ${colors.navContactDark}` }} activeClass="active" to='social' smooth='easeInCubic' duration={500} spy exact>
                                    <MdContactMail />
                                </SidebarLinkContact>
                            </SidebarMenu>
                        </SidebarWrapper>
                    </SidebarContainer>
                </Sidebar>

            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;

// Styling
const Nav = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 99;
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    max-width: 1100px;
    margin-top: 20px;
`;

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.375s ease;
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    margin-left: 5.9rem;
    width: 370px;
    height: 100px;

    @media screen and (max-width: 768px) {
        width: 60px;
        height: 450px;
        margin-left: 0.9rem;
        margin-top: 3.5rem;
        transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
    }
`;

const SidebarWrapper = styled.div`
    display: flex;
    justify-content: flex-end; /* Align items to the right */
    align-items: center;
    width: 100%;
    margin-left: 400px;
    margin-bottom: 40px;
`;

const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-row-gap: 1.5rem;
    }
`;

const SidebarLinkHome = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.375s;
    color: ${colors.navHomeDark};
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    position: relative;

    &.active {
        color: #fff;
    }
`;

const SidebarLinkIntro = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.375s;
    color: ${colors.navIntroDark};
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    position: relative;

    &.active {
        color: #fff;
    }
`;

const SidebarLinkHobbies = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.375s;
    color: ${colors.navHobbiesDark};
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    position: relative;

    &.active {
        color: #fff;
    }
`;

const SidebarLinkProject = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.375s;
    color: ${colors.navProjectDark};
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    position: relative;

    &.active {
        color: #fff;
    }
`;

const SidebarLinkSkills = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.375s;
    color: ${colors.navSkillsDark};
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    position: relative;

    &.active {
        color: #fff;
    }
`;

const SidebarLinkContact = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.375s;
    color: ${colors.navContactDark};
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    position: relative;

    &.active {
        color: #fff;
    }
`;

const DarkModeWrapper = styled.div`
    margin-left: 1030px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    height: 80px; /* Ensure the height is consistent with NavbarContainer */
`;

const FullIcon = styled.div`
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    margin-left: 1.4rem;
    opacity: 0.5;
    transition: 0.375s;
    color: ${colors.mainPurple};

    &:hover {
        opacity: 1;
    }
    
    @media screen and (max-width: 768px) {
        rotate: 90deg;
        margin-left: 0rem;
        right: 0.9rem;
    }
`;
