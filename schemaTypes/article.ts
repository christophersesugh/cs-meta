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
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required().error("Image is required"),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "general", value: "general" },
          { title: "career", value: "career" },
          { title: "architecture", value: "architecture" },
          { title: "backend", value: "backend" },
          { title: "frontenr", value: "frontend" },
          { title: "testing", value: "testing" },
          { title: "tools", value: "tools" },
          { title: "database", value: "database" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required().error("Category is required"),
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "react", value: "react" },
          { title: "javascript", value: "javascript" },
          { title: "typescript", value: "typescript" },
          { title: "css", value: "css" },
          { title: "html", value: "html" },
          { title: "nodejs", value: "nodejs" },
          { title: "testing", value: "testing" },
          { title: "express", value: "express" },
          { title: "mongodb", value: "mongodb" },
          { title: "sql", value: "sql" },
          { title: "docker", value: "docker" },
          { title: "cloud", value: "cloud" },
        ],
        layout: "list",
      },
      validation: (Rule) => Rule.min(1).error("Select at least one tag"),
    }),

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
      name: "videoId",
      title: "Youtube Video ID",
      type: "string",
    }),
  ],
})
