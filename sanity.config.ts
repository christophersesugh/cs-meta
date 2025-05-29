import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { markdownSchema } from "sanity-plugin-markdown"
import { schemaTypes } from "./schemaTypes"
import { codeInput } from "@sanity/code-input"
import { StreamLanguage } from "@codemirror/language"

export default defineConfig({
  name: "default",
  title: "Coding Simba",

  projectId: "3alj5od9",
  dataset: "production",

  plugins: [structureTool(), visionTool(), markdownSchema(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
