import { Divider, Grid, IconButton, InputBase, Paper, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/images/header-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { headerPadding, navBg, navColor } from "../../constants/constant";
import MenuIcon from "@mui/icons-material/Menu";
import styles from './Header.module.css'
import { Box } from "@mui/system";

function Nav() {
  return (
    <Grid container
      alignItems="center"
      columnGap={4}
      sx={{
        background: navBg,
        color: navColor,
        p: headerPadding,
        height: { md: 80, xs: 90 },
      }}
    >
      <Grid item xs={12} md={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <IconButton aria-label="menu" size="large" sx={{ display: { md: 'none', xs: 'inline',  }, color:'white'}}>
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <a>
              <Image width={100} height={35} src={logo} alt="room finder logo" />
            </a>
          </Link>
          <Box sx={{ display: { md: 'none', xs: 'inline' } }}>
            <Link href="#">
              <a className={styles.navAnchor}>
                <FavoriteBorderIcon />
              </a>
            </Link>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={true}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: { md: 40, xs: 30 },
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="What are you looking for?"
            inputProps={{ "aria-label": "search rooms or flats" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item display={{ md: "inline-block", xs: "none" }}>
        <Link href="#">
          <a className={styles.navAnchor}>
            <Stack alignItems="center" >
              <PersonOutlineIcon fontSize="medium" />
              Account
            </Stack>
          </a>
        </Link>
      </Grid>
      <Grid item display={{ md: "inline-block", xs: "none" }}>
        <Link href="#">
          <a className={styles.navAnchor}>
            <Stack alignItems="center">
              <FavoriteBorderIcon />
              Saved
            </Stack>
          </a>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Nav;
