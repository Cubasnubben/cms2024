import { graphql, Link, navigate } from "gatsby"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBurger } from "@fortawesome/free-solid-svg-icons"
import Pic from "../assets/game.jpg"
import Pic1 from "../assets/musicplayer.jpg"
import Pic2 from "../assets/webshop.jpg"

const Page = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSearchChange = event => {
    setSearchQuery(event.target.value)
  }

  const handleSearch = () => {
    // Search logic

    const allItems = [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Portfolio", path: "/portfolio" },
      { title: "Contact", path: "/contact" },
    ]

    // Filter
    const results = allItems.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Update
    setSearchResults(results)

    // Navigate to the page (if there is only one result)
    if (results.length === 1) {
      const resultPath = results[0].path
      navigate(resultPath)
    }

    // Log results
    console.log("Search results:", results)
  }

  return (
    <>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <Link to="/">
            {/* Assuming Logo is defined */}
            {/* <img src={Logo} alt="CubaG Logo" className="logo-image" /> */}
          </Link>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={event => {
              if (event.key === "Enter") {
                handleSearch()
              }
            }}
          />
          <button type="button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>

          {searchResults.length > 0 && (
            <div className="search-results">
              {/* <p>Din Sökning</p> */}
              <ul>
                {searchResults.map(result => (
                  <li key={result.title}>
                    <Link to={result.path}>{result.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button type="button" className="navbtn" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBurger} />
        </button>
      </nav>
      <section className="info-section">
        <div className="info-project">
          <h1>Kurser & Projekt</h1>
        </div>
      </section>
      <div className="info-grid">
        <h2 className="info-title">{data.contentfulCuba.title}</h2>
        <p className="info-paragraph">
          {data.contentfulCuba.description.description}
        </p>
      </div>
      <div id="portfolio">
        <div class="container">
          <h1 class="subtitle">Några Projekt</h1>
          <div class="work-list">
            <div class="work">
              <img src={Pic1} alt="wimg" />
              <div class="layer">
                <h3>Music Player</h3>
                <p>En enkel Musikspelare</p>
                <a
                  href="https://github.com/Cubasnubben/IronMaidenTestSite/tree/master"
                  target="_blank"
                >
                  <i class="fa-solid fa-music"></i>
                </a>
              </div>
            </div>
            <div class="work">
              <img src={Pic2} alt="wimg" />
              <div class="layer">
                <h3>Portfolio</h3>
                <p>En basic första portfolio.</p>
                <a href="#">
                  <i class="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>
            <div class="work">
              <img src={Pic} alt="wimg" />
              <div class="layer">
                <h3>Spel</h3>
                <p>Mario Run... Akta dig för spöken...</p>
                <a
                  href="https://github.com/Cubasnubben/Mario-Run"
                  target="_blank"
                >
                  <i class="fa-solid fa-gamepad"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulCuba(slug: { eq: $slug }) {
      title
      description {
        description
      }
      siteimage {
        gatsbyImage(width: 200)
      }
      slug
    }
  }
`

export default Page
