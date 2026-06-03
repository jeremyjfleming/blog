import "./src/styles/global.css"
import "katex/dist/katex.min.css"

export const onClientEntry = () => {
  window.netlifyIdentity?.on("init", user => {
    if (!user) {
      window.netlifyIdentity?.on("login", () => {
        document.location.href = "/admin/"
      })
    }
  })
}

