import * as React from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kaohsiung Travel
          </Typography>
          <Button
            color="inherit"
            onClick={(e) => {
              navigate(`/places`, { state: {} });
            }}
          >
            景點清單
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
