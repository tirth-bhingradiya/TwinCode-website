import React, { useEffect } from "react";
import web from "./Developer_activity.gif";
import Common from "./Common";
import { NavLink } from "react-router-dom";
const Home = () => {
  useEffect(()=>{
    document.title='Home-Ripplestacks'
  })
  return (
    <>
      <Common 
        headline = ' Grow your business with '
        sentence = 'we are the team of talented developer'
        btnvalue = 'get started'
        image = {web}
        path ='/about'
      />
    </>
  );
};
export default Home;
