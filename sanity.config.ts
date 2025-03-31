import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { markdownSchema } from "sanity-plugin-markdown"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemaTypes"

export default defineConfig({
  name: "default",
  title: "Coding Simba",

  projectId: "3alj5od9",
  dataset: "production",

  plugins: [structureTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
