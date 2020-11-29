import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
  },
  image: {
    minWidth: 100,
  },
  content: {
    padding: 25,
    objectFit: "cover",
  },
};

class userinfo extends Component {
  render() {
    const {
      classes,
      userInfo: {
        fullName,
        location,
        email,
        phoneNumber
      },
    } = this.props;
    let googleUrl = `https://www.google.com/maps/search/${location}`;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="h5" color="textSecondary">
            {fullName}
          </Typography>
          <Typography variant="body1">{email}</Typography>
          <Typography variant="body1">{phoneNumber}</Typography>
          <Typography variant="body1">
            <a href={googleUrl} target="_blank" rel="noreferrer">{location}</a>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(userinfo);
