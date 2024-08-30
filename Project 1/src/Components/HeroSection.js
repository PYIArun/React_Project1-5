import React from 'react'

function HeroSection() {
  return (
    <div className='main'>

    <div className='hero-content'>

        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className='hero-buttons'>
            <button className='button1'>Shop Now</button>
            <button className='button2'>Category</button>
        </div>

        <div className='brands'>
            <p>Also Available On</p>
            <div className='brands-icons'>
                <img src='./images/flipkart.png'></img>
                <img src='./images/amazon.png'></img>
            </div>
        </div>
    </div>

    <div className='hero-image'>

        <img src='./images/shoe_image.png'></img>

    </div>
    </div>
  )
}

export default HeroSection