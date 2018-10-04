export const lowerCase = (Vue) => {
  Vue.filter('lowerCase', (value) => {
    if (!value) return
    return lowerCase(value)
  })

  Vue.prototype.$typoLowercase = (value) => {
    return lowerCase(value)
  }

  function lowerCase (value) {
    return value.toString().toLowerCase()
  }
}
