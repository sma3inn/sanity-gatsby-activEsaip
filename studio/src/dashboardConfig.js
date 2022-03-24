export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "623c40d71ec068323f597791",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-activesaip-studio",
                  apiId: "149b7d4a-c827-451c-a0b3-d5a7f499848e",
                },
                {
                  buildHookId: "623c40d718071f2ff968371c",
                  title: "Blog Website",
                  name: "sanity-gatsby-activesaip",
                  apiId: "0fbef9be-0038-48f0-8dda-ba3541f4dc4c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sma3inn/sanity-gatsby-activEsaip",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-activesaip.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
