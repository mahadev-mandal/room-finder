import { Divider, } from "@mui/material"
import Menu from "./Menu"
import Nav from "./Nav"
import TopMenu from "./TopMenu"
// import PersistentDrawerLeft from '../../HOC/PersistentDrawer/PersistentDrawer'

function Header() {

    return (
        <header>
            <TopMenu />
            <Nav />
            <Divider
                sx={{
                    background: 'yellow',
                    borderBottomWidth: 5,
                    display: { md: 'none', xs: 'block' }
                }}
            />
            <Menu />
            {/* <PersistentDrawerLeft /> */}
        </header>
    )
}

export default Header