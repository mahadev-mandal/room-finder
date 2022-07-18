import Link from 'next/link'
import { 
    Stack, 
    Tooltip, 
    Typography 
} from "@mui/material"

import { 
    headerPadding, 
    menuBg 
} from "../../constants/constant"
import MenuIcon from '@mui/icons-material/Menu';
import Categories from "./Categories";

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
            <Tooltip
                describeChild
                title={<Categories />}
                componentsProps={{
                    tooltip: {
                      sx: {
                        background:'#fff',
                        color:'#222',
                        borderRadius:0,
                        mt:0,
                        width:200,
                        boxShadow: '0 0 10px gray',
                        borderLeft:'3px solid #ffa500',
                        height:'100%',
                        boxSizing:'border-box'
                      },
                    },
                  }}
                PopperProps={{
                    modifiers: [
                        {
                            name: "offset",
                            options: {
                                offset: [0, -15],
                            },
                        },
                    ],
                }}
            >
                <Stack
                    direction="row"
                    spacing={0.5}
                    height="100%"
                    width={200}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        background: 'orange',
                        cursor: 'pointer',
                    }}
                >
                    <MenuIcon />
                    <Typography variant="subtitle2" fontWeight="bold">ALL CATEGORIES</Typography>
                </Stack>
            </Tooltip>

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
                        <a style={{ textDecoration: 'none', color: 'black' }}>
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