import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  Fab,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  borderGreen: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: "1px solid green",
  },
  borderRed: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: "1px solid red",
  },
  borderBlue: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: "1px solid blue",
  },
}));

const AppTables = () => {
  const classes = useStyles();

  const getCurrentDate = () => {
    const d = new Date();

    const result = d.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return result;
  };

  const getCurrentTime = () => {
    const d = new Date();

    const result = d.toLocaleTimeString("th-TH", {
      hour: "numeric",
      minute: "numeric",
    });

    return result;
  };

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Card className={classes.borderBlue}>
            <Typography gutterBottom variant="subtitle1" align="center">
              อาคารที่ทำการโรงไฟฟ้าพระนครใต้ {getCurrentDate()}{" "}
              {getCurrentTime()}
            </Typography>
            <Grid container spacing={2}>
              {/* <Grid item>
                <Fab color="primary" aria-label="add">
                  <Typography variant="button" display="block" gutterBottom>
                    1
                  </Typography>
                </Fab>
              </Grid> */}

              <Grid item xs={12} sm container spacing={2}>
                {/* <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      อาคารที่ทำการโรงไฟฟ้าพระนครใต้ {getCurrentDate()}{" "}
                      {getCurrentTime()}
                    </Typography>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderBlue}>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          {getCurrentDate()}
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          {getCurrentTime()}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid> */}
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderGreen}>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          align="center"
                        >
                          Solar production Daily
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          {`0000.00`}
                        </Typography>
                      </Card>
                    </Box>
                    {/* <Box mt={1}>
                      <div className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Air-condition`}
                        </Typography>
                      </div>
                    </Box> */}
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Air-condition`}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          {`0000.00`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    {/* <Typography gutterBottom variant="subtitle1">
                      Battery Power Daily
                    </Typography> */}
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderGreen}>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          align="center"
                        >
                          Battery Power Daily
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          {`0000.00`}
                        </Typography>
                      </Card>
                    </Box>
                    {/* <Box mt={1}>
                      <div className={classes.borderRed}>
                        <Typography variant="subtitle1" align="center">
                          {`Energy Consumption Lights&Plugs`}
                        </Typography>
                      </div>
                    </Box> */}
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Lights&Plugs`}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          {`0000.00`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>

          <Card className={classes.borderBlue}>
            <Typography gutterBottom variant="subtitle1" align="center">
              อาคารสถานพยาบาล {getCurrentDate()} {getCurrentTime()}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container spacing={2}>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Air-condition`}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          {`0000.00`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Lights&Plugs`}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          {`0000.00`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>

          <Card className={classes.borderBlue}>
            <Typography gutterBottom variant="subtitle1" align="center">
            ห้องแผนกรักษาความปลอดภัย {getCurrentDate()} {getCurrentTime()}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container spacing={2}>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Air-condition`}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          {`0000.00`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Lights&Plugs`}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          {`0000.00`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>

          <Card className={classes.borderBlue}>
            <Typography gutterBottom variant="subtitle1" align="center">
            Power Plant {getCurrentDate()} {getCurrentTime()}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container spacing={2}>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderGreen}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Air-condition`}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          {`0000.00`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Lights&Plugs`}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          {`0000.00`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>

          {/* <Card className={classes.borderBlue}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container spacing={2}>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      อาคารสถานพยาบาล
                    </Typography>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderBlue}>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          {getCurrentDate()}
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          {getCurrentTime()}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <div className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Air-condition`}
                        </Typography>
                      </div>
                    </Box>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle1" align="center">
                          {`0000`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <div className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Lights&Plugs`}
                        </Typography>
                      </div>
                    </Box>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle1" align="center">
                          {`0000`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card> */}

          {/* <Card className={classes.borderBlue}>
            <Grid container spacing={2}>
              <Grid item>
                <Fab color="primary" aria-label="add">
                  <Typography variant="button" display="block" gutterBottom>
                    3
                  </Typography>
                </Fab>
              </Grid>
              <Grid item xs={12} sm container spacing={2}>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      ห้องแผนกรักษาความปลอดภัย
                    </Typography>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderBlue}>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          {getCurrentDate()}
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          {getCurrentTime()}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <div className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Air-condition`}
                        </Typography>
                      </div>
                    </Box>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle1" align="center">
                          {`0000`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <div className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption Lights&Plugs`}
                        </Typography>
                      </div>
                    </Box>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle1" align="center">
                          {`0000`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card> */}

          {/* <Card className={classes.borderBlue}>
            <Grid container spacing={2}>
              <Grid item>
                <Fab color="primary" aria-label="add">
                  <Typography variant="button" display="block" gutterBottom>
                    4
                  </Typography>
                </Fab>
              </Grid>
              <Grid item xs={12} sm container spacing={2}>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Power Plant
                    </Typography>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderBlue}>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                          align="center"
                        >
                          {getCurrentDate()}
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          {getCurrentTime()}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <div className={classes.borderGreen}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Production`}
                        </Typography>
                      </div>
                    </Box>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderGreen}>
                        <Typography variant="subtitle1" align="center">
                          {`0000`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Box mt={1}>
                      <div className={classes.borderRed}>
                        <Typography variant="subtitle2" align="center">
                          {`Energy Consumption`}
                        </Typography>
                      </div>
                    </Box>
                    <Box mt={1}>
                      <Card variant="outlined" className={classes.borderRed}>
                        <Typography variant="subtitle1" align="center">
                          {`0000`}
                        </Typography>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card> */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AppTables;
