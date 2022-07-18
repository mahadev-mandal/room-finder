import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import a from '../../assets/images/a.jpg'
import b from '../../assets/images/b.jpg'
import c from '../../assets/images/c.jpg'
import d from '../../assets/images/d.jpg'

function Card() {
    return (
        <Paper sx={{ minWidth: 300, p: 1, boxSizing:'border-box', }}>
            <Box sx={{ width: '100%', height: '400px', position: 'relative',boxSizing:'border-box' }}>
                <Image src={d} alt="" layout='fill'
                    objectFit='cover' />
            </Box>
            <Typography variant='subtitle1'>1BHK flat available for rent in Koteshwor </Typography>
            <Typography variant='caption' sx={{ color: '#888' }}>6 days ago</Typography>
            <Typography variant='subtitle1' fontWeight="bold">RS.10000</Typography>
        </Paper>
    )
}

export default Card