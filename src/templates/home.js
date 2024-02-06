import React from "react"
const home = contentfulPage => {
  return (
    <>
      <div class="hero-block">
        <div class="overlay"></div>
        <div class="hero-content">
          <h1>{contentfulPage.title}</h1>
          <p>{contentfulPage.description.description}</p>
          <a href="#">Mitt CV</a>
          <img src={contentfulPage.Heroimage}></img>
        </div>
      </div>
    </>
  )
}

export default home
