import { useEffect, useRef } from "react"
import Reveal from "reveal.js"
import Highlight from "reveal.js/plugin/highlight/highlight"
import Markdown from "reveal.js/plugin/markdown/markdown"
import Notes from "reveal.js/plugin/notes/notes"

import "reveal.js/dist/reveal.css"
// import "reveal.js/dist/theme/black.css"
import "highlight.js/styles/atom-one-dark.css"
import "./theme.css"

import { ExampleTailwindTitleSlide } from "@/slides/examples/TailwindTitle"
import { ExampleMarkdownSlide } from "@/slides/examples/Markdown"
import { ExampleExternalMarkdownSlide } from "@/slides/examples/ExternalMarkdown"
import { ExampleCodeSlide } from "@/slides/examples/Code"
import { ExampleSubSlidesSlide } from "@/slides/examples/SubSlides"
import { ExampleSpeakerNotesSlide } from "@/slides/examples/SpeakerNotes"
import { ExampleFragmentsSlide } from "@/slides/examples/Fragments"
import { ExampleFitTextSlide } from "@/slides/examples/FitText.tsx"

export const App = () => {
  const deckContainerRef = useRef<HTMLDivElement>(null)
  const deckRef = useRef<Reveal.Api>()

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

    return () => {
      try {
        deckRef.current?.destroy()
      } catch (e) {
        console.warn("failed to destroy Reveal deck", e)
      }
    }
  }, [])

  return (
    <div className="reveal" ref={deckContainerRef}>
      <div className="slides">
        <ExampleTailwindTitleSlide />
        <ExampleMarkdownSlide />
        <ExampleExternalMarkdownSlide />
        <ExampleCodeSlide />
        <ExampleSubSlidesSlide />
        <ExampleSpeakerNotesSlide />
        <ExampleFragmentsSlide />
        <ExampleFitTextSlide />
      </div>
    </div>
  )
}
