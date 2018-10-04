export const widow = (Vue) => {
  Vue.filter('typoWidow', (value, arg1) => {
    if (!value) return
    return typoWidow(value, arg1)
  })

  Vue.prototype.$typoWidow = (value, arg1) => {
    return typoWidow(value, arg1)
  }

  function typoWidow (value, arg1) {
    const charLimit = Number(arg1) || -1
    const cleanString = value.toString().trim()
    let lastWord = cleanString.split(' ')
    lastWord = cleanString[lastWord.length - 1]

    if (charLimit === -1) {
      return value.replace(/\s([^\s<]+)\s*$/, '\u00A0$1')
    } else if (lastWord.length > charLimit && charLimit !== -1) {
      return value.replace(/\s([^\s<]+)\s*$/, '\u00A0$1')
    } else {
      return value
    }
  }
}
