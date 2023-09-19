import React, { useState } from 'react'
import './styles.css'
import {Header} from "./Header"    
import {Contact} from "./Contact"
import {Search} from "./Search"
import { Favorites } from "./Favorites"
import {Pages} from "./Pages"
import dotenv from "dotenv"

function App() {
  const [page, setPage] = useState("Search");
  const [theme, setTheme] = useState(false);

  // Changes pages on button click
  function changeContact() {
    setPage("Contact");
    setTheme(prevTheme => !prevTheme);
    theme === true && setPage("Search");
  };

  function changeFavorites(){
    setPage("Favorites");
    setTheme(true)
  }


  return (
    <>
    <header>
        <Header />
    </header>

    <main id="main">
      {page === "Search" && <Search/> || page === "Contact" && <Contact /> || page === "Favorites" && <Favorites/>}
    </main>

    
      <footer>
      <Pages />
      <div className="footer-container">
          <div className="contact" onClick={changeContact}>{(!theme) ? "Contact": "Search" }</div>
          <div className="favorites" title="Favorites">
              <div className="star" onClick={changeFavorites}>&#9734;</div>
          </div>
      </div>
    </footer>
    </>
  )
}

export default App
