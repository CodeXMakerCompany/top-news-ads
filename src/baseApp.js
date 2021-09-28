import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { AppRouter } from "./routers/AppRouter";
import { SnackbarProvider } from "notistack";
import { Toolbar } from "@material-ui/core";

// Styled components
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/theme";

//Global components
import { HeaderGlobal } from "./components/global/header/header.global";
import { ModalWrapper } from "./components/global/modal.global";
import { SnackBarWrapper } from "./components/global/snackBar.global";

export const BaseApp = () => {
  const { theme } = useSelector((state) => state.settings);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <>
      <HeaderGlobal />
      <Toolbar />
      <SnackbarProvider>
        <ModalWrapper onHide={null} />
        <SnackBarWrapper onHide={null} />
        <ThemeProvider theme={themes[theme]}>
          <div
            style={{
              backgroundColor: themes[theme].pageBackground,
              transition: "all .5s ease",
              color: themes[theme].titleColor,
              height: "100%",
            }}
          >
            <AppRouter />
          </div>
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
};
