import React from "react"
import "./style.css"

import Photo from "./Photo.js"
import Name from "./Name.js"
import Buttons from "./Buttons.js"
import About from "./About.js"
import Interests from "./Interests.js"
import Footer from "./Footer.js"

function Card()
{
  return (
    <div id='card'>
      <Photo />
      <Name />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default Card