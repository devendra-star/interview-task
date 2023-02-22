import * as React from 'react';
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { itemData } from './data';
import { Grid } from '@mui/material';
import Typography from '@mui/joy/Typography';
import { Container } from '@mui/system';
export default function StandardImageList() {
    const Item = styled(Sheet)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.vars.palette.text.tertiary
    }));
    return (
        <div>
            <Typography sx={{ alignSelf: 'center', mt: '10rem', mb: "-5rem", fontSize: 50, fontWeight: 'bold' }}>Our Clients</Typography>

            <Container maxWidth="xl" sx={{ mt: "10rem", mb: "10rem" }} >
                <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                    {itemData.map((item) => (
                        <Grid xs={3} sx={{ marginTop: "1rem" }}>
                            <Item>
                                <img
                                    size="sm"
                                    src={item.img}
                                    alt="d"
                                />
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}


