import { Stack, Typography } from "@mui/material"
import { headerPadding, menuBg } from "../../constants/constant"
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'

const categories = ['rooms', 'flat', 'apartment', 'buiding']

function Menu() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            height={35}
            sx={{
                background: menuBg,
                p: headerPadding,
                display: { xs: "none", md: "flex" }
            }}
        >
            <Stack
                direction="row"
                spacing={0.5}
                height="100%"
                alignItems="center"
                sx={{
                    background: 'orange',
                    p: '0 20px'
                }}
            >
                <MenuIcon />
                <Typography variant="subtitle2">ALL CATEGORIES</Typography>
            </Stack>
            {categories.map((item) => (

                <Stack
                    key={item}
                    height="100%"
                    alignItems="center"
                    direction="row"
                    sx={{
                        p: '0 25px',
                        textTransform: 'uppercase',
                        '&:hover': {
                            background: 'white'
                        }
                    }}
                >
                    <Link href="#">
                        <a style={{textDecoration:'none', color:'black'}}>
                            <Typography variant="subtitle2">{item}</Typography>
                        </a>
                    </Link>
                </Stack>
            ))
            }
        </Stack >
    )
}

export default Menu