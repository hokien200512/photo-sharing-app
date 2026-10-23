import React from "react";
import { Button, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography variant="body1">User not found.</Typography>;
  }

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body1">
        <b>Location:</b> {user.location}
      </Typography>
      <Typography variant="body1">
        <b>Description:</b> {user.description}
      </Typography>
      <Typography variant="body1">
        <b>Occupation:</b> {user.occupation}
      </Typography>
      <div style={{ marginTop: 20 }}>
        <Button
          variant="contained"
          component={Link}
          to={`/photos/${user._id}`}
        >
          See Photos
        </Button>
      </div>
    </div>
  );
}

export default UserDetail;
