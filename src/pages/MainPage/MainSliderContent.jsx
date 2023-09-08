import React from 'react'

function MainSliderContent({sliderTitle,sliderText}) {
  return (
    <div className="main-top-slider-text">
    <h2>{sliderTitle}</h2>
    <p>{sliderText}</p>
  <div className="slider-btn-container">
    <button className='read-more-btn'>READ MORE</button>
    <button className='get-started-button'>GET STARTED NOW</button>
  </div>
  </div>
  )
}

export default MainSliderContent