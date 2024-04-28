import { defineConfig, Plugin } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"

const fullReloadAlways: Plugin = {
  name: "full-reload",
  handleHotUpdate({ server }) {
    server.hot.send({ type: "full-reload" })
    return []
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), fullReloadAlways],
})
