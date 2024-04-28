import { CodeBlock } from "@/components/CodeBlock"

export const ExampleCodeSlide = () => {
  return (
    <section data-background-color="darkviolet">
      <h2>Code Example</h2>
      <p>You can include code examples inside slides, and step through highlighting lines, or ranges of lines</p>

      <CodeBlock className="mt-4" lineNumbers="all|3|5-7|all" lineStart={12}>{`
        package main
        
        import "fmt"
        
        func main() {
          fmt.Println("Hello, World!")
        }
      `}</CodeBlock>
    </section>
  )
}
