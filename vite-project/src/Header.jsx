import logo from './assets/archivescraper.png'

export function Header() {

    function closeWindow(e){
        window.close()
    }
    return (
      <div className="header">
          <img src={logo} alt="Icon" className="icon-image" />
          <p className="header-text">ArchiveScraper</p>
          <div className="exit-container" >
              <div className="exit-button" id="exit-button" onClick={closeWindow}>&#10006;</div>
          </div>
      </div>
    )
}