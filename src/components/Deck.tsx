import { PropsWithChildren, useEffect, useRef, useState } from "react"

import Reveal from "reveal.js"
import Highlight from "reveal.js/plugin/highlight/highlight"
import Markdown from "reveal.js/plugin/markdown/markdown"
import Notes from "reveal.js/plugin/notes/notes"

import { DeckProvider } from "@/context/deck"

import "reveal.js/dist/reveal.css"

export const Deck = ({ children }: PropsWithChildren) => {
  const deckContainerRef = useRef<HTMLDivElement>(null)
  const deckRef = useRef<Reveal.Api>()
  const [deck, setDeck] = useState<Reveal.Api>()

  useEffect(() => {
    setDeck(deckRef.current)
  }, [deckRef])

  useEffect(() => {
    if (deckRef.current || !deckContainerRef.current) {
      return
    }

    deckRef.current = new Reveal(deckContainerRef.current, {
      plugins: [Highlight, Markdown, Notes],
    })

    deckRef.current.initialize({
      history: true,
    })

    setDeck(deckRef.current)

    return () => {
      try {
        deckRef.current?.destroy()
      } catch (e) {
        console.warn("failed to destroy Reveal deck", e)
      }
    }
  }, [])

  return (
    <DeckProvider value={{ api: deck }}>
      <div className="reveal" ref={deckContainerRef}>
        <div className="slides">
          {children}
        </div>
      </div>
    </DeckProvider>
  )
}
