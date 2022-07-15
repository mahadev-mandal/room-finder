import { Stack, Typography } from "@mui/material"
import { menuBg } from "../../constants/constant"
import MenuIcon from '@mui/icons-material/Menu';

const categories = ['rooms', 'flat', 'apartment', 'buiding']

function Menu() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            height={35}
            sx={{ background: menuBg, p: '0 35px' }}
        >
            <Stack direction="row" spacing={0.5} height="100%" alignItems="center" sx={{ background: 'orange', p: '0 20px' }}>
                <MenuIcon />
                <Typography variant="subtitle2">ALL CATEGORIES</Typography>
            </Stack>
            {categories.map((item) => (
                <Stack key={item} sx={{ p: '0 25px', textTransform: 'uppercase' }}>
                    <Typography variant="subtitle2">{item}</Typography>
                </Stack>
            ))}
        </Stack>
    )
}

export default Menu