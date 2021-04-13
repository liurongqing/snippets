exports.defineTags = function (dictionary) {
  dictionary.defineTag('service', {
    mustHaveValue: true,
    canHaveType: false,
    canHaveName: true,
    onTagged: function (doclet, tag) {
      console.log('doc', doclet, tag)
      doclet.service = tag.value.description
    },
  })
}
