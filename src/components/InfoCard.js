import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const InfoCard = (props) => {
  return (
    <Card className="card">
      <CardContent className="card__content">
        <Typography variant="h5" color="textPrimary">
          {props.title}
        </Typography>
        <Typography variant="h3" color="primary">
          {props.cases}
        </Typography>
        <Typography variant="h5" color="textSecondary">
          {props.total}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
