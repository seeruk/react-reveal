import { HTMLAttributes, PropsWithChildren } from "react"

export type MarkdownSlideProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const MarkdownSlide = ({ children, ...props }: MarkdownSlideProps) => {
  return (
    <section {...props} data-markdown="">
      <div data-template="">
        {children}
      </div>
    </section>
  )
}
