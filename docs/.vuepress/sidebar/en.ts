import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "note",
      text: "Введение",
      prefix: "user-docs/",
      link: "user-docs/",
      children: "structure",
    },
    {
      icon: "note",
      text: "Все о моделировании",
      prefix: "modeling-docs/",
      link: "modeling-docs/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
