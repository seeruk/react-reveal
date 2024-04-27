import { useEffect, useRef } from "react"
import Reveal from "reveal.js"
import Highlight from "reveal.js/plugin/highlight/highlight"
import Markdown from "reveal.js/plugin/markdown/markdown"
import Notes from "reveal.js/plugin/notes/notes"

import "reveal.js/dist/reveal.css"
import "reveal.js/dist/theme/black.css"
import "reveal.js/plugin/highlight/monokai.css"

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
        <section>
          <h2>React + Reveal.js</h2>
          <h3>Introduction</h3>
          <p className="mt-8 text-neutral-400 text-xs ">Elliot Wright // 2024</p>
        </section>
        <section data-markdown="" data-background-color="aquamarine">
          <div data-template="">
            {`
              ## Title Slide
        
              A paragraph with some text and a [link](https://hakim.se).
        
              \`\`\`ts
              const foo = "bar"
              console.log(foo)
              \`\`\`
            `}
          </div>
        </section>

        <section data-background-color="rgb(70, 70, 255)">
          Slide 1
          <pre><code data-trim="" data-noescape="" data-line-numbers="3,4|1|5">
(def lazy-fib
  (concat
   [0 1]
   ((fn rfib [a b]
        (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
          </code></pre>
        </section>
        <section>
          <section>Slide 2.1</section>
          <section>Slide 2.2</section>
          <section>Slide 2.3</section>
        </section>
        <section>
          <p className="fragment">Fade in</p>
          <p className="fragment fade-out">Fade out</p>
          <p className="fragment highlight-red">Highlight red</p>
          <p className="fragment fade-in-then-out">Fade in, then out</p>
          <p className="fragment fade-up">Slide up while fading in</p>
        </section>
        <section>
          <h2 className="r-fit-text">Fit Text</h2>
          <h2 className="r-fit-text">Can be used for multiple headlines</h2>
        </section>
        <section>
          <h2>Slide 5</h2>
          <p>Has custom components!</p>

          <aside className="notes">
            Shhh, these are your private notes 📝
          </aside>
        </section>
        <section>Slide 6</section>
        <section>Slide 7</section>
      </div>
    </div>
  )
}
