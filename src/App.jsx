import React from 'react'
import "./App.css"
import { Parallax } from 'react-parallax';
import forest from "./assets/forest.avif"
import place from "./assets/place.avif"
import cat from "./assets/cat.avif"
import sports from "./assets/sports.avif"
import desert from "./assets/desert.jpg"
import mountains from "./assets/mountains.avif"
import breakfast from "./assets/breakfast.avif"
import art from "./assets/art.avif"
import ice from "./assets/ice.avif"

const App = () => {
  const strength = 200
  return (
    <>
      <Parallax strength={strength} bgImage={forest}>
        <div className="content">
          <p className='textContent'>forest</p>
        </div>
      </Parallax>
      <Parallax strength={strength / 2} blur={{ min: -15, max: 15 }} bgImage={cat}>
        <div className="content">
          <p className='textContent'>cat</p>
        </div>
      </Parallax>
      <Parallax strength={-strength} blur={{ min: 15, max: -15 }} bgImage={place}>
        <div className="content">
          <p className='textContent'>history</p>
        </div>
      </Parallax>
      <Parallax strength={strength} bgImage={sports}>
        <div className="content">
          <p className='textContent'>ocean</p>
        </div>
      </Parallax>
      <Parallax strength={strength / 2} blur={{ min: -15, max: 15 }} bgImage={art}>
        <div className="content">
          <p className='textContent'>art</p>
        </div>
      </Parallax>
      <Parallax strength={-strength} bgImage={breakfast}>
        <div className="content">
          <p className='textContent'>breakfast</p>
        </div>
      </Parallax>
      <Parallax strength={strength} bgImage={desert}>
        <div className="content">
          <p className='textContent'>desert</p>
        </div>
      </Parallax>
      <Parallax strength={strength / 2} blur={{ min: 15, max: -15 }} bgImage={mountains}>
        <div className="content">
          <p className='textContent'>mountains</p>
        </div>
      </Parallax>
      <Parallax strength={-strength} bgImage={ice}>
        <div className="content">
          <p className='textContent'>cold</p>
        </div>
      </Parallax>
    </>
  )
}

export default App