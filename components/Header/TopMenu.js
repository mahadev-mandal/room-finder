import { Stack, Divider, Typography, IconButton } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useState } from "react";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import {
  headerPadding,
  topHeaderBg,
  topMenuColor,
} from "../../constants/constant";

function TopMenu() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      color={topMenuColor}
      sx={{
        background: topHeaderBg,
        p: headerPadding,
        height: 33,
        visibility: { xs: "hidden", md:"visible" },
      }}
    >
      {/* Top Menu Left side */}
      <Stack
        direction="row"
        alignItems="center"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ background: "#3d3d3d" }}
          />
        }
        spacing={2}
      >
        <Typography variant="caption" component="span">
          Hello! good morning
        </Typography>
        <Stack direction="row" alignItems="center">
          <GetAppIcon fontSize="12px" />
          <Typography variant="caption">Download app</Typography>
          <KeyboardArrowDownIcon fontSize="12px" />
        </Stack>
        <Stack direction="row" alignItems="center">
          <PhoneIcon fontSize="12px" />
          <Typography variant="caption" component="span">
            Customer care
          </Typography>
          <KeyboardArrowDownIcon />
        </Stack>
        <Stack direction="row" alignItems="center">
          <LocationOnIcon fontSize="12px" />
          <Typography variant="caption" component="span">
            Our location
          </Typography>
        </Stack>
      </Stack>

      {/* Top Menu Right side */}
      <Stack alignItems="center">
        <IconButton
          onClick={() => setDarkMode(!darkMode)}
          aria-label="dark mode"
          size="small"
          color="inherit"
        >
          {darkMode ? (
            <Brightness5Icon fontSize="inherit" />
          ) : (
            <NightsStayIcon fontSize="inherit" />
          )}
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default TopMenu;
