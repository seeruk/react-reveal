export const ExampleFragmentsSlide = () => {
  return (
    <section className="text-left">
      <h2>Fragments</h2>
      <p>You can mark parts of a slide as fragments, allowing them to pop in or out with subtle animations</p>
      <p className="fragment fade-out">Fade out</p>
      <p className="fragment highlight-current-red">Highlight red</p>
      <p className="fragment">Fade in</p>
      <p className="fragment fade-in-then-out">Fade in, then out</p>
      <p className="fragment fade-up">Slide up while fading in</p>
    </section>
  )
}
