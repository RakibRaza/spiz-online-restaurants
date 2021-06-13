import { Container } from "@material-ui/core";
import React from "react";
import AboutUs from "../components/Home/AboutUs/AboutUs";
import Blogs from "../components/Home/Blogs/Blogs";
import Chefs from "../components/Home/Chefs/Chefs";
import DeliveryMan from "../components/Home/DeliveryMan/DeliveryMan";
import FeaturedCategories from "../components/Home/FeaturedCategories/FeaturedCategories";
import FoodCollections from "../components/Home/FoodCollections/FoodCollections";
import FoodMenu from "../components/Home/FoodMenu/FoodMenu";
import Header from "../components/Home/Header/Header";
import Review from "../components/Home/Review/Review";
import Services from "../components/Home/Services/Services";
import Subscribe from "../components/Home/Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <AboutUs />
      <Container>
        <FeaturedCategories />
      </Container>
      <Services />
      <Container>
        <FoodCollections />
      </Container>
      <FoodMenu />
      <DeliveryMan />
      <Container>
        <Chefs />
      </Container>
      <Review />
      <Container>
        <Blogs />
      </Container>
      <Subscribe />
    </>
  );
};

export default Home;
