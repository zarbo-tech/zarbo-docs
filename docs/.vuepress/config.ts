import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",

  plugins: [
    searchPlugin({
      // your options
    }),
  ],

  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     title: " ",
  //     description: "A docs demo for vuepress-theme-hope",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "Русский",
  //     description: "vuepress-theme-hope 的文档演示",
  //   },
  // },

  theme,

  shouldPrefetch: false,
});
