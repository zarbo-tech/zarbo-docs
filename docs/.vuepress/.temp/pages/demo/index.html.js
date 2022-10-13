export const data = JSON.parse("{\"key\":\"v-1473bf53\",\"path\":\"/demo/\",\"title\":\"Guides\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Guides\",\"index\":false,\"icon\":\"creative\",\"category\":[\"Guide\"]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Catalog\",\"slug\":\"catalog\",\"link\":\"#catalog\",\"children\":[]}],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"demo/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
