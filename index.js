const VueTypeFilters = {
  install (Vue) {
    Vue.filter('lowercase', function (value) {
      return value.toString().toLowerCase()
    })

    Vue.filter('uppercase', function (value) {
      return value.toString().toUpperCase()
    })

    Vue.filter('capitalize', function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    })

    Vue.filter('titlecase', function (value) {
      return value.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    })

    Vue.filter('slug', function (value) {
      // credit for gist : https://gist.github.com/mathewbyrne/1280286
      const result = value.toString()
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-') //
        .replace(/[\s\W-]+/g, '-')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '')

      return result
    })

    Vue.filter('truncate', function (value, count) {
      return value.length < count ? value : value.slice(0, count) + '...'
    })

    Vue.filter('cut', function (value, count) {
      return value.length < count ? value : value.slice(0, count)
    })

    Vue.filter('remove', function (value, removalTarget) {
      return value.replace(new RegExp(removalTarget, 'g'), '')
    })

    Vue.filter('remove_first', function (value, removalTarget) {
      return value.replace(removalTarget, '')
    })

    Vue.filter('replace', function (value, replacement) {
      return value.replace(new RegExp(value, 'g'), replacement)
    })

    Vue.filter('replace_first', function (value, replacement) {
      return value.replace(value, replacement)
    })

    Vue.filter('append', function (value, string) {
      return value.toString().concat(string)
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue = window.Vue
  window.Vue.use(VueTypeFilters)
} else {
  // export default VueTypeFilters
}
