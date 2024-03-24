import React, { Component } from "react";
import { Grid, Box, Typography } from "@mui/material";
import usersData from "./package.json"; // Import the users.json data

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      followersCount: 0,
      totalLikeCount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    console.log("Submitted username:", username);

    // Find the user data based on the searched username
    const userData = usersData.users.find(
      (user) => user.username === username
    );

    if (userData) {
      const { followersCount, total_like_count } = userData;
      this.setState({
        followersCount: followersCount,
        totalLikeCount: total_like_count,
      });
    } else {
      // Handle case when user is not found
      this.setState({
        followersCount: 0,
        totalLikeCount: 0,
      });
    }
  }

  render() {
    return (
      <header className="header">
        <Grid
          sx={{ maxWidth: "1400px", margin: "0px auto" }}
          container
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <Grid>
            <div className="header__title">
              <h1>Social Media Dashboard</h1>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Enter username"
                />
                <button type="submit">Search</button>
              </form>
              <p>Username: {this.state.username}</p>
            </div>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <Box
                bgcolor="var(--card-bg)"
                p={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography variant="h5" color="var(--text-color)">
                  Total Followers: {this.state.followersCount}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                bgcolor="var(--card-bg)"
                p={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography variant="h5" color="var(--text-color)">
                  Total Likes: {this.state.totalLikeCount}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </header>
    );
  }
}