const allUniqueBy = (arr, fn) => arr.length === new Set(arr.map(fn)).size
