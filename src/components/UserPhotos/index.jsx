import React from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (!photos || photos.length === 0) {
    return <Typography variant="body1">No photos found.</Typography>;
  }

  return (
    <div>
      {photos.map((photo) => (
        <Card key={photo._id} variant="outlined" style={{ marginBottom: 20 }}>
          <CardContent>
            <div style={{ textAlign: "center" }}>
              <img
                src={require(`../../images/${photo.file_name}`)}
                alt={photo.file_name}
                style={{ maxWidth: "100%", maxHeight: 400 }}
              />
            </div>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: 8 }}>
              {new Date(photo.date_time).toLocaleString()}
            </Typography>

            <Divider style={{ margin: "12px 0" }} />

            {photo.comments && photo.comments.length > 0 && (
              <div>
                <Typography variant="subtitle2">
                  Comments:
                </Typography>
                {photo.comments.map((comment) => (
                  <div key={comment._id} style={{ marginTop: 8, padding: 8, background: "#f5f5f5" }}>
                    <Typography variant="body2">
                      <Link to={`/users/${comment.user._id}`} style={{ fontWeight: "bold" }}>
                        {comment.user.first_name} {comment.user.last_name}
                      </Link>
                      <span style={{ color: "#666", marginLeft: 10, fontSize: "0.85em" }}>
                        {new Date(comment.date_time).toLocaleString()}
                      </span>
                    </Typography>
                    <Typography variant="body1" style={{ marginTop: 4 }}>
                      {comment.comment}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
