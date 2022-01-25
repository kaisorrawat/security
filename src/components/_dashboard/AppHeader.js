import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, ButtonBase, Button } from "@material-ui/core";
import logo from './1.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    // maxWidth: 500,
  },
  image: {
    width: 64,
    height: 64,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  color: {
    color: theme.palette.secondary.main,
    fontSize: "40px",
  },
  alert: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: "1px solid",
    textAlign: "center",
  },
}));

const AppHeader = () => {
  const classes = useStyles();

  const getCurrentDate = () => {
    const d = new Date();

    const result = d.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });

    return result;
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={logo}
              />
            </ButtonBase>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" className={classes.color}>
              EGAT
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm
            container
            justifyContent="center"
            alignItems="center"
            direction="row"
            spacing={1}
          >
            <Grid item lg={8} md={12} >
              <Typography variant="h3">
                Southern Bangkok Power Plant Monitoring
              </Typography>
            </Grid>
            <Grid item lg={2} md={3} >
              <Button variant="contained" color="secondary">
                Export Data
              </Button>
            </Grid>
            <Grid item lg={2} md={5} >
              <div className={classes.alert}>
                <Typography variant="subtitle1">{getCurrentDate()}</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AppHeader;
