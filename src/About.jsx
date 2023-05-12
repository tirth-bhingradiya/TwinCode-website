import React,{useEffect} from "react";
import Common from "./Common";
import web from './About_us_page.gif'
import { NavLink } from "react-router-dom";
const About = () => {
  useEffect(()=>{
    document.title='About-Ripplestacks'
  })
  return (
    <>
      <Common
        headline="About"
        content="Welcome to our company! We provide web and mobile app development solutions to companies worldwide.
             We have extremely skilled Javascript developers ready for hire for your next React Native, ReactJs & Nodejs projects."
        btnvalue='contact us'
        image = {web}
        path='/contact'
      />
    </>
  );
};
export default About;
