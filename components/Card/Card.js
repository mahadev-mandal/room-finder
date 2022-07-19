import Image from 'next/image'
import {
    Box,
    Paper,
    Typography
} from '@mui/material'
import PropTypes from 'prop-types'
import moment from 'moment'

function Card({ imgLink, cardTitle, dateAdded, price, }) {
    return (
        <Paper
            elevation={3}
            sx={{
                p: 1,
                m: 1,
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: 260,
                    position: 'relative',
                    boxSizing: 'border-box'
                }}
            >
                <Image src={imgLink} alt={cardTitle} layout='fill' objectFit='cover' />
            </Box>
            <Typography variant='subtitle1'>{cardTitle}</Typography>
            <Typography variant='caption' sx={{ color: '#888' }}>{moment(dateAdded).fromNow()}</Typography>
            <Typography variant='subtitle1' fontWeight="bold">RS.{price}</Typography>
        </Paper>
    )
}

Card.propTypes = {
    imgLink: PropTypes.string,
    cardTitle: PropTypes.string,
    dateAdded: PropTypes.instanceOf(Date),
    price: PropTypes.number,
}

export default Card

