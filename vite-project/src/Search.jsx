import {SearchForm} from "./SearchForm"
import {Tabs} from "./Tabs"
import {SearchResults} from "./SearchResults"
import { useState } from "react"

export function Search() {
  const [results, setResults] = useState("Please Search")
  const [callBackSelected, setCallBackSelected] = useState()

    return (
    <>
      <SearchForm callback={setResults} selected={callBackSelected} />

      <Tabs callBackSelected={setCallBackSelected} />
      <SearchResults results={results} />
    </>
    )
}