// @ts-check
import { defineConfig } from "astro/config";
import techradar from "@dirsigler/astro-techradar";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://demo.techradar.irsigler.dev",
  integrations: [
    techradar({
      name: "demo.techradar.irsigler.dev",
      title: "Tech Radar Demo",
      subtitle:
        "An overview of the technologies, frameworks, processes, and languages we use and evaluate.",
      footerText: "Built with Astro &middot",
      color: {
        toggle: true,
        mode: "system",
      },
      allowEditing: true,
      editBaseUrl:
        "https://github.com/dirsigler/astro-techradar-demo/edit/main/segments",
      socialLinks: [
        {
          label: "GitHub",
          href: "https://github.com/dirsigler/astro-techradar-demo",
          icon: "github",
        },
      ],
    }),
    sitemap(),
  ],
});
