import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import video from '../asset/Animation-v3.mp4'
import { Col, Image, Row } from 'antd';


function Second() {
    return (
        <>
            <Row>
                <Col span={12}>
                    <Card
                        orientation="horizontal"
                        sx={{
                            width: "100%",
                            gap: 3,
                            '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                        }}
                    >
                        <AspectRatio ratio="1" sx={{ width: "100%" }}>

                            <video
                                autoPlay
                                loop
                                muted
                                poster="https://assets.codepen.io/6093409/river.jpg"
                            >
                                <source
                                    src={video}
                                    type="video/mp4"
                                />
                            </video>
                        </AspectRatio>
                    </Card>
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
                            <h1 className="second_h1">
                                Making brands a damn site better
                            </h1>
                            <p className='second_p'>
                                Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.

                            </p>



                        </AspectRatio>
                    </Card>
                </Col>
            </Row>
        </>
        //<Card
        //     orientation="horizontal"
        //     sx={{
        //         width: "100%",
        //         gap: 3,
        //         '&:hover': {boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        //     }}
        // >
        //     <AspectRatio ratio="1" sx={{ width: "100%" }}>
        //         <video
        //             autoPlay
        //             loop
        //             muted
        //             poster="https://assets.codepen.io/6093409/river.jpg"
        //         >
        //             <source
        //                 src={video}
        //                 type="video/mp4"
        //             />
        //         </video>
        //     </AspectRatio>
        //     <AspectRatio ratio="1" sx={{ width: "80%" }} >
        //         <Typography variant='h1' fontSize={60} fontWeight={"bold"} sx={{ mt: 20 }}>
        //             Making brands a damn site better
        //         </Typography>
        //         <p variant='h1'>
        //             Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.
        //         </p>
        //     </AspectRatio>
        // </Card>

    );
}

export default Second
// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
// import CardCover from '@mui/joy/CardCover';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import video from '../asset/Animation-v3.mp4'
// import { Grid } from '@mui/material';
// function Second() {
//     return (
//         <div>
//             <Grid container spacing={2} columns={12} sx={{ flexGrow: 1 }}>
//                 <Grid xs={8}>
//                     <Item>
//                         <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
//                             <CardCover>
//                                 <video
//                                     autoPlay
//                                     loop
//                                     muted
//                                     poster="https://assets.codepen.io/6093409/river.jpg"
//                                 >
//                                     <source
//                                         src={video}
//                                         type="video/mp4"
//                                     />
//                                 </video>
//                             </CardCover>
//                             <CardContent>
//                                 <Typography
//                                     level="h6"
//                                     fontWeight="lg"
//                                     textColor="#fff"
//                                     mt={{ xs: 12, sm: 18 }}
//                                 >
//                                     Video
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Item>
//                 </Grid>
//                 <Grid xs={8}>
//                     <Item></Item>
//                 </Grid>
//             </Grid>
//         </div>

//     );
// }

// export default Second;