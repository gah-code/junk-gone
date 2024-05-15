import { defineConfig } from "astro/config";
// import compress from "astro-compress";
import AstroPWA from "@vite-pwa/astro";

import icon from "astro-icon";

// import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
});
