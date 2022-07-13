import { Stack } from "@mui/material"
import Nav from "./Nav"
import TopMenu from "./TopMenu"

function Header() {
   
    return (
        <header>
            <Stack>
                <TopMenu />
                <Nav />
            </Stack>
            
        </header>
    )
}

export default Header