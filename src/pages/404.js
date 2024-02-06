import * as React from "react"

import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <section className="error-sections">
      <div className="error">
        <h1>404: Kan inte hitta det du söker Buddi</h1>
        <button className="error-button">
          <Link to="/">Tillbaka hem</Link>
        </button>
      </div>
    </section>
  </>
)

export default NotFoundPage
