import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import bannerSlider1 from "../../../images/banner-slider1.png";
import bannerSlider2 from "../../../images/banner-slider2.png";
import bannerSlider3 from "../../../images/banner-slider3.png";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "3",
    imgPath: bannerSlider1,
  },
  {
    label: "2",
    imgPath: bannerSlider2,
  },
  {
    label: "1",
    imgPath: bannerSlider3,
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh)",
    marginTop:'64px'
  },
  btn: {
    "& > *": {
      margin: theme.spacing(2,3,0,0),
    },
    "& .call": {
      background: "none",
      boxShadow: "none",
      border: "1px solid #0b0320",
      "&:hover": {
        backgroundColor: "#0b0320",
        color: "#fff",
      },
    },
  },
  SliderRoot: {
    maxWidth: "100%",
    flexGrow: 1,
    "& .MuiMobileStepper-dots": {
      display: "none",
    },
    "& svg": {
      fontSize: "55px",
      color: "#ffbe00",
    },
  },
  img: {
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "auto",
  },
}));
const Header = () => {
  const classes = useStyles();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h2">Get Spiz Food by Ordering Online</Typography>
        <Box mt={3} maxWidth="600px">
          <Typography color="textSecondary">
            A restaurant sometimes known as a diner is a place where cooked food
            is sold to the public, and where people sit down to eat it. It is
            also a place where people go to enjoy the time and to eat a meal.
          </Typography>
        </Box>
        <Box mt={3} className={classes.btn}>
          <Button variant="contained">Order Now</Button>
          <Button className="call" variant="contained">
            Get free call
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Slider Start */}
        <div className={classes.SliderRoot}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
        </div>
        {/* Slider End */}
      </Grid>
    </Grid>
  );
};

export default Header;
