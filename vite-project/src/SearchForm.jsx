import { useState } from "react";
import dotenv from "dotenv";
import axios from "axios";

export function SearchForm({callback, callBackSelected}) {
  
    const [search, setSearch] = useState("");
    //replace id and secret with own
    var ebayClientID = import.meta.env.VITE_ebayClientID;
    var ebayClientSecret = import.meta.env.VITE_ebayClientSecret;
    var authorization = 'Basic ' + btoa(ebayClientID + ':' + ebayClientSecret);
    var ebayAPIEndPoint = `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${search}&auto_correct=KEYWORD`;
    var scope = encodeURI('https://api.ebay.com/oauth/api_scope');
    var clientEbayTokenEndPoint = 'https://api.ebay.com/identity/v1/oauth2/token';
    
    // Check the tab that is selected
    function checkSelected(event) {
      if (callBackSelected == "eBay") {
        eBayApiCall();
      } else if (callBackSelected == "Buyee Auction"){
        scrapeBuyeeAuction();
      }
      event.preventDefault();
    }
    
    // Scrape buyee
    async function scrapeBuyeeAuction(){
      const req = await fetch(`https://buyee.jp/item/search/query/${search}`);
      const html = await req.text();
    }

    // get ebay AccessToken
    function eBayApiCall() {
      
        const req = fetch(clientEbayTokenEndPoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': authorization
          },
          body:`grant_type=client_credentials&scope=${scope}`
    
        }).then(res => res.json()).then(data => data.access_token).then(token => makeEbayApiRequest(token)).catch(err => console.log(err));
      }

    // make Api request
    function makeEbayApiRequest(accessToken) {
        const req = fetch(ebayAPIEndPoint, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
            }
        }).then(res => res.json()).then(data => callback(data.itemSummaries)).catch(err => console.log(err))
    }
    

    return (
    <div className= "search-container">
        <form className="search-bar" onSubmit={checkSelected}>
            <input type="text" placeholder="Search" className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="search-button"></button>
        </form>
    </div>
    )
}