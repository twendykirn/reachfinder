import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig({
	plugins: [cloudflare({ viteEnvironment: { name: 'ssr' } }), tsconfigPaths(), tailwindcss(), tanstackStart(), viteReact()],
});
