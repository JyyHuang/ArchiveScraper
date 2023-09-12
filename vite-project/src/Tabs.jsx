import { useEffect, useState } from "react"

export function Tabs({ setCallBackSelected }) {
    
    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState("eBay")
    const [symbolClass, setSymbolClass] = useState(false)
    
    useEffect(() => {
        setCallBackSelected(selected)
    }, [selected])

    const shops = ["eBay", "Buyee Auction", "Mercari"];

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