import React from "react"

const Contact = contentfulPage => {
  return (
    <>
      <div className="hero-block">
        <div class="overlay"></div>
        <div className="hero-content">
          <h1>{contentfulPage.title}</h1>
          <h4>{contentfulPage.description.description}</h4>
          <div className="search-container">
            <form action="#" method="post" className="contact-form">
              <label htmlFor="name">Namn:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Namn"
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />

              <label htmlFor="message">Meddelande:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Meddelande..."
                rows="4"
                required
              ></textarea>

              <button type="submit">Skicka</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
