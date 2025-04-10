import { defineType } from "sanity"

export const category = defineType({
  name: "category",
  type: "document",
  title: "Categories",
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
