import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";
import { SnackbarProvider } from "notistack";

//Global components
import { HeaderGlobal } from "./components/global/header/header.global";
import { ModalWrapper } from "./components/global/modal.global";
import { SnackBarWrapper } from "./components/global/snackBar.global";

export const BaseApp = () => {
  return (
    <Provider store={store}>
      <HeaderGlobal />
      <SnackbarProvider>
        <ModalWrapper onHide={null} />
        <SnackBarWrapper onHide={null} />
        <AppRouter />
      </SnackbarProvider>
    </Provider>
  );
};
