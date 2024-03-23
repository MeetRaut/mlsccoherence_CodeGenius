import React, { Component } from "react";
import SingleCard from "./singlecard";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default class CardList extends Component {
  render() {
    return (
      <Grid
        container
        gap={4}
        flexWrap={{ lg: "nowrap" }}
        justifyContent={"center"}
      >
        <Grid md={3}>
          <SingleCard
            
            
            
            
          ></SingleCard>
        </Grid>
        <Grid md={3}>
          <SingleCard
            
          ></SingleCard>
        </Grid>
        <Grid md={3}>
          <SingleCard
            socialLogo={
              <InstagramIcon
                //   color={"secondary"}
                fontSize="medium"
                sx={{
                  color: "var(--instagram-middle)",
                }}
              />
            }
            
          ></SingleCard>
        </Grid>
        <Grid md={3}>
          <SingleCard
            
          ></SingleCard>
        </Grid>
      </Grid>
    );
  }
}
