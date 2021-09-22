import React, { useEffect, useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";

import Box from "@material-ui/core/Box";

import { ThemeProvider } from "styled-components";
import { themes } from "../../styles/theme";

import { useDispatch, useSelector } from "react-redux";

//Actions
import { toggleModal } from "../../actions/modal.actions";
import { openSnackBar } from "../../actions/snackbar.actions";
import { getAuth } from "../../actions/tcgPlayer.actions";

//Main components
import { CategoriesGlobal } from "../global/categories/categories.global";

//Modules components
import { HomeIndex } from "../modules/home/home.index";
// import { Banner } from "./banner/banner.global";
import { Grid } from "@material-ui/core";
import { FeaturedGlobal } from "./featured/featured.global";
import { BestSellerGlobal } from "./bestSeller/bestSeller.global";
import { OtherProductsGlobal } from "./otherProducts/otherProducts.global";
import { LatestProductsGlobal } from "./latestProducts/latestProducts.global";
import { TcgContainer } from "../../components/TCG/tcg-container";

export const MainLayout = (props) => {
  const dispatch = useDispatch();
  const [tcg, setTcg] = useState(false);
  const { theme } = useSelector((state) => state.settings);

  useEffect(() => {
    console.log(theme);
    // setThemeSelection(selectorData ? selectorData : "light");
    const url = window.location.href;
    // setThemeSelection(content)
    url.includes("tcg") ? setTcg(url.split("/")[4]) : setTcg(false);

    dispatch(getAuth());
  }, [dispatch, tcg, theme]);

  const HandleModal = () => {
    dispatch(toggleModal({ type: "testing" }));
  };

  const HandleSnackBar = () => {
    dispatch(
      openSnackBar({
        status: true,
        type: "success",
        message: "This is a succes item",
      })
    );
  };

  return (
    <>
      <Toolbar />
      <ThemeProvider theme={themes[theme]}>
        <div
          style={{
            backgroundColor: themes[theme].pageBackground,
            transition: "all .5s ease",
            color: themes[theme].titleColor,
            height: "100vh",
          }}
        >
          <CategoriesGlobal />
          {/* {!tcg && <Banner />} */}

          <br />
          {!tcg && (
            <Grid container>
              <Grid item xs={3}>
                <FeaturedGlobal />
              </Grid>
              <Grid item xs={6}>
                <LatestProductsGlobal />
                <BestSellerGlobal />
              </Grid>
              <Grid item xs={3}>
                <OtherProductsGlobal />
              </Grid>
            </Grid>
          )}

          {!tcg && (
            <Box>
              {props.view === "/" ? (
                <HomeIndex className="m-0" />
              ) : (
                "not found baby"
              )}
            </Box>
          )}

          {tcg && <TcgContainer theme={theme} />}

          <div>
            <button onClick={() => HandleModal()}>click me</button>
          </div>
          <div>
            <button onClick={() => HandleSnackBar()}>snack bar</button>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
