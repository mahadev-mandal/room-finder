import { Stack } from "@mui/material"
import Menu from "./Menu"
import Nav from "./Nav"
import TopMenu from "./TopMenu"

function Header() {
   
    return (
        <header>
            <Stack>
                <TopMenu />
                <Nav />
                <Menu />
            </Stack>
            
        </header>
    )
}

export default Header