import * as React from "react";
import { Col, Row } from 'antd';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

import { Button } from "@mui/material";



function Fourth() {
    return (
        <>

            <Row className="fourt_container">
                <Col span={12}>
                    <Card
                        orientation="verticle"
                        sx={{
                            marginTop: "10rem",
                            width: "100%",
                            gap: 3,
                            '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                        }}
                    >
                        <Typography variant="h1"
                        >Website Design & Development
                        </Typography>
                        <Typography variant="h2">Branding</Typography>
                        <Typography variant="h2">Digital Marketing</Typography>
                        <Button color="error" variant="outlined" size="large" sx={{ width: 200, borderRadius: "25px", marginLeft: "15rem" }}>View all services</Button>
                    </Card>
                </Col>
                <Col span={12} className="third_image_wrapper">
                    <img className="thirdsimg"
                        src="https://kota.co.uk/static/489c980a82262c75fc5296e908dc5221/17f62/websites.webp"
                        alt=""
                        loading="lazy"
                    />
                </Col>
            </Row>

        </>
    )
}

export default Fourth

// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import { Grid, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

// function Fourth() {
//     return (
//         <React.Fragment >
//             <div>
//                 <Box className="fourth">

//                     <Container maxWidth="xl" className='container'>

//                         <p>OUR SERVICES</p>
//                         <Grid container spacing={3} >

//                             <Grid item xs={6}>

//                                 <Typography variant="h1"
//                                     noWrap
//                                     component="div"
//                                 >Website Design & Development
//                                 </Typography>
//                                 <Typography variant="h2">Branding</Typography>
//                                 <Typography variant="h2">Digital Marketing</Typography>
//                                 <Link to="#" ><button>View all services</button></Link>

//                             </Grid>
//                             <Grid item xs={6}>
//                                 <Box
//                                     component="img"
//                                     sx={{
//                                         height: 664,
//                                         width: "100%",
//                                         // maxHeight: { xs: 733, md: 167 },
//                                         // maxWidth: { xs: 2980, md: 250 },
//                                     }}
//                                     alt="The house from the offer."
//                                     src="https://kota.co.uk/static/489c980a82262c75fc5296e908dc5221/17f62/websites.webp"
//                                 />
//                             </Grid>
//                         </Grid>


//                     </Container>
//                 </Box>
//             </div>
//         </React.Fragment>
//     );
// }

// export default Fourth
// // import * as React from "react";
// // import Paper from "@mui/material/Paper";
// // import Stack from "@mui/material/Stack";
// // import { styled } from "@mui/material/styles";
// // import { Grid, Typography } from "@mui/material";
// // import { Box } from "@mui/system";
// // import imgdata from './data.js'
// // import { Button } from "bootstrap";
// // import { Link } from "react-router-dom";

// // const Item = styled(Paper)(({ theme }) => ({
// //     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
// //     ...theme.typography.body2,
// //     padding: theme.spacing(1),
// //     textAlign: "center",
// //     color: theme.palette.text.secondary
// // }));

// // function Fourth() {
// //     return (
// //         <Box sx={{ flexGrow: 1, mt: 1 }}>
// //             <p>OUR SERVICES</p>
// //             <Grid container spacing={3} >

// //                 <Grid item xs={6}>

// //                     <Typography variant="h1"
// //                         noWrap
// //                         component="div"
// //                     >Website Design & Development
// //                     </Typography>
// //                     <Typography variant="h2">Branding</Typography>
// //                     <Typography variant="h2">Digital Marketing</Typography>
// //                     <Link to="#" ><button>View all services</button></Link>

// //                 </Grid>
// //                 <Grid item xs={6}>
// //                     <Box
// //                         component="img"
// //                         sx={{
// //                             height: 664,
// //                             width: "100%",
// //                             // maxHeight: { xs: 733, md: 167 },
// //                             // maxWidth: { xs: 2980, md: 250 },
// //                         }}
// //                         alt="The house from the offer."
// //                         src="https://kota.co.uk/static/489c980a82262c75fc5296e908dc5221/17f62/websites.webp"
// //                     />
// //                 </Grid>
// //             </Grid>
// //             )


// //         </Box>
// //     )
// // }

// // export default Fourth