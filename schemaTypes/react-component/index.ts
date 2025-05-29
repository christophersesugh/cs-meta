import { defineField, defineType } from "sanity"
import { CodeBlockIcon } from "@sanity/icons"

export const reactComponent = defineType({
  name: "component",
  title: "React components",
  type: "document",
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "file",
      title: "Component name",
      type: "code",
      options: {
        withFilename: true,
        language: "tsx",
        languageAlternatives: [
          { title: "Tsx", value: "tsx" },
          { title: "Jsx", value: "jsx" },
          { title: "Typescript", value: "typescript" },
          { title: "Javascript", value: "javascript" },
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "excerpt",
      media: "image",
    },
  },
})
