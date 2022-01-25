import React, { useState, useEffect } from "react";
import axios from "axios";
// material
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Badge,
  Tooltip
} from "@material-ui/core";
// import Skeleton from "@material-ui/lab/Skeleton";
import { Icon } from "@iconify/react";
import connectedIcon from "@iconify/icons-wpf/connected";
import disconnectOutlined from "@iconify/icons-ant-design/disconnect-outlined";
import faceRecognition from "@iconify/icons-mdi/face-recognition";
import carFilled from "@iconify/icons-ant-design/car-filled";
import MailIcon from "@material-ui/icons/Mail";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import CloseIcon from "@material-ui/icons/Close";
import CountUp from "react-countup";
// components
import Page from "../components/Page";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardIcon from "../components/Card/CardIcon";
import CardFooter from "../components/Card/CardFooter";
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
// import AppHeader from "../components/_dashboard/AppHeader";
import AppMaps from "../components/_dashboard/AppMaps";
// import AppTables from "../components/_dashboard/AppTables";
// import AppEnergyConsumption from "../components/_dashboard/AppEnergyConsumption";
// import AppTotalEnergyProduction from "../components/_dashboard/AppTotalEnergyProduction";
// import AppTotalEnergyConsumption from "../components/_dashboard/AppTotalEnergyConsumption";

import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle";

import "./styles.scss";

import axiosConfig from "../axiosConfig";
import axiosConfigLPR from "../axiosConfigLPR";

import blacklist from './blacklist_ok.png';
import member from './member_ok.png';
import visitor from './visitor_ok.png';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 6,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles(styles);

const useStyles2 = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: theme.palette.info.light,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  pCursorError: {
    "&:hover": {
      backgroundColor: theme.palette.error.light,
      cursor: "pointer",
    },
  },
  pCursorSuccess: {
    "&:hover": {
      backgroundColor: theme.palette.success.light,
      cursor: "pointer",
    },
  },
  pCursorInfo: {
    "&:hover": {
      backgroundColor: theme.palette.info.light,
      cursor: "pointer",
    },
  },
  aeZone: {
    backgroundColor: "#e57373",
    color: "white",
  },
  img: {
    width: 32,
    height: 32,
    // padding: theme.spacing(1),
  },
  imgspac: {
    padding: theme.spacing(1)
  }
}));

function createData(id, number, province, date, inout) {
  return { id, number, province, date, inout };
}

const rows = [
  createData("1", "1กข3442", "เชียงใหม่", "2021-10-12 03:45:41", "เข้า"),
  createData("2", "งพ4445", "เชียงใหม่", "2021-10-12 05:41:59", "เข้า"),
  createData("3", "ผท1336", "เชียงใหม่", "2021-10-12 06:11:32", "เข้า"),
  createData("4", "ผห1336", "เชียงใหม่", "2021-10-12 06:11:40", "ออก"),
  createData("5", "นค439", "เชียงใหม่", "2021-10-12 06:12:20", "ออก"),
  createData("6", "ขห7478", "เชียงใหม่", "2021-10-12 06:26:57", "ออก"),
  createData("7", "ขห7478", "เชียงใหม่", "2021-10-12 06:26:59", "เข้า"),
  createData("8", "2กค7075", "เชียงใหม่", "2021-10-12 07:50:21", "เข้า"),
  createData("9", "ขงท728", "ลำปาง", "2021-10-12 07:05:34", "เข้า"),
  createData("10", "ขงธ504", "สุโขทัย", "2021-10-12 07:07:33", "เข้า"),
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const formatData = (data) => {
  const d = new Date(data);

  const date = d.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const time = d.toLocaleTimeString("th-TH", {
    hour: "numeric",
    minute: "numeric",
  });

  return date + " " + time;
};

const Bashboard = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [open, setOpen] = React.useState(false);

  const [nameDevice, setNameDevice] = useState([]);
  const [countVehicleIn, setCountVehicleIn] = useState([]);
  const [countVehicleRegister, setCountVehicleRegister] = useState([]);
  const [countVehicleContact, setCountVehicleContact] = useState([]);
  const [countVehicleBacklist, setCountVehicleBacklist] = useState([]);

  const [countVehicleOut, setCountVehicleOut] = useState([]);
  const [countVehicleOutRegister, setCountVehicleOutRegister] = useState([]);
  const [countVehicleOutContact, setCountVehicleOutContact] = useState([]);
  const [countVehicleOutBacklist, setCountVehicleOutBacklist] = useState([]);

  const handleClickOpen = (value) => {
    console.log(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      device();
      countIn();
      countOut();
      // statusDevice();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const device = async () => {
    await axiosConfig
      .get("/device")
      .then((response) => {
        // console.log(response.data.data);
        setNameDevice(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const countIn = async () => {
    await axiosConfigLPR
      .get("/countin")
      .then((response) => {
        // console.log(response.data.typeCount[0]);
        setCountVehicleIn(response.data.countIn[0].countIn);
        setCountVehicleRegister(response.data.typeCount[0].countInRegister);
        setCountVehicleContact(response.data.typeCount[0].countInContact);
        setCountVehicleBacklist(response.data.typeCount[0].countInBacklist);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const countOut = async () => {
    await axiosConfigLPR
      .get("/countout")
      .then((response) => {
        // console.log(response.data);
        setCountVehicleOut(response.data.countOut[0].countOut);
        setCountVehicleOutRegister(
          response.data.typeCountOut[0].countOutRegister
        );
        setCountVehicleOutContact(
          response.data.typeCountOut[0].countOutContact
        );
        setCountVehicleOutBacklist(
          response.data.typeCountOut[0].countOutBacklist
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var config = {
    method: "get",
    url: "https://facetime.solutiondd.net/device_api_site_demo/",
    headers: {},
  };

  const statusDevice = async () => {

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Page title="Monitoring | Security Information">
      <AppMaps />

      <Container maxWidth="xl">
        {/* components card  */}
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card
            // onClick={handleClickOpen}
            // className={classes2.pCursorInfo}
            >
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon icon={carFilled} />
                </CardIcon>
                <h1 className={classes.cardCategory}>
                  <Box component="span" pr={2} >
                    <StyledBadge
                      className={classes2.imgspac}
                      badgeContent={
                        <Tooltip title="Blacklist">
                          <span>{countVehicleBacklist}</span>
                        </Tooltip>
                      }
                      color="error"
                      showZero
                    >
                      <img
                        className={classes2.img}
                        alt="Blacklist"
                        src={blacklist}
                      />
                      {/* <MailIcon /> */}
                    </StyledBadge>
                    <StyledBadge
                      className={classes2.imgspac}
                      badgeContent={
                        <Tooltip title="Register">
                          <span>{countVehicleRegister}</span>
                        </Tooltip>
                      }
                      color="error"
                      showZero
                    >
                      <img
                        className={classes2.img}
                        alt="Register"
                        src={member}
                      />
                      {/* <MailIcon /> */}
                    </StyledBadge>
                    <StyledBadge
                      className={classes2.imgspac}
                      badgeContent={
                        <Tooltip title="Contact">
                          <span>{countVehicleContact}</span>
                        </Tooltip>
                      }
                      color="error"
                      showZero
                      max={999}
                    >
                      <img
                        className={classes2.img}
                        alt="Contact"
                        src={visitor}
                      />
                      {/* <MailIcon /> */}
                    </StyledBadge>
                  </Box>
                  LPR OUT
                </h1>
                <h2 className={classes.cardTitle}>
                  จำนวนรถเข้า &nbsp;
                  <CountUp
                    start={0}
                    end={` ${countVehicleIn}`}
                    decimals={0}
                    duration={2.75}
                    separator=","
                  />
                  &nbsp; คัน
                </h2>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}></div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card
            // onClick={handleClickOpen}
            // className={classes2.pCursorInfo}
            >
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon icon={carFilled} />
                </CardIcon>
                <h1 className={classes.cardCategory}>
                  <Box component="span" pr={2}>
                    <StyledBadge
                      className={classes2.imgspac}
                      badgeContent={
                        <Tooltip title="Blacklist">
                          <span>{countVehicleOutBacklist}</span>
                        </Tooltip>
                      }
                      color="error"
                      showZero
                    >
                      
                        <img
                          className={classes2.img}
                          alt="Blacklist"
                          src={blacklist}
                        />
                      
                      {/* <MailIcon /> */}
                    </StyledBadge>
                    <StyledBadge
                      className={classes2.imgspac}
                      badgeContent={
                        <Tooltip title="Register">
                          <span>{countVehicleOutRegister}</span>
                        </Tooltip>
                      }
                      color="error"
                      showZero
                    >
                      <img
                        className={classes2.img}
                        alt="Register"
                        src={member}
                      />
                      {/* <MailIcon /> */}
                    </StyledBadge>
                    <StyledBadge
                      className={classes2.imgspac}
                      badgeContent={
                        <Tooltip title="Contact">
                          <span>{countVehicleOutContact}</span>
                        </Tooltip>
                      }
                      color="error"
                      max={999}
                      showZero
                    >
                      <img
                        className={classes2.img}
                        alt="Contact"
                        src={visitor}
                      />
                      {/* <MailIcon /> */}
                    </StyledBadge>
                  </Box>
                  LPR IN
                </h1>
                <h2 className={classes.cardTitle}>
                  จำนวนรถออก &nbsp;
                  <CountUp
                    start={0}
                    end={` ${countVehicleOut}`}
                    decimals={0}
                    duration={2.75}
                    separator=","
                  />
                  &nbsp; คัน
                </h2>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}></div>
              </CardFooter>
            </Card>
          </GridItem>

          {nameDevice.map((row, index) => {
            // console.log(index);
            if (index > 2) {
              // console.log(index);
              return (
                <GridItem xs={12} sm={6} md={3} key={index}>
                  <Card
                  // onClick={() => handleClickOpen(row.serial_number)}
                  // className={classes2.pCursorSuccess}
                  >
                    <CardHeader color={row.status === 'online' ? 'success' : 'danger'}  stats icon>
                      <CardIcon color={row.status === 'online' ? 'success' : 'danger'} className={row.status === 'online' ? 'skeleton-box' : ''}>
                        <Icon icon={faceRecognition} />
                      </CardIcon>

                      <h1 className={classes.cardCategory}>
                        <Box component="span" pr={2}>
                          <StyledBadge
                            badgeContent={
                              <Tooltip title="ไม่อยู่ในระบบ">
                                <span>{row.countNotIn}</span>
                              </Tooltip>
                            }
                            color="error"
                          >
                            <img
                              className={classes2.img}
                              alt="complex"
                              src={blacklist}
                            />
                            {/* <PersonAddDisabledIcon /> */}
                          </StyledBadge>
                        </Box>
                        {row.location}
                      </h1>
                      <h2 className={classes.cardTitle}>
                        จำนวนคนผ่าน &nbsp;
                        <CountUp
                          start={0}
                          end={` ${row.countTotal}`}
                          decimals={0}
                          duration={2.75}
                          separator=","
                        />
                        &nbsp; คน
                      </h2>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}></div>
                    </CardFooter>
                  </Card>
                </GridItem>
              );
            }
          })}
        </GridContainer>

        <GridContainer>
          {nameDevice.map((row, index) => {
            // console.log(index);
            if (index <= 2) {
              // console.log(index);
              return (
                <GridItem xs={12} sm={6} md={3} key={index}>
                  <Card
                  // onClick={() => handleClickOpen(row.serial_number)}
                  // className={classes2.pCursorError}
                  >
                    <CardHeader color={row.status === 'online' ? 'success' : 'danger'} stats icon>
                      <CardIcon color={row.status === 'online' ? 'success' : 'danger'} className={row.status === 'online' ? 'skeleton-box' : ''} >
                        <Icon icon={faceRecognition} />
                      </CardIcon>
                      <h1 className={classes.cardCategory}>
                        <Box component="span" pr={2}>
                          <StyledBadge
                            badgeContent={
                              <Tooltip title="ไม่อยู่ในระบบ">
                                <span>{row.countNotIn}</span>
                              </Tooltip>
                            }
                            color="error"
                          >
                            <img
                              className={classes2.img}
                              alt="complex"
                              src={blacklist}
                            />
                            {/* <PersonAddDisabledIcon /> */}
                          </StyledBadge>
                        </Box>
                        {row.location}
                      </h1>
                      <h2 className={classes.cardTitle}>
                        จำนวนคนผ่าน &nbsp;
                        <CountUp
                          start={0}
                          end={` ${row.countTotal}`}
                          decimals={0}
                          duration={2.75}
                          separator=","
                        />
                        &nbsp; คน
                      </h2>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}></div>
                    </CardFooter>
                  </Card>
                </GridItem>
              );
            }
          })}
        </GridContainer>
      </Container>
    </Page>
  );
};

export default Bashboard;
