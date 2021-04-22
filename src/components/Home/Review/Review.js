import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import image from "../../../images/review1.jpg";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import review3 from "../../../images/review3.png";
import review4 from "../../../images/review4.png";
import review5 from "../../../images/review5.png";
import review6 from "../../../images/review6.png";
import review7 from "../../../images/review7.png";
import review8 from "../../../images/review8.png";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "John Doe",
    imgPath: review3,
  },
  {
    label: "Jac Jackson",
    imgPath: review4,
  },
  {
    label: "Tom Henry",
    imgPath: review5,
  },
  {
    label: "John Mic",
    imgPath: review6,
  },
  {
    label: "Stark Arey",
    imgPath: review7,
  },
  {
    label: "John Smith",
    imgPath: review8,
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    padding: theme.spacing(10, 0),
    borderBottomRightRadius: theme.spacing(15),
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
    "& .MuiMobileStepper-root": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  img: {
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "auto",
  },
}));
const Review = () => {
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
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <img
                style={{
                  display: "block",
                  width: "100%",
                  borderRadius: "48px",
                }}
                src={image}
                alt="review"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              align="center"
              gutterBottom
              variant="h4"
              color="primary"
            >
              What People Say About Us
            </Typography>
            <Typography paragraph align="center" style={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              tempor <br /> incididunt ut labore et dolore magna aliqua.
            </Typography>
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
              <Typography
                style={{ margin: "8px 0" }}
                align="center"
                variant="h6"
                color="primary"
              >
                {tutorialSteps[activeStep].label}
              </Typography>
              <Typography align="center" style={{ color: "#fff" }}>
                Restaurants range from inexpensive and informal lunching or
                dining places catering to people working nearby, with modest
                food served in simple settings at low prices.
              </Typography>
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
      </Container>
    </div>
  );
};

export default Review;
