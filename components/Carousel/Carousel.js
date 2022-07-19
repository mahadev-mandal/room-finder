import {
    Box,
    IconButton
} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PropTypes from 'prop-types'

import Card from '../Card/Card';

// This will override default arrow of react-slick slider
function CustomPrevArrow({ onClick }) {

    return (
        <Box style={{ display: 'block', zIndex: 1, left: 5, }} className="slick-arrow slick-prev">
            <IconButton
                onClick={onClick}
                sx={{
                    '&:hover': { color: 'black', transition: '300ms', },
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
        </Box>
    )
}
function CustomNextArrow({ onClick }) {
    return (
        <Box style={{ display: 'block', zIndex: 1, right: 25, }} className="slick-arrow slick-next">
            <IconButton
                onClick={onClick}
                sx={{
                    '&:hover': { color: 'black', transition: '300ms', },
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box >
    )
}


function Carousel({ data }) {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        initialSlide: 0,
        lazyLoad: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: false,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: false,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: false,
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {data.map((item) => (
                <div key={item.cardTitle}>
                    <Card
                        imgLink={item.imgLink}
                        cardTitle={item.cardTitle}
                        dateAdded={item.dateAdded}
                        price={item.price}
                    />
                </div>
            ))}
        </Slider>
    )
}

Carousel.propTypes = {
    data: PropTypes.object,
}
CustomPrevArrow.propTypes = {
    onClick: PropTypes.func,
}
CustomNextArrow.propTypes = {
    onClick: PropTypes.func,
}

export default Carousel
