import * as React from "react";
import AppBar from "@mui/material/AppBar";
import AdbIcon from "@mui/icons-material/Adb";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#000000",
    fontSize: "200px",
    marginLeft: theme.spacing(30),
    "&:hover": {
      color: "#000000",
      borderBottom: "0.9px solid #17202A",
    },
    AppBar: {
      backgroundColor: "#000000",
    },
  },
}));
const NavigationAdmin = () => {
  const classes = useStyles();
  const [anchorForms, setAnchorForms] = React.useState(null);
  const [setAnchorReports] = React.useState(null);
  const [anchorAccount, setAnchorAccount] = React.useState(null);
  const [setAnchorAdmin] = React.useState(null);

  const handleListJournals = () => {
    window.location.href = "/";
  };

  const handleInformationclient = () => {
    window.location.href = "/seeClient";
  };

  const IconRef = () => {
    window.location.href = "/";
  };
  const handleMenuAdmin = (event) => {
    setAnchorAdmin(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorAccount(null);
    setAnchorAdmin(null);
    setAnchorForms(null);
    setAnchorReports(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#FFFF00" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton className={classes.link}>
            <AdbIcon onClick={IconRef} />
          </IconButton>
          <box
            sx={{ display: { xs: "none", md: "flex", marginRight: "auto" } }}
          >
            <Menu
              sx={{ mt: "60px" }}
              id="subMenuForms"
              anchorEl={anchorForms}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorForms)}
              onClose={handleClose}
            ></Menu>
          </box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              className={classes.link}
              key="reports"
              sx={{
                display: {
                  xs: "none",
                  color: "#000000",
                  md: "flex",
                  flexGrow: 0.02,
                },
                mr: 4,
              }}
              onClick={handleListJournals}
            >
              PUBLIC API CONSUMPTION
            </Button>

            <Button
              className={classes.link}
              key="reports"
              sx={{
                display: {
                  xs: "none",
                  color: "#000000",
                  md: "flex",
                  flexGrow: 0.02,
                },
                mr: 4,
              }}
              onClick={handleInformationclient}
            >
              INFORMATION OF THE CLIENT
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0.02 }}>
            <IconButton
              size="large"
              className={classes.link}
              aria-label="account of current user"
              aria-controls="menuapp"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenuAdmin}
            >
              {" "}
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0.02 }}>
            <Menu
              sx={{ mt: "0.8px" }}
              id="menu-appbar"
              anchorEl={anchorAccount}
              onClose={handleClose}
              keepMounted
              open={Boolean(anchorAccount)}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationAdmin;
