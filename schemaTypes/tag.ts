import { defineType } from "sanity"

export const tag = defineType({
  name: "tag",
  type: "document",
  title: "Tags",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    },
  ],
})
