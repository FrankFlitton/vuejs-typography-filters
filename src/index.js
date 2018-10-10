import { jsonRichText } from './filters'
import { lowerCase } from './filters'
import { smartTypeSet } from './filters'
import { stripTags } from './filters'
import { titleCase } from './filters'
import { upperCase } from './filters'
import { widow } from './filters'

// Individual filter export
export const typoJsonRichText = {
  install (Vue, options) {
    lowerCase(Vue, options)
  }
}

export const typoLowerCase = {
  install (Vue, options) {
    lowerCase(Vue, options)
  }
}

export const typoTitleCase = {
  install (Vue, options) {
    titleCase(Vue, options)
  }
}

export const typoSmartTypeSet = {
  install (Vue, options) {
    smartTypeSet(Vue, options)
  }
}

export const typoStripTags = {
  install (Vue, options) {
    stripTags(Vue, options)
  }
}

export const typoUpperCase = {
  install (Vue, options) {
    upperCase(Vue, options)
  }
}

export const typoWidow = {
  install (Vue, options) {
    widow(Vue, options)
  }
}

// Complete package
const VuejsTypographyFilters = {
  install (Vue, options) {
    jsonRichText(Vue, options)
    lowerCase(Vue, options)
    smartTypeSet(Vue, options)
    stripTags(Vue, options)
    titleCase(Vue, options)
    upperCase(Vue, options)
    widow(Vue, options)
  }
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuejsTypographyFilters)
}

export default VuejsTypographyFilters
// export default VuejsTypographyFilters
export const version = '__VERSION__'
