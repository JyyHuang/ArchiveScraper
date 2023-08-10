import {SearchForm} from "./SearchForm"
import {Tabs} from "./Tabs"
import {SearchResults} from "./SearchResults"
import { useState } from "react"

export function Search() {
    const [results, setResults] = useState("Please Search")

    return (
    <>
      <SearchForm callback={setResults}/>

      <Tabs />
      <SearchResults results={results}/>
    </>
    )
}