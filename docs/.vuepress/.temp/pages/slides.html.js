export const data = JSON.parse("{\"key\":\"v-2e3eac9e\",\"path\":\"/slides.html\",\"title\":\"Презентация\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Презентация\",\"icon\":\"slides\",\"layout\":\"Slide\"},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":1.15,\"words\":344},\"filePathRelative\":\"slides.md\"}")

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
