import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");

  let context = "Photo Sharing App";

  if (pathParts[1] === "users" && pathParts[2]) {
    const user = models.userModel(pathParts[2]);
    if (user) {
      context = `${user.first_name} ${user.last_name}`;
    }
  } else if (pathParts[1] === "photos" && pathParts[2]) {
    const user = models.userModel(pathParts[2]);
    if (user) {
      context = `Photos of ${user.first_name} ${user.last_name}`;
    }
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit">
          Hồ Tuấn Hưng
        </Typography>
        <Typography variant="h6" color="inherit">
          {context}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
