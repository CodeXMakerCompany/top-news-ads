import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";

// Components
import { TemporaryDrawer } from "../leftNavBar.global";

//Styles
import { navBarStyles } from "../../react-material-styles/styles";
import { themes } from "../../../styles/theme";

// Icons
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

// Redux
import { useDispatch } from "react-redux";

// Redux actions
import { openSnackBar } from "../../../actions/snackbar.actions";
import { setSettings } from "../../../actions/settings.actions";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export const HeaderGlobal = (props) => {
  const classes = navBarStyles();
  const dispatch = useDispatch();

  const [themeSelection, setThemeSelection] = useState("light");

  const icon =
    themeSelection === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  const changeTheme = () => {
    console.log(themeSelection);
    if (themeSelection === "dark") {
      dispatch(
        openSnackBar({
          status: true,
          type: "success",
          message: "Blink blink sunshine 🌟",
        })
      );
    }
    return themeSelection === "light"
      ? (setThemeSelection("dark"),
        dispatch(
          openSnackBar({
            status: true,
            type: "success",
            message: "So you choosed the dark side 🌒",
          })
        ),
        dispatch(setSettings("dark", null, null)))
      : themeSelection === "dark"
      ? (setThemeSelection("light"), dispatch(setSettings("light", null, null)))
      : null;
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props} className={classes.root}>
        <AppBar>
          <Toolbar>
            <TemporaryDrawer specialClass={classes.button} />

            <Typography variant="h6" className={classes.title}>
              Codexmaker template
            </Typography>
            <div
              onClick={changeTheme}
              style={{
                color: themes[themeSelection].titleColor,
                cursor: "pointer",
              }}
            >
              {icon}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
