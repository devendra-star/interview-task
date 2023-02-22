import React from "react";
import { Box, Row, Column, FooterLink, Heading, } from "./FooterStyles";
import { footerData } from './data'
import { Container, Typography } from "@mui/material";
import { AiFillTwitterCircle, AiOutlineInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
    return (
        <Box >
            <Container maxWidth="xl" sx={{ mt: "10rem", mb: "10rem" }} >
                <Row>
                    <Column>
                        <FooterLink href="#">Home</FooterLink>
                        <FooterLink href="#">Work</FooterLink>
                        <FooterLink href="#">Services</FooterLink>
                        <FooterLink href="#">Agency</FooterLink>
                        <FooterLink href="#">Blog</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                        <FooterLink href="#">FAQs</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                    </Column>
                    <Column>
                        <Heading>EXPERTS IN</Heading>
                        <FooterLink href="#">Hospitality</FooterLink>
                        <FooterLink href="#">Property and Architecture</FooterLink>
                        <FooterLink href="#">Film And Television</FooterLink>
                        <FooterLink href="#">Business to Business</FooterLink>
                    </Column>
                    <Column>
                        <Heading>OFFICES</Heading>
                        <FooterLink href="#">London</FooterLink>
                        <FooterLink href="#">New York</FooterLink>

                    </Column>
                    <Column style={{ marginLeft: "15rem" }}>
                        <Heading style={{ marginLeft: "15rem" }}>FOLLOW</Heading>
                        <Row style={{ display: "flex" }}>
                            <FooterLink href="#">
                                <AiFillTwitterCircle size={70} />
                            </FooterLink>
                            <FooterLink href="#">
                                <AiOutlineInstagram size={70} />
                            </FooterLink>
                            <FooterLink href="#">
                                <AiFillFacebook size={70} />
                            </FooterLink>
                            <FooterLink href="#">
                                <AiFillLinkedin size={70} />
                            </FooterLink>
                        </Row>
                        <Typography sx={{ alignSelf: "start", marginTop: "2rem", width: "20rem", fontSize: 20, fontWeight: 'bold', color: "whitesmoke" }}>Sign up to our newsletter</Typography>
                        <Typography sx={{ mr: "20rem", marginTop: "2rem", fontSize: 50, fontWeight: 'bold', color: "whitesmoke" }}>hello@kota.co.uk</Typography>
                    </Column>

                </Row>
                <div style={{ display: "flex", marginTop: "5rem" }}>
                    {footerData.map((item) => {
                        return (
                            <img src={item.img}
                                style={{
                                    height: "35px", width: "100px", marginLeft: "65px"
                                }} />
                        )
                    })}
                </div>
            </Container>
        </Box>
    );
};
export default Footer;
