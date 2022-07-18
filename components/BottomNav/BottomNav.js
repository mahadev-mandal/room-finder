import { useState } from 'react';
import { useRouter } from 'next/router'
import {
    BottomNavigation,
    BottomNavigationAction,
    Paper,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function LabelBottomNavigation() {
    const router = useRouter()

    const [value, setValue] = useState(router.pathname);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper
            elevation={3}
            sx={{
                position: 'fixed',
                bottom: 0, left: 0,
                right: 0,
                zIndex:10000,
                display: { md: 'none', xs: 'block' }
            }}
        >
            <BottomNavigation sx={{ width: '100%' }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Home"
                    value="/"
                    icon={<HomeOutlinedIcon />}
                    onClick={() => router.push('/')}
                />
                <BottomNavigationAction
                    label="Categories"
                    value="categories"
                    icon={<CategoryOutlinedIcon />}
                />
                <BottomNavigationAction
                    label="Account"
                    value="login"
                    icon={<PersonOutlinedIcon />}
                    onClick={() => router.push('#')}
                />
                <BottomNavigationAction
                    label="Saved"
                    value="/saved"
                    icon={<FavoriteBorderOutlinedIcon />}
                    onClick={() => router.push('#')}
                />
            </BottomNavigation>
        </Paper>
    );
}
