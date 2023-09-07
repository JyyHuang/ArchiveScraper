import {SearchForm} from "./SearchForm"
import {Tabs} from "./Tabs"
import {SearchResults} from "./SearchResults"
import { useState } from "react"

export function Search() {
  const [results, setResults] = useState("Please Search")
  

  function getTab() {
    
  }
    return (
    <>
      <SearchForm callback={setResults} tab={getTab}/>

      <Tabs />
      <SearchResults results={results} />
    </>
    )
}