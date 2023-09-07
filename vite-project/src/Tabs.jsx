import { useState } from "react"

export function Tabs() {
    
    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState("eBay")
    const [activeClass, setActiveClass] = useState(true)

    const shops = ["eBay", "Buyee Auction", "Mercari"]
    return (
    <>
    <div className="tab-container">
        <div className="select" onClick={() => setIsActive(!isActive)}>      
        <span>{selected}</span>
            <div className="dropdown-symbol"></div>       
        </div>
        {isActive && (
        <ul className="menu">
        {shops.map((shop) => (
            <li key={shop}
                onClick={() => {
                    setSelected(shop);
                    setIsActive(false);
                }
            }>{shop}</li>
        ))}             
        </ul>
        )}        
    </div>
    </>
                
    )
}