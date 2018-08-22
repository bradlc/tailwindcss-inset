module.exports = function({ insets, inset, variants = [] } = {}) {
  return function({ addUtilities, e }) {
    let values = insets || inset || {}
    let utilities = Object.keys(values).reduce((utils, key) => {
      utils[`.${e(`inset-${key}`)}`] = {
        top: values[key],
        right: values[key],
        bottom: values[key],
        left: values[key]
      }
      utils[`.${e(`inset-t-${key}`)}`] = {
        top: values[key]
      }
      utils[`.${e(`inset-r-${key}`)}`] = {
        right: values[key]
      }
      utils[`.${e(`inset-b-${key}`)}`] = {
        bottom: values[key]
      }
      utils[`.${e(`inset-l-${key}`)}`] = {
        left: values[key]
      }
      return utils
    }, {})

    addUtilities(utilities, variants)
  }
}
