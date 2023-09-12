import {SearchForm} from "./SearchForm"
import {Tabs} from "./Tabs"
import {SearchResults} from "./SearchResults"
import { useState } from "react"

export function Search() {
    const [results, setResults] = useState("Please Search")
    const [callBackSelected, setCallBackSelected] = useState("")


    return (
    <>
      <SearchForm callback={setResults} callBackSelected={callBackSelected} />

      <Tabs setCallBackSelected={setCallBackSelected} />
      <SearchResults results={results} />
    </>
    )
}