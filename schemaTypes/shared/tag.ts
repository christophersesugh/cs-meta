import { defineType } from "sanity"
import { TagsIcon } from "@sanity/icons"

export const tag = defineType({
  name: "tag",
  type: "document",
  title: "Tags",
  icon: TagsIcon,
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
