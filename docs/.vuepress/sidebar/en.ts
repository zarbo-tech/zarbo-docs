import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "note",
      text: "Руководство пользователя",
      prefix: "user-docs/",
      link: "user-docs/",
      children: "structure",
    },
    {
      icon: "note",
      text: "Руководство администратора",
      prefix: "admin-docs/",
      link: "admin-docs/",
      children: "structure",
    },
    "slides",
  ],
});
