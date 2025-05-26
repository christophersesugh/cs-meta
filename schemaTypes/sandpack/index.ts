import { defineType, defineField } from "sanity"
import { CodeBlockIcon } from "@sanity/icons"

export const sandpack = defineType({
  name: "sandpack",
  title: "Sandpack Templates",
  type: "document",
  icon: CodeBlockIcon,
  groups: [
    {
      name: "details",
      title: "Details",
    },
    {
      name: "options",
      title: "Options",
    },
    {
      name: "customSetup",
      title: "Custom Setup",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Template slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "template",
      title: "Template Type",
      type: "string",
      options: {
        list: [
          { title: "Static", value: "static" },
          { title: "Vanilla", value: "vanilla" },
          { title: "Vanilla TS", value: "vanilla-ts" },
          { title: "Vite React", value: "vite-react" },
          { title: "Vite React TS", value: "vite-react-ts" },
          { title: "Node.js", value: "node" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sandpackFiles",
      title: "Sandpack Files",
      type: "array",
      group: "details",
      of: [
        defineField({
          type: "object",
          name: "sandpackFile",
          title: "Sandpack File",
          fields: [
            defineField({
              name: "path",
              title: "File Path",
              type: "string",
              validation: (Rule) => Rule.required(),
              placeholder: "e.g., /src/App.js, /index.html, /package.json",
            }),
            defineField({
              name: "code",
              title: "Code",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "active",
              title: "Active File",
              type: "boolean",
              description: "This file will be shown by default",
              initialValue: false,
            }),
            defineField({
              name: "hidden",
              title: "Hidden",
              type: "boolean",
              description: "Hide this file from the file explorer",
              initialValue: false,
            }),
            defineField({
              name: "readOnly",
              title: "Read Only",
              type: "boolean",
              description: "Make this file read-only",
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: "path",
              subtitle: "code",
            },
            prepare(selection) {
              const { title, subtitle } = selection
              return {
                title: title,
                subtitle: subtitle?.substring(0, 100) + "...",
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: "options",
      title: "Sandpack Options",
      type: "object",
      group: "options",
      fields: [
        defineField({
          name: "visibleFiles",
          title: "Visible Files",
          type: "array",
          of: [{ type: "string" }],
          description:
            "Array of file paths that should be visible in the file explorer",
        }),
        defineField({
          name: "activeFile",
          title: "Active File",
          type: "string",
          description: "Path to the file that should be active by default",
        }),
        defineField({
          name: "view",
          title: "Template view",
          type: "string",
          options: {
            list: [
              { title: "Split", value: "split" },
              { title: "Preview", value: "preview" },
              { title: "Editor", value: "editor" },
            ],
          },
          initialValue: "split",
        }),
        defineField({
          name: "showLineNumbers",
          title: "Show Line Numbers",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "showInlineErrors",
          title: "Show Inline Errors",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "showTabs",
          title: "Show Tabs",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "editorHeight",
          title: "Editor Height",
          type: "string",
          initialValue: "360px",
          description: 'CSS height value (e.g., "360px", "50vh")',
        }),
        defineField({
          name: "theme",
          title: "Theme",
          type: "string",
          options: {
            list: [
              { title: "Light", value: "light" },
              { title: "Dark", value: "dark" },
              { title: "Auto", value: "auto" },
            ],
          },
          initialValue: "auto",
        }),
        defineField({
          name: "autorun",
          title: "Auto Run",
          type: "boolean",
          initialValue: true,
          description:
            "Whether to automatically run the code when there changes to files",
        }),
      ],
    }),
    defineField({
      name: "customSetup",
      title: "Sandpack custom setup",
      type: "object",
      description: "Dependencies and Dev Dependencies config",
      group: "customSetup",
      fields: [
        defineField({
          name: "dependencies",
          title: "Dependencies",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Package Name",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "version",
                  title: "Version",
                  type: "string",
                  initialValue: "latest",
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "devDependencies",
          title: "Dev Dependencies",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Package Name",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "version",
                  title: "Version",
                  type: "string",
                  initialValue: "latest",
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "template",
      description: "description",
    },
    prepare(selection) {
      const { title, subtitle, description } = selection
      return {
        title: title,
        subtitle: `${subtitle} template`,
        description: description,
      }
    },
  },
})
