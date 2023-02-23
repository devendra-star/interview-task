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
import { color } from '@mui/system';
const Home = () => (
    <>
        <Row className='home_main'>
            <Col span={12}>
                <div style={{ display: "flex", marginTop: "3rem", color: "grey" }}>
                    {footerData.map((item) => {
                        return (
                            <img src={item.img}
                                className="home_icon_website" />
                        )
                    })}
                </div>
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
                        <h1 className="home_typo">
                            Rebel against boring
                        </h1>
                        <h2 className='home_h2' >
                            We’re a creative web design agency based in London that crafts beautiful and original websites for brands who <span>refuse to blend in.</span>
                        </h2>

                    </AspectRatio>
                </Card>
                <figure ><button class="btn_fix">Start your project</button></figure>
            </Col>

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
