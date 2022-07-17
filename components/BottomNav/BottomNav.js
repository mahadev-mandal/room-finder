import { Paper, Stack, } from '@mui/material'
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from 'next/link';

function BottomNav() {
    return (
        <Paper
            elevation={2}
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                py: '5px',
                display: { md: 'none', xs: 'block' }
            }}
        >
            <Stack direction="row" justifyContent="space-around">
                <Link href="#">
                    <a>
                        <Stack alignItems="center">
                            <HomeOutlinedIcon />
                            Home
                        </Stack>
                    </a>
                </Link>
                <span variant='text' style={{cursor:'pointer'}}>
                    <Stack alignItems="center">
                        <CategoryOutlinedIcon />
                        Categories
                    </Stack>
                </span>
                <Link href="#">
                    <a>
                        <Stack alignItems="center">
                            <PersonOutlinedIcon />
                            Account
                        </Stack>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <Stack alignItems="center">
                            <FavoriteBorderOutlinedIcon />
                            Saved
                        </Stack>
                    </a>
                </Link>
            </Stack>
        </Paper>
    )
}

export default BottomNav