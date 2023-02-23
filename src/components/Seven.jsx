import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import { seven } from './data'
function Seven() {
    return (
        <div>
            <Typography sx={{ alignSelf: "start", mr: "50rem", fontSize: 50, fontWeight: 'bold' }}>Latest Articles</Typography>
            <Container maxWidth="lg" sx={{ diosplay: "flex", mt: "2rem", mb: "10rem", }} >
                <Box className="seven_img"
                    component="ul"
                    sx={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
                >
                    {seven.map((item) => {
                        return (
                            <Card variant="outlined" sx={{
                                display: "flex",
                                width: 320,
                            }}>

                                <CardOverflow>
                                    <AspectRatio ratio="2">
                                        <img
                                            src={item.img}
                                            alt="image not found"
                                        />
                                    </AspectRatio>
                                </CardOverflow>
                                <div style={{ textAlign: "left", marginTop: "1.2rem" }}><span>{item.head.toUpperCase()} </span>
                                    <h2 style={{ fontWeight: "bold", fontSize: 20, fontFamily: "sans-serif", marginTop: "1.2rem" }}>{item.text}</h2>
                                </div>
                            </Card>
                        )
                    })}

                </Box>
                <Box sx={{ gap: 2, flexWrap: 'wrap', mt: "5rem", alignSelf: "center", }}>
                    <Button color="error" variant="outlined" size="large" sx={{ borderRadius: "25px" }}>View all blog posts</Button>
                </Box>
            </Container>
        </div>
    );
}

export default Seven