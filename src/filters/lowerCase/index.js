export const lowerCase = (Vue) => {
  Vue.filter('typoLowerCase', (value) => {
    if (!value) return
    return typoLowerCase(value)
  })

  Vue.prototype.$typoLowerCase = (value) => {
    return typoLowerCase(value)
  }

  function typoLowerCase (value) {
    return value.toString().trim().toLowerCase()
  }
}
