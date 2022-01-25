import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
// material
import { styled } from "@material-ui/core/styles";
//
import DashboardNavbar from "./DashboardNavbar";
// import DashboardSidebar from "./DashboardSidebar";
// pages
import Bashboard from "../pages/Bashboard";
// import Scroll from "../components/Scroll"
import MiniDrawer from "./MiniDrawer";

// select theme
import { ThemeProvider } from "@material-ui/styles";
import Themes01 from "../themes01";
import Themes02 from "../themes02";
import Themes03 from "../themes03";
import themes04 from "../themes04";
import themes05 from "../themes05";
// import themes06 from "../themes06";

// ----------------------------------------------------------------------.

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 0;
// const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

const DashboardLayout = () => {
  // const [open, setOpen] = useState(false);
  return (
    <>
      {/* <RootStyle> */}
      <DashboardNavbar />
      {/* <MiniDrawer /> */}
      {/* <MainStyle> */}
      <Switch>
        <Route path="/dashboard/">
          {/* <ThemeProvider theme={Themes01.default}> */}
          <Bashboard />
          {/* </ThemeProvider> */}
        </Route>
        {/* <Route path="/dashboard/theme02">
            <ThemeProvider theme={Themes02.default}>
              <Bashboard />
            </ThemeProvider>
          </Route>
          <Route path="/dashboard/theme03">
            <ThemeProvider theme={Themes03}>
              <Bashboard />
            </ThemeProvider>
          </Route>
          <Route path="/dashboard/theme04">
            <ThemeProvider theme={themes04}>
              <Bashboard />
            </ThemeProvider>
          </Route>
          <Route path="/dashboard/theme05">
            <ThemeProvider theme={themes05}>
              <Bashboard />
            </ThemeProvider>
          </Route> */}
        {/* <Route path="/dashboard/theme06">
            <ThemeProvider theme={themes06}>
              <Bashboard />
            </ThemeProvider>
          </Route> */}
        <Route exact path="/">
          <Redirect to="/dashboard/" />
        </Route>
      </Switch>
      {/* </MainStyle> */}
      {/* </RootStyle> */}
    </>
  );
};

export default DashboardLayout;
