import React, { useState } from "react";
import "../css/TravelPlanning.css";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const TravelPlanning = () => {
  const classes = useStyles();

  const [travelItems, setTravelItems] = useState([
    {
      name: "Thanjavur",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/17/6a/e5/a7/thanjavur-brihadeeshwara.jpg",
    },
    {
      name: "Trichy",
      image:
        "https://www.holidify.com/images/cmsuploads/square/Grand_Anaicut_20170521135150.jpg",
    },
    {
      name: "Kumbakonam",
      image:
        "https://i.pinimg.com/originals/6a/9c/e8/6a9ce8082efa10e1424b163658b5b489.jpg",
    },
  ]);

  return (
    <div className="travel-wrapper">
      <Grid container spacing={3}>
        {travelItems.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={4}>
              <Paper className={classes.paper}>
                <img className="travel-item-image" src={item.image} alt="" />

                <p className="travel-item-name">{item.name}</p>

                <Link
                  style={{ textDecoration: "none" }}
                  to={`/travel-detail/${item.name}/${item.image.toString()}`}
                >
                  <p className="hero-btn">Plan Trip</p>
                </Link>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TravelPlanning;
