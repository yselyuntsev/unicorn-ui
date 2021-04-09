module.exports = {
  title: "Unicorn UI",
  description: "Библиотека компонентов для продуктов \"Пионер\"",

  head: [
    ["meta", { name: "theme-color", content: "#8B5CF6" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ]
  ],

  themeConfig: {
    sidebar: [
      {
        title: "Компоненты",
        collapsable: false,
        children: [
          "/components/alerts",
          "/components/application",
          "/components/avatars",
          "/components/badges",
          "/components/buttons",
          "/components/cards",
          "/components/dialogs",
          "/components/dividers",
          "/components/icons",
          "/components/lists",
          "/components/progressbar",
        ]
      },

      {
        title: "Api",
        collapsable: true,
        children: [
          "/api/u-alert"
        ]
      }
    ]
  },
};