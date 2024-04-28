## External Markdown

If you place a **Markdown** file in the `public` folder, it can be used as a slide, supporting any
of the features supported by inline Markdown slides.

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Code is supported, but syntax highlighting doesn't appear to work well in Markdown.
