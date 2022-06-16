import React, { useState } from 'react'
import { useEffect } from 'react';
import Slide from './Slide'
import './Slider.css'

export default function Slider() {
  const slides = ["slide1.jpg", "slide2.jpg", "slide3.png"];
  const [activeMedia, SetActiveMedia] = useState(0);
  useEffect(() => {
    // setInterval(slideRotation(),4000)
    const lastIndex = slides.length - 1
    if (activeMedia < 0) {
      SetActiveMedia(lastIndex)
    }
    if (activeMedia > lastIndex) {
      SetActiveMedia(0)
    }
  }, [activeMedia, slides])

  useEffect(() => {
    let slider = setInterval(() => {
      SetActiveMedia(activeMedia + 1)
    }, 5000);
    return () => clearInterval(slider)
  }, [activeMedia])

  const slideRotation = () => {

    let nextMedia = activeMedia + 1;
    if (nextMedia >= slides.length) nextMedia = 0;
    SetActiveMedia(nextMedia);

  }
  return (
    <div className='root_slider'>
      <Slide img={slides[activeMedia]} />
    </div>
  )
}
