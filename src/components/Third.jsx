import * as React from "react";
import { Col, Row } from 'antd';
import Card from '@mui/joy/Card';
import imgdata from './data'
import { Typography } from "@mui/material";



function Third() {
    return (
        <>
            <div style={{ opacity: 1 }} className="heding_third">
                <p>Our creative digital agency designs and develops bespoke websites with <strong>three things in mind;</strong></p>
            </div>
            {imgdata.map((item) => {
                return (
                    <Row style={{ overflow: "hidden" }}>

                        <Col span={12}>
                            <Card
                                orientation="verticle"
                                sx={{
                                    marginTop: "7rem",
                                    width: "100%",
                                    gap: 3,
                                    '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                                }}
                            >
                                <Typography variant="h4" fontWeight={"bolder"} fontSize={"4.123rem"} lineHeight={1.235} letterSpacing={"0.0999em"}><span className="third_span">{item.number}</span>{item.heding}</Typography>
                                <p className="p_third">{item.text}</p>

                            </Card>
                        </Col>
                        <Col span={12} className="third_image_wrapper">
                            <img className="thirdsimg"
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt=""
                                loading="lazy"
                            />
                        </Col>
                    </Row>
                )
            })
            }

        </>
    )
}

export default Third