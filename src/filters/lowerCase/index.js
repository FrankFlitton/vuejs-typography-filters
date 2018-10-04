export const typoLowerCase = (Vue) => {
  Vue.filter('typoLowerCase', (value) => {
    if (!value) return
    return typoLowerCase(value)
  })

  Vue.prototype.$typotypoLowerCase = (value) => {
    return typoLowerCase(value)
  }

  function typoLowerCase (value) {
    return value.toString().trim().toLowerCase()
  }
}
