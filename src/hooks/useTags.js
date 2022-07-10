export default function useTags(str) {
  const arrayFromComma = str.split(',')
  const tags = arrayFromComma
    .filter((tagsNull) => tagsNull !== '')
    .map((tag) => {
      const tagsResetSpace = tag.replace(/ /g, '')
      return tagsResetSpace
    })
  return tags
}
