import { defineField, defineType } from "sanity"

export const article = defineType({
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "createdAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required().error("Published Date is required"),
    }),

    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required().error("Image is required"),
    }),
    {
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required().error("Category is required"),
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
      validation: (Rule) => Rule.min(1).error("Atleast one tag is required."),
    },

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) => Rule.required().error("Excerpt is required"),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "markdown",
      validation: (Rule) => Rule.required().error("Content is required"),
    }),
    defineField({
      name: "sandpackTemplates",
      title: "Embedded Sandpack Templates",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sandpack" }],
        },
      ],
    }),
  ],
})
