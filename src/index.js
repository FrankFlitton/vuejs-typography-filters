import { typoLowerCase } from './filters'
import { typoStripTags } from './filters'
import { typoJsonRichText } from './filters'
import { typoWidow } from './filters'

// Complete package
export const VuejsTypographyFilters = {
  install (Vue, options) {
    // filters
    typoLowerCase(Vue, options)
    typoStripTags(Vue, options)
    typoJsonRichText(Vue, options)
    typoWidow(Vue, options)
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
  typoLowerCase,
  version
}
