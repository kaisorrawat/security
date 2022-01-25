import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import loginVariant from "@iconify/icons-mdi/login-variant";
// material
import { alpha, styled, makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  ButtonBase,
  Typography
} from "@material-ui/core";
// components
import { MHidden } from "../components/@material-extend";
import logo from "./logo egat.png";
//
// import Searchbar from './Searchbar';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import NotificationsPopover from './NotificationsPopover';

const useStyles = makeStyles((theme) => ({
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
}));

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.paper, 0.4),
  // [theme.breakpoints.up('lg')]: {
  //   width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  // }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const classes = useStyles();

  const hadleLogin = () =>{
    window.location.href = `http://192.168.100.220/alpr/`
  }

  return (
    <RootStyle>
      <ToolbarStyle>
        {/* <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden> */}

        {/* <Searchbar /> */}

        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex" src={logo} />
        </ButtonBase>
        <Box ml={3}>
          <Typography
            variant="h3"
            color="textSecondary"
            display="block"
            gutterBottom
          >
            Security Information
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />

        <IconButton
          sx={{
            padding: 0,
            width: 44,
            height: 44,
          }}
          onClick={hadleLogin}
        >
          <Icon icon={loginVariant} />
        </IconButton>
        {/* <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}> */}
        {/* <LanguagePopover /> */}
        {/* <NotificationsPopover /> */}
        {/* <AccountPopover /> */}
        {/* </Stack> */}
      </ToolbarStyle>
    </RootStyle>
  );
}
