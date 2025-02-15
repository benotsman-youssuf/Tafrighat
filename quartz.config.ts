import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "تفريغات",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ar-SA",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Amiri",
        body: "Amiri",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f3e9",
          lightgray: "#e0d9c5",
          gray: "#b8ae98",
          darkgray: "#5c5646",
          dark: "#2b2922",
          secondary: "#8a6f3e",
          tertiary: "#a98e4b",
          highlight: "rgba(138, 111, 62, 0.15)",
          textHighlight: "#d4bc7e88",
        },
        darkMode: {
          light: "#1a1814",
          lightgray: "#2c2620",
          gray: "#5c5646",
          darkgray: "#b8ae98",
          dark: "#e0d9c5",
          secondary: "#d4bc7e",
          tertiary: "#a98e4b",
          highlight: "rgba(138, 111, 62, 0.15)",
          textHighlight: "#8a6f3e88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config