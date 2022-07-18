import {
    MenuItem,
    MenuList,
} from '@mui/material'
import { categories } from '../../constants/constant'

function Categories() {
    return (
        <MenuList>
            {categories.map((category) => (
                <MenuItem
                    key={category}
                    sx={{
                        fontSize: 13,
                        textTransform: 'capitalize'
                    }}
                >
                    {category}
                </MenuItem>
            ))}
        </MenuList>
    )
}

export default Categories