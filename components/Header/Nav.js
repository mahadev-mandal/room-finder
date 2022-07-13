import { Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../assets/images/header-logo.png'

function Nav() {
    return (
        // middle header
        <Stack height={80} direction="row" spacing={2} alignItems="center" sx={{ background: 'green', p: "10px 35px" }}>
            <Stack minWidth={100} height={60} sx={{ background: 'red' }}>
                <Image layout="fill" objectFit="contain" src={logo} alt="" />
            </Stack>
            <Stack>
                kjkldjlkfsd
            </Stack>
            <Stack>
                kjkldjlkfsd
            </Stack>
        </Stack>
    )
}

export default Nav