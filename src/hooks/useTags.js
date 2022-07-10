export default function useTags(str) {
  const arrayFromComma = str.split(',')
  const tags = arrayFromComma
    .filter((tagsNull) => tagsNull !== '')
    .map((tag) => {
      return tag
    })
  return tags
}
