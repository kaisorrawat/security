import React from "react";
import { styled } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import CountUp from "react-countup";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.light,
  // "&:hover": {
  //   backgroundColor: theme.palette.warning.light,
  //   cursor: "pointer",
  // },
}));

const AppTotalEnergyConsumption = () => {
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12} md={9}>
              <Grid container>
                <Grid item xs={12} sm={7}>
                  <Typography gutterBottom variant="h4">
                    Total Energy Consumption (kWh)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item container direction="row" spacing={6}>
                  <Grid item sm={12} md={4}>
                    <RootStyle>
                      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                        Grid Energy Daily EnergyConsumtion
                      </Typography>
                      <Typography variant="h4">
                        <CountUp
                          start={0}
                          end={`89.02`}
                          decimals={2}
                          duration={2.75}
                          separator=","
                        />
                        {` kWh`}
                      </Typography>
                    </RootStyle>
                  </Grid>
                  <Grid item sm={12} md={4}>
                    <RootStyle>
                      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                        VRF Daily Unit
                      </Typography>
                      <Typography variant="h4">
                        <CountUp
                          start={0}
                          end={`22.34`}
                          decimals={2}
                          duration={2.75}
                          separator=","
                        />
                        {` kWh`}
                      </Typography>
                    </RootStyle>
                  </Grid>
                  <Grid item sm={12} md={4}>
                    <RootStyle>
                      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                        Light & Plug Daily Unit
                      </Typography>
                      <Typography variant="h4">
                        <CountUp
                          start={0}
                          end={`73.00`}
                          decimals={2}
                          duration={2.75}
                          separator=","
                        />
                        {` kWh`}
                      </Typography>
                    </RootStyle>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              {/* <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={7}>
                  <Typography gutterBottom variant="h4" align="center">
                    Cost (Bath)
                  </Typography>
                </Grid>
              </Grid> */}
              <Box mt={5.5}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="row">
                    <Grid item sm>
                      <RootStyle>
                        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                          Estimate Cost Grid Daily
                        </Typography>
                        <Typography variant="h4">
                          <CountUp
                            start={0}
                            end={`356.08`}
                            decimals={2}
                            duration={2.75}
                            separator=","
                          />
                          {` Bath`}
                        </Typography>
                      </RootStyle>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              {/* <Grid container justifyContent="center" alignItems="center">
                <Box m={3}>
                  <Button variant="contained" color="secondary" size="large">
                    Export Data
                  </Button>
                </Box>
              </Grid> */}
            </Grid>
          </Grid>
        </CardContent>
        {/* <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          
        </Grid> */}
      </Card>
    </div>
  );
};

export default AppTotalEnergyConsumption;
