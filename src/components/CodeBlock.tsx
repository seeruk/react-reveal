import { HTMLAttributes, PropsWithChildren } from "react"

export type CodeBlockProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  lineNumbers?: string
  lineStart?: number
}

export const CodeBlock = ({ lineNumbers, lineStart, children, ...props }: CodeBlockProps) => {
  return (
    <pre>
      <code data-trim="" data-noescape="" data-ln-start-from={lineStart} data-line-numbers={lineNumbers} {...props}>
        {children}
      </code>
    </pre>
  )
}
