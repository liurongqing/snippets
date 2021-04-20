/**
 * 获取图片路径
 * @param {Element} el 
 * @param {*} includeDuplicates 
 * @returns 
 * 
 * @example
 * getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
 * getImages(document, false); // ['image1.jpg', 'image2.png', '...']
 */
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map((img) =>
    img.getAttribute('src')
  )
  return includeDuplicates ? images : [...new Set(images)]
}
