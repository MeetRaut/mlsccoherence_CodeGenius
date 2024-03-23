import React, { Component, useEffect, useState } from "react";
import { Grid } from "@mui/material";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", // State to store the input value
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value }); // Update the username state as the input changes
  }

  handleSubmit(event) {
    event.preventDefault();
    // You can perform any action with the entered username here, like fetching data from an API
    console.log("Submitted username:", this.state.username);
    // Clear the input field after submission if needed
    // this.setState({ username: "" });
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
              <form onSubmit={this.handleSubmit}> {/* Added form element for better submission handling */}
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Enter username"
                />
                <button type="submit">Search</button>
              </form>
              <p>Username: {this.state.username}</p>
              {/* Placeholder text for username, you'll replace it with actual data from the API */}
            </div>
          </Grid>
        </Grid>
      </header>
    );
  }
}
