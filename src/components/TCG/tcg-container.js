import React, { useCallback, useEffect, useState } from "react";
import CodexMakerApi from "../utils/endpoint";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { TcgItem } from "./tcg-item";
import { SearchBarGlobal } from "../global/searchBar/searchBar.global";
import { Grid } from "@material-ui/core";

export const TcgContainer = ({ theme }) => {
  const [content, setContent] = useState([]);
  const [color, setColor] = useState("");

  const fetchCards = useCallback(async () => {
    const data = await CodexMakerApi(
      "GET",
      "get-cards-by-category",
      null,
      "6115f0dbacb5ca7cf5205ab4"
    );
    setContent(data?.list);
  }, []);

  useEffect(() => {
    fetchCards();
    theme === "dark" ? setColor("#373F51") : setColor("#D62839");
  }, [fetchCards, color, theme]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" align="center">
        <Typography component="div" style={{ backgroundColor: color }}>
        <SearchBarGlobal />
          <Grid container spacing={3}>
            {content?.map((card) => (
              <Grid item xs={12} md={4} lg={3}>
                <TcgItem card={card} />
              </Grid>
            ))}
          </Grid>
        </Typography>
      </Container>
    </>
  );
};
