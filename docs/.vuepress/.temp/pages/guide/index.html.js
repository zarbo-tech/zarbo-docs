export const data = JSON.parse("{\"key\":\"v-fffb8e28\",\"path\":\"/guide/\",\"title\":\"Guide\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Guide\",\"icon\":\"creative\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Highlight Features\",\"slug\":\"highlight-features\",\"link\":\"#highlight-features\",\"children\":[{\"level\":3,\"title\":\"Bar\",\"slug\":\"bar\",\"link\":\"#bar\",\"children\":[]},{\"level\":3,\"title\":\"Foo\",\"slug\":\"foo\",\"link\":\"#foo\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"guide/README.md\"}")

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
