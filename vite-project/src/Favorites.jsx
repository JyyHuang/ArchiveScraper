import FavItem from './FavItem'

export function Favorites() {
    

    const keys = Object.keys(localStorage)
    const results =[]
    for (let i = 0; i < keys.length; i++) {
        const data = JSON.parse(window.localStorage.getItem(keys[i]))
        results.push(data)
    }
    
        
    return(
        <div className="fav-items-container">
            <div className="row">
            {results.map((result) =>
            <FavItem key={result[4]} title={result[0]} price={result[1]} image={result[2]} itemWebUrl={result[3]} itemID={result[4]}/>)}
            </div>
        </div>
    )
}