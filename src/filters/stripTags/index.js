export const typoStripTags = (Vue) => {
  Vue.filter('typoStripTags', (value) => {
    if (!value) return
    return typoStripTags(value)
  })

  Vue.prototype.$typotypoStripTags = (value) => {
    return typoStripTags(value)
  }

  function typoStripTags (value) {
    return value
      .replace(/<(?:.|\n)*?>/gm, '')
      .trim()
  }
}
