export const jsonRichText = (Vue) => {
  Vue.filter('jsonRichText', (value) => {
    if (!value) return
    return jsonRichText(value)
  })

  Vue.prototype.$typoJsonRichText = (value) => {
    return jsonRichText(value)
  }

  function jsonRichText (value) {
    return decodeURIComponent(
      value
        .replace(/\s([^\s<]+)\s*$/, '\u00A0$1')
        .replace(/\+/g, '%20')
        .trim() + ''
    )
  }
}
