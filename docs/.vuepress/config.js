const path = require("path");

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