import { useEffect, useState } from "react"

export function Tabs({ callBackSelected }) {
    
    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState("eBay")
    const [symbolClass, setSymbolClass] = useState(false)
    
    const shops = ["eBay", "Buyee Auction", "Mercari"];
    callBackSelected(selected);
    return (
    <>
    <div className="tab-container">
                <div className="select" onClick={() => {
                    setIsActive(!isActive);
                    setSymbolClass(!symbolClass);
                }
            }>      
            <span>{selected}</span>
            <div className={`dropdown-symbol ${symbolClass && `dropdown-symbol-rotate`}`}   ></div>       
        </div>
        {isActive && (
        <ul className="menu">
        {shops.map((shop) => (
            <li key={shop}
                onClick={() => {
                    setSelected(shop);
                    setIsActive(false);
                    setSymbolClass(false)
                }
            } className={selected === shop && "active"}>{shop}</li>
        ))}             
        </ul>
        )}        
    </div>
    </>
                
    )
}