import { MarkdownSlide } from "@/components/MarkdownSlide"

export const ExampleMarkdownSlide = () => {
  return (
    <MarkdownSlide data-background-color="aquamarine" className="text-left">
      {`
        ## Markdown Slide
  
        A paragraph with some text and a [link](https://hakim.se).
        
        You can also make things **bold** or *italic* easily. This slide in particular also has some
        tailwind styles applied to it.
      `}
    </MarkdownSlide>
  )
}
