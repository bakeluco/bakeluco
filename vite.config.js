import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "www.bakeluco.com.ar",
  plugins: [vue()],
});
