import React from "react";
import { Button, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <span>Không tìm thấy người dùng.</span>;
  }

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <p><b>Nghề nghiệp:</b> {user.occupation}</p>
      <p><b>Địa chỉ:</b> {user.location}</p>
      <p><b>Mô tả:</b> {user.description}</p>
      <div style={{ marginTop: 20 }}>
        <Button
          variant="contained"
          component={Link}
          to={`/photos/${user._id}`}
        >
          Xem ảnh của {user.first_name}
        </Button>
      </div>
    </div>
  );
}

export default UserDetail;
