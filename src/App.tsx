import { Deck } from "@/components/Deck"
import { ExampleTailwindTitleSlide } from "@/slides/examples/TailwindTitle"
import { ExampleRevealApiSlide } from "@/slides/examples/RevealApi"
import { ExampleMarkdownSlide } from "@/slides/examples/Markdown"
import { ExampleExternalMarkdownSlide } from "@/slides/examples/ExternalMarkdown"
import { ExampleCodeSlide } from "@/slides/examples/Code"
import { ExampleSubSlidesSlide } from "@/slides/examples/SubSlides"
import { ExampleSpeakerNotesSlide } from "@/slides/examples/SpeakerNotes"
import { ExampleFragmentsSlide } from "@/slides/examples/Fragments"
import { ExampleFitTextSlide } from "@/slides/examples/FitText"

import "highlight.js/styles/atom-one-dark.css"
import "@/theme.css"

export const App = () => {
  return (
    <Deck>
      <ExampleTailwindTitleSlide />
      <ExampleMarkdownSlide />
      <ExampleExternalMarkdownSlide />
      <ExampleCodeSlide />
      <ExampleRevealApiSlide />
      <ExampleSubSlidesSlide />
      <ExampleSpeakerNotesSlide />
      <ExampleFragmentsSlide />
      <ExampleFitTextSlide />
    </Deck>
  )
}
