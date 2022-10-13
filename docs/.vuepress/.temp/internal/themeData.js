export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$eLRO9WSCc.I35XtnzExh.eGLTjCMisXGmc3.8FYdrEB2BrU/RIjZu\"],\"/zh/demo/encrypt.html\":[\"$2a$10$LpuiJHcVM.OzZNsKHnIaFuFjiNf./QHB4Ku2cYbbZyEVvA/BXB2Cq\"]}},\"pure\":false,\"darkmode\":\"disable\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":{\"/\":[\"\",{\"icon\":\"note\",\"text\":\"Руководство пользователя\",\"prefix\":\"user-docs/\",\"link\":\"user-docs/\",\"children\":\"structure\"},{\"icon\":\"note\",\"text\":\"Руководство администратора\",\"prefix\":\"admin-docs/\",\"link\":\"admin-docs/\",\"children\":\"structure\"},\"slides\"]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page on GitHub\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"logo\":\"/zarbo.svg\",\"docsDir\":\"demo/theme-docs/src\",\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"navbar\":[{\"text\":\"info@zarbo.tech\",\"link\":\"mailto:info@zarbo.tech\",\"icon\":\"/assets/icon/email.png\"},{\"text\":\" \",\"link\":\"https://wa.clck.bar/79518726155\",\"icon\":\"/assets/icon/WA.png\"},{\"text\":\" \",\"link\":\"https://t.me/zarbo_tech\",\"icon\":\"/assets/icon/TG.png\"}],\"footer\":\"<a href=\\\"http://zarbo.tech\\\"> © Zarbo. 2022 Все права защищены </a>\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
