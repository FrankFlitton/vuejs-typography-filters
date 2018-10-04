export const stripTags = (Vue) => {
  Vue.filter('stripTags', (value) => {
    if (!value) return
    return stripTags(value)
  })

  Vue.prototype.$typostripTags = (value) => {
    return stripTags(value)
  }

  function stripTags (value) {
    return value
      .replace(/<(?:.|\n)*?>/gm, '')
      .trim()
  }
}
