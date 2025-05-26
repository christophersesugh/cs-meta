import { defineType } from "sanity"
import { DashboardIcon } from "@sanity/icons"

export const category = defineType({
  name: "category",
  type: "document",
  title: "Categories",
  icon: DashboardIcon,
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
