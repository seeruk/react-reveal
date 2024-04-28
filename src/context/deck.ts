import { createContext, useContext } from "react"
import Reveal from "reveal.js"

export type DeckContextType = {
  api?: Reveal.Api
}

const DeckContext = createContext<DeckContextType>({})

export const useDeck = () => {
  return useContext(DeckContext)
}

export const DeckProvider = DeckContext.Provider
