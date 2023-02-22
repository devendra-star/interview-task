import React from 'react';
import { Col, Image, Row } from 'antd';
import img from '../asset/download.png'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { footerData } from './data'
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Six from './Six';
import Seven from './Seven';
import Footer from './Footer';
const Home = () => (
    <>
        <Row style={{ overflow: "hidden" }}>
            <Col span={12}>
                <img className='homeimg'
                    src={`${img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt=""
                    loading="lazy"
                />
            </Col>
            <Col span={12}>
                <Card
                    orientation="horizontal"
                    sx={{
                        width: "100%",
                        gap: 3,
                        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                    }}
                >
                    <AspectRatio ratio="1" sx={{ width: "80%" }} >
                        <Typography variant='h6' fontWeight={"bold"} top={150} >
                            We’re a creative web design agency based in London that crafts beautiful and original websites for brands who refuse to blend in.

                        </Typography>
                        <Typography variant='h1' fontSize={60} fontWeight={"bold"} marginTop={20}>
                            Rebel against boring
                        </Typography>


                    </AspectRatio>
                </Card>
            </Col>
            <Row style={{ overflow: "hidden" }}>

                <Col span={24}>
                    {footerData.map((item) => {
                        return (
                            <img src={item.img}
                                style={{
                                    height: "35px", width: "100px",
                                }} />
                        )
                    })}
                </Col>
            </Row>
        </Row>
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Six />
        <Seven />
    </>
);

export default Home;
