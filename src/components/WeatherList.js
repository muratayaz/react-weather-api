import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    backgroundColor: theme.palette.background.paper,
    maxWidth: "60ch",
  },
  inline: {
    display: "inline",
    paddingRight: 10,
  },
}));

export default function WeatherList({ data }) {
  console.log(data);
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Weather Icon" src={data.icon} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {data.date}
              </Typography>
              {data.day}
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                °C: {parseFloat(data.degree).toFixed(0)}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Max: {parseFloat(data.max).toFixed(0)}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Min: {parseFloat(data.min).toFixed(0)}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Gece: {parseFloat(data.night).toFixed(0)}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
