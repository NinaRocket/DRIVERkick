import HomeNavbar from "../components/HomeNavbar";
import React from "react";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <HomeNavbar></HomeNavbar>
      <Hero></Hero>
    </>
  );
}

export default Home;
