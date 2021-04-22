import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import data from "../../../data/services";
import Service from "../Service/Service";
const Services = () => {
  const [services, setServices] = useState(data);
  return (
    <Box style={{ background: "#fffdf9" }} py={10}>
      <Container>
        <Typography align="center" gutterBottom variant="h4">
          What Spiz Services
        </Typography>
        <Typography align="center" color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br></br>
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Box my={6}>
          <Grid container justify="center" spacing={4}>
            {services.map((service) => (
              <Service key={service.id} {...service} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
