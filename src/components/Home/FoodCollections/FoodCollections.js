import React, { useState } from "react";
import {
  Container,
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import data from "../../../data/foodCollection";
import FoodCollection from "../FoodCollection/FoodCollection";
const categories = data.map((item) => item.category);
const uniqueCategories = [...new Set(categories)];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container component={Box} py={3}>
          {children}
        </Container>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  appBar: {
    background: "none",
    boxShadow: "none",
    paddingTop: theme.spacing(5),
    '& .Mui-selected': {
      backgroundColor: "#ffbe00",
      padding: "12px 35px 11px",
      borderRadius: "50px",
      color: "#fff",
      textTransform: "capitalize",
      fontSize: "15px",
    },
    '& .MuiTabs-indicator': {
      display: 'none'
    }
  },
}));
const FoodCollections = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box py={10}>
      <Typography align="center" gutterBottom variant="h4">
        Our Regular Food Collections
      </Typography>
      <Typography align="center" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
        <br></br>
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      <div className={classes.tabs}>
        <AppBar className={classes.appBar} position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="full width tabs example"
            centered
          >
            {uniqueCategories.map((item, index) => (
              <Tab key={index} label={item} {...a11yProps(index)} />
            ))}
          </Tabs>
        </AppBar>
        {uniqueCategories.map((item, index) => (
          <TabPanel key={index} value={value} index={index}>
            <FoodCollection category={item} />
          </TabPanel>
        ))}
      </div>
    </Box>
  );
};

export default FoodCollections;
