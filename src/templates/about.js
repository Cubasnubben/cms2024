import React, { useState } from "react"
import Pic from "../assets/game.jpg"
import Pic1 from "../assets/musicplayer.jpg"
import Pic2 from "../assets/webshop.jpg"
import Pic3 from "../assets/Fpipe.jpg"
import Pic4 from "../assets/OnS.jpg"
import Pic5 from "../assets/react.jpg"
import Pic6 from "../assets/ui.jpg"
import Pic7 from "../assets/web.jpg"
import Pic8 from "../assets/cloud.jpg"
import Pic9 from "../assets/stockholm.jpg"
import Pic10 from "../assets/Csharp.jpg"
import Pic11 from "../assets/reactut.jpg"

const AboutPage = page => {
  const [activeTab, setActiveTab] = useState("skills")

  const opentab = tabname => {
    setActiveTab(tabname)
  }

  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-3">
              <img src={Pic} alt="img" />
              <img src={Pic1} alt="img" />
              <img src={Pic2} alt="img" />
            </div>
            <div className="about-col-2">
              <h1 className="subtitle">{page.title}</h1>
              <p>{page.description.description}</p>
              <div className="tabtitles">
                <h3
                  className={`tab-links ${
                    activeTab === "skills" && "active-link"
                  }`}
                  onClick={() => opentab("skills")}
                >
                  Kompetens
                </h3>
                <h3
                  className={`tab-links ${
                    activeTab === "experience" && "active-link"
                  }`}
                  onClick={() => opentab("experience")}
                >
                  Erfarenhet
                </h3>
                <h3
                  className={`tab-links ${
                    activeTab === "education" && "active-link"
                  }`}
                  onClick={() => opentab("education")}
                >
                  Utbildning
                </h3>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "skills" && "active-tab"
                }`}
                id="skills"
              >
                <ul className="aboutlist">
                  <li>
                    <span>UI/UX</span>
                    <br />
                    Designing Web/App interfaces
                    <br />
                    <img src={Pic6} alt="img" />
                  </li>
                  <li>
                    <span>Web Development</span>
                    <br />
                    Web App Utveckling
                    <br />
                    <img src={Pic7} alt="img" />
                  </li>
                  <li>
                    <span>React</span>
                    <br />
                    React Framework Design
                    <br />
                    <img src={Pic5} alt="img" />
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "experience" && "active-tab"
                }`}
                id="experience"
              >
                <ul className="aboutlist">
                  <li>
                    <span>2023 - 2024</span>
                    <br />
                    Praktik på Onslip Cloud
                    <br />
                    <img src={Pic8} alt="img" />
                  </li>
                  <li>
                    <span>2022 - 2023</span>
                    <br />
                    Praktik på Onslip
                    <br />
                    <img src={Pic4} alt="img" />
                  </li>
                  <li>
                    <span>2021 - 2022</span>
                    <br />
                    Praktik på Formpipe
                    <br />
                    <img src={Pic3} alt="img" />
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "education" && "active-tab"
                }`}
                id="education"
              >
                <ul className="aboutlist">
                  <li>
                    <span>2022 - 2024</span>
                    <br />
                    Frontendutveckling på ITHS Stockholm
                    <br />
                    <img src={Pic9} alt="img" />
                  </li>
                  <li>
                    <span>2021 - 2022</span>
                    <br />
                    React på Folkuniversitetet Göteborg
                    <br />
                    <img src={Pic11} alt="img" />
                  </li>
                  <li>
                    <span>2020 - 2022</span>
                    <br />
                    Systemutveckling .Net C# på TUC Yrkeshögskola
                    <br />
                    <img src={Pic10} alt="img" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
