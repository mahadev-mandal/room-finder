import { Divider, IconButton, InputBase, Paper, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/images/header-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { navBg } from "../../constants/constant";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  return (
    // middle header
    <Stack
      // height={{md:80, xs:100}}
      spacing={2}
      color="white"
      direction={{ md: "row", xs: "column" }}
      alignItems="center"
      sx={{
        background: navBg,
        p: "10px 35px",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
        <MenuIcon fontSize="large" />
        <Stack>
          <Link href="/">
            <Image width={200} height={50} src={logo} alt="room finder logo" />
          </Link>
        </Stack>
        <FavoriteBorderIcon fontSize="large" />
      </Stack>
      <Stack width="100%">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "40px",
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
      </Stack>
      <Stack alignItems="center" display={{ md: "inline-block", xs: "none" }}>
        <PersonOutlineIcon fontSize="medium" />
        Account
      </Stack>
      <Stack alignItems="center" display={{ md: "inline-block", xs: "none" }}>
        <FavoriteBorderIcon />
        Saved
      </Stack>
    </Stack>
  );
}

export default Nav;
