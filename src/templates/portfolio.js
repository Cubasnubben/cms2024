import { graphql, Link, navigate } from "gatsby"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"

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
              <p>Din Sökning</p>
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
          <FontAwesomeIcon icon={faBars} />
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
