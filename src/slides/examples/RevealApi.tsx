import { HTMLAttributes, PropsWithChildren, useState } from "react"

import { useDeck } from "@/context/deck"

const Button = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  return <button className="bg-neutral-700 px-2 py-1 rounded-sm" {...props}>{children}</button>
}

export const ExampleRevealApiSlide = () => {
  const deck = useDeck()
  const [slide, setSlide] = useState(0)

  console.log(deck.api)

  // React doesn't re-render as the internal state of Reveal.js changes, so we have to hook into
  // events exposed by Reveal.js to update our component state - but we can get some interesting
  // information from the API, like the current slide index!
  deck.api?.on("slidechanged", () => {
    setSlide(deck.api?.getState().indexh || 0)
  })

  return (
    <section>
      <h2>Reveal API</h2>
      <p>Reveal.js provides a JavaScript API for controlling the presentation programmatically</p>
      <div className="flex gap-4 justify-center">
        <p>You're on slide: {slide}</p>
        <Button onClick={() => deck.api?.prev()}>Previous</Button>
        <Button onClick={() => deck.api?.next()}>Next</Button>
      </div>
    </section>
  )
}
