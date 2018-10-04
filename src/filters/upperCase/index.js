export const upperCase = (Vue) => {
  Vue.filter('typoUpperCase', (value) => {
    if (!value) return
    return typoUpperCase(value)
  })

  Vue.prototype.$typoUpperCase = (value) => {
    return typoUpperCase(value)
  }

  function typoUpperCase (value) {
    return value.toString().trim().toUpperCase()
  }
}
