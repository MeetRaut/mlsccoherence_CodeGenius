import React, { Component } from "react";
import SingleCard2 from "./singlecard2";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default class CardList2 extends Component {
  render() {
    return (
      <Grid>
        <h2>Overview GRAPHS</h2>
        <Grid
          container
          gap={4}
          flexWrap={{ lg: "nowrap" }}
          justifyContent={"center"}
        >
          {" "}
          <Grid md={3}>
            <SingleCard2
              
            ></SingleCard2>
          </Grid>
          <Grid md={3}>
            <SingleCard2
              
            ></SingleCard2>
          </Grid>{" "}
          <Grid md={3}>
            <SingleCard2
              
            ></SingleCard2>
          </Grid>{" "}
          <Grid md={3}>
            <SingleCard2
              
            ></SingleCard2>
          </Grid>
        </Grid>
        <Grid
          mt={4}
          container
          gap={4}
          flexWrap={{ lg: "nowrap" }}
          justifyContent={"center"}
        >
          {" "}
          <Grid md={3}>
            <SingleCard2
              
            ></SingleCard2>
          </Grid>
          <Grid md={3}>
            <SingleCard2
              
            ></SingleCard2>
          </Grid>{" "}
          <Grid md={3}>
            <SingleCard2
              
            ></SingleCard2>
          </Grid>{" "}
          <Grid md={3}>
            <SingleCard2
              
            ></SingleCard2>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
