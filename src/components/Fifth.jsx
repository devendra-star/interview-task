import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from '@mui/material';
import img from '../asset/home_work_logo.svg'
import { Container } from '@mui/system';

export default function Fifth() {
    return (
        <Box bgcolor={"black"}>
            <Container maxWidth="xl" className='container' sx={{ backgroundColor: "black" }}>

                <ImageList variant="masonry" cols={2} gap={20} sx={{ backgroundColor: "black" }}>
                    <ImageListItem >

                        <img
                            src={`${img}?w=248&fit=crop&auto=format`}
                            srcSet={`${img}?w=248&fit=crop&auto=format`}
                            alt="Shit-hot work for hot-shot brands"
                            loading="lazy"
                        />
                        <Typography>Shit-hot work for hot-shot brands</Typography>
                        <ImageListItemBar position="below" />
                    </ImageListItem>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            />
                            <div style={{ marginTop: "2rem" }}>
                                <span>Branding </span>
                                <span>E-Commerce </span>
                                <span>Marketing </span>
                                <span>Video</span>
                                <span>Web Design</span>
                                <h2 className="h2">{item.title}</h2>
                                <p style={{ color: "white", fontWeight: "bolder" }}>{item.author}</p></div>
                        </ImageListItem>
                    ))}

                </ImageList>
            </Container>
        </Box>
    );
}

const itemData = [
    {
        img: 'https://kota.co.uk/static/19c87b9dd7f7883d03adc3bf10ca35cc/49d6b/1.-Main-Screen.webp',
        title: 'Wogan Coffee',
        author: "We completely transformed the image of Bristol's finest coffee company.",
    },
    {
        img: 'https://kota.co.uk/static/05077cc2cf84c8f3bcbf1c870876165e/e7405/featured-square.webp',
        title: 'Books',
        author: 'Pavel Nekoranec',
    },
    {
        img: 'https://kota.co.uk/static/179442862ace91d48defedb4c0606dec/e7405/featured-portrait.webp',
        title: 'Sink',
        author: 'Charles Deluvio',
    },
    {
        img: 'https://kota.co.uk/static/f8c99538d926ed07bb3c3c366ae1f3e0/16643/featured-square-2.webp',
        title: 'Kitchen',
        author: 'Christian Mackie',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
        author: 'Darren Richardson',
    },
    {
        img: 'https://kota.co.uk/static/867a4758df15b7ecb82d7fb874495f75/e7405/featured-square.webp',
        title: 'BellSant',
        author: 'We fully branded a pioneering healthcare concept in the USA.',
    },
    {
        img: 'https://kota.co.uk/static/fefab6cc8dfcb1f77ef9bce5ee94be0b/e7405/featured-portrait.webp',
        title: 'BellSant',
        author: 'We fully branded a pioneering healthcare concept in the USA.',
    },
    {
        img: 'https://kota.co.uk/static/3a631bc0d95b48893fb787175d3fa485/e7405/featured-square.webp',
        title: 'Bounce',
        author: 'We designed a highly animated and playful website for Bounce, the home of ping pong.',
    },
    {
        img: 'https://kota.co.uk/static/0d501a356709d373f731862f58be8585/e7405/matchroom-thumbnail-portrait.webp',
        title: 'Matchroom',
        author: 'We put the punch into one of the biggest sports promoters in the world.',
    },
    {
        img: 'https://kota.co.uk/static/897770c3eaa9442a172729610660caf1/4e70a/stoli-featured-square.webp',
        title: 'Stoli Group',
        author: "We refined this brand's positioning in the premium alcoholic beverage market.",
    },

];
