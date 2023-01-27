import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    py={2}
    sx={{
      px: { xs: 2, sm: 7 },
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      zIndex: 1,
    }}
  >
    <Link to="/" style={{ display: "flex", alignItem: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
