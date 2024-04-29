export const ExampleTransitionsSlide = () => {
  return (
    <>
      <section>
        <h2>Transitions</h2>
        <p>A lot of slide transitions are included, next are examples of all that are available</p>
      </section>
      <section data-transition="none">
        The train goes on …
      </section>
      <section data-transition="fade">
        and on …
      </section>
      <section data-transition="slide">
        and on …
      </section>
      <section data-transition="convex">
        and on …
      </section>
      <section data-transition="concave">
        and on …
      </section>
      <section data-transition="zoom">
        and on …
      </section>
      <section data-transition="slide-in fade-out">
        and stops.
      </section>
      <section data-transition="fade-in slide-out">
        (Passengers entering and leaving)
      </section>
      <section data-transition="slide">
        And it starts again.
      </section>
    </>
  )
}
