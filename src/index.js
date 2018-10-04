import { lowerCase } from './filters'
import { stripTags } from './filters'
import { jsonRichText } from './filters'
import { widow } from './filters'

// Complete package
export const VuejsTypographyFilters = {
  install (Vue, options) {
    // filters
    lowerCase(Vue, options)
    stripTags(Vue, options)
    jsonRichText(Vue, options)
    widow(Vue, options)
  }
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuejsTypographyFilters)
}

// export default VuejsTypographyFilters
const version = '__VERSION__'
// Export all components too
export {
  lowerCase,
  version
}
