import React from "react";

export default function Item(props) {
    const {title, price, image, itemWebUrl, itemID} = props;
    

    function toggleClass() {
        if (Object.keys(localStorage).includes(itemID)) {
            removeFavorite();
        } else {
            addFavorite();
            
        };
    };

    function addFavorite() {
        window.localStorage.setItem(itemID, JSON.stringify([title, price, image, itemWebUrl, itemID]));
    }

    function removeFavorite() {
        window.localStorage.removeItem(itemID)
    }

    return(
        <div className="column">
            <div className="item">
                <a href={itemWebUrl} target="_blank"><img src={image} className="image"/></a>
                    <h3 className='title'>{title}</h3>
                    <div className="description-container">
                        <p className="itemPrice">${price}</p>
                        <button className={'favoriteButton'} onClick={toggleClass}>Add</button>
                    </div>
            </div>
        </div>
    );
}