import { MarkdownSlide } from "@/components/MarkdownSlide.tsx"

export const ExampleMarkdownSlide = () => {
  return (
    <MarkdownSlide data-background-color="aquamarine" className="text-left">
      {`
        ## Markdown Slide
  
        A paragraph with some text and a [link](https://hakim.se).
  
        \`\`\`ts
        const foo = "bar"
        console.log(foo)
        \`\`\`
        
        Unfortunately, syntax highlighting doesn't appear to work in code blocks here.
      `}
    </MarkdownSlide>
  )
}
