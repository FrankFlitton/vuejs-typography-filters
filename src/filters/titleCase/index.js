export const titleCase = (Vue) => {
  Vue.filter('typoTitleCase', (value) => {
    if (!value) return
    return typoTitleCase(value)
  })

  Vue.prototype.$typoTitleCase = (value) => {
    return typoTitleCase(value)
  }

  function typoTitleCase (value) {
    return value.toString().trim()
      .replace(
        /\w\S*/g,
        (txt) => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        }
      )
  }
}
