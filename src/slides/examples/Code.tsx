import { CodeBlock } from "@/components/CodeBlock.tsx"

export const ExampleCodeSlide = () => {
  return (
    <section data-background-color="darkviolet">
      Code Example

      <CodeBlock lineNumbers="3|6|all" lineStart={12}>{`
        package main
        
        import "fmt"
        
        func main() {
          fmt.Println("Hello, World!")
        }
      `}</CodeBlock>
    </section>
  )
}
