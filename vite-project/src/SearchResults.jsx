import {Home} from "./Home"
import Item from './Item'

export function SearchResults({results}) {
    try{
    return(
        
        <div className="items-container">
            <div className="row">

                {results.map((result) => (
                    
                    <Item key={result.itemId} title={result.title} price={result.price.value} image={result.image.imageUrl} itemWebUrl={result.itemWebUrl} itemID = {result.itemId}/>
                    
                    ))
                }
                  
            </div>
        </div> 
        )
    } catch {
        return(!results ? <div className="homepage">No Results...</div>:<Home />)
    }

}