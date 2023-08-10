import React, { useEffect, useState } from "react";

export default function Item(props) {
    const {title, price, image, itemWebUrl, itemID} = props;
    
    // Removes from localStorage when clicked
    function toggleClass() {
        if (Object.keys(localStorage).includes(itemID)) {
            window.localStorage.removeItem(itemID)
        }
    };

    return(
        <div className="column">
            <div className="item">
                <a href={itemWebUrl} target="_blank"><img src={image} className="image"/></a>
                    <h3 className='title'>{title}</h3>
                    <div className="description-container">
                        <p className="itemPrice">${price}</p>
                        <button className={'favoriteButton'} onClick={toggleClass}>Remove</button>
                    </div>
            </div>
        </div>
    );
}