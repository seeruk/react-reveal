import { HTMLAttributes, PropsWithChildren } from "react"

export type CodeBlockProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  lineNumbers?: string
  lineStart?: number
}

export const CodeBlock = ({ lineNumbers, lineStart, children, className, ...props }: CodeBlockProps) => {
  return (
    <pre className={className}>
      <code className="p-3 rounded" data-trim="" data-noescape="" data-ln-start-from={lineStart} data-line-numbers={lineNumbers} {...props}>
        {children}
      </code>
    </pre>
  )
}
