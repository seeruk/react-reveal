import { HTMLAttributes } from "react"

export type ExternalMarkdownSlideProps = HTMLAttributes<HTMLDivElement> & {
  src: string
}

export const ExternalMarkdownSlide = ({ src, ...props }: ExternalMarkdownSlideProps) => {
  return (
    <section {...props} data-markdown={src} />
  )
}
