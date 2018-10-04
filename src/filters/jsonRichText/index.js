export const typoJsonRichText = (Vue) => {
  Vue.filter('typoJsonRichText', (value) => {
    if (!value) return
    return typoJsonRichText(value)
  })

  Vue.prototype.$typotypoJsonRichText = (value) => {
    return typoJsonRichText(value)
  }

  function typoJsonRichText (value) {
    return decodeURIComponent(
      value
        .replace(/\s([^\s<]+)\s*$/, '\u00A0$1')
        .replace(/\+/g, '%20')
        .trim() + ''
    )
  }
}
