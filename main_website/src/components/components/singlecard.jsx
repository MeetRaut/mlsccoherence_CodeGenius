import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Icon, Grid } from "@mui/material";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import usersData from "./package.json"; // Import the users.json data

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      display: true, // Display x-axis
      grid: {
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      ticks: {
        display: true, // Display y-axis labels
      },
      grid: {
        display: true, // Display y-axis grid lines
      },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const datasets = [
  {
    label: 'Trend Graph',
    data: [10, 50, 40, 20, 80, 90, 35],
    backgroundColor: '#5e72e4',
    borderRadius: 10,
  },
];

const data = {
  labels,
  datasets,
};

const containerStyle = {
  background: '#18214d',
  height: '500px', // Set the height to 100px
  margin: '10px 20px',
  borderRadius: '25px',
};

const SingleCard = ({
  socialLogo,
  socialName,
  followers,
  followersToday,
  bgTopColor,
}) => {
  return (
    <Card
      sx={{
        minWidth: 270,
        bgcolor: "var(--card-bg)",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ background: bgTopColor, border: "none", minHeight: "5px" }}
          height="5"
          className="card-top"
        />
        <CardContent>
          <div className="top">
            <Grid
              fontSize={14}
              className="social-logo"
              container
              justifyContent={"center"}
              alignItems={"center"}
              mb={"10px"}
              gap={1}
            >
              {socialLogo}

              <Typography
                color={"var(--text-color2)"}
                fontWeight={700}
                fontSize={14}
              >
                {socialName}
              </Typography>
            </Grid>
          </div>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
            textTransform={"uppercase"}
            fontWeight={700}
            fontSize={65}
            color={"var(--text-color)"}
          >
            {followers}
            <Typography
              color={"var(--text-color2)"}
              fontWeight={"400"}
              fontSize={"14px"}
              letterSpacing={"5px"}
            >
            </Typography>
          </Typography>
          <Typography variant="body2">
            {followersToday[0] === "up" ? (
              <Typography
                color={"var(--limegreen)"}
                fontSize={14}
                fontWeight={700}
              >
              </Typography>
            ) : (
              <Typography
                color={"var(--brightred)"}
                fontSize={14}
                fontWeight={700}
              >
                <Grid container justifyContent={"center"} alignItems={"center"}>
                <div className="flex justify-center items-center w-full p-2 pb-2" style={{ ...containerStyle, height: '270px' }}>
                <Bar options={options} data={data} />
                </div>
                </Grid>
              </Typography>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default SingleCard;
SingleCard.defaultProps = {
  followers: "TRENDS",
  followersToday: "",
};

SingleCard.propTypes = {
  socialLogo: PropTypes.string,
  socialName: PropTypes.string,
  followers: PropTypes.string,
  followersToday: PropTypes.string,
};
