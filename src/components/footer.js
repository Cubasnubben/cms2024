import React from "react"

const footer = () => {
  return (
    <>
      <footer>
        <div className="container grid grid-3">
          <div className="footer-text">
            <h1>Här är en Footer</h1>
          </div>

          <div className="social">
            <a href="#" title="Github">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="#" title="Facebook">
              <i className="fa-brands fa-facebook fa-2x"></i>
            </a>
            <a href="#" title="Instagram">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" title="Youtube">
              <i className="fa-brands fa-youtube fa-2x"></i>
            </a>
          </div>
          <div className="copy">
            <p>Copyright &copy; 2023</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer
