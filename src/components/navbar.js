import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBurger, faSearch } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Logo from "../assets/CubenG.png"

const Navbar = () => {
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
    // Söklogik

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

    // Uppdatera
    setSearchResults(results)

    // Navigera till sidan(om det bara finns ett resultat)
    if (results.length === 1) {
      const resultPath = results[0].path
      navigate(resultPath)
    }

    // Consolla resultate
    console.log("Search results:", results)
  }
  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="CubaG Logo" className="logo-image" />
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
          placeholder="Sök..."
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
        <FontAwesomeIcon icon={faBurger} />
      </button>
    </nav>
  )
}

export default Navbar
