import React, { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";

import { useDispatch } from "react-redux";

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

export const MainLayout = (props) => {
  const dispatch = useDispatch();
  const [tcg, setTcg] = useState(false);

  useEffect(() => {
    // setThemeSelection(selectorData ? selectorData : "light");
    const url = window.location.href;
    // setThemeSelection(content)
    url.includes("tcg") ? setTcg(url.split("/")[4]) : setTcg(false);

    dispatch(getAuth());
  }, [dispatch, tcg]);

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

          

          <div>
            <button onClick={() => HandleModal()}>click me</button>
          </div>
          <div>
            <button onClick={() => HandleSnackBar()}>snack bar</button>
          </div>
    </>
  );
};
