export default function useFormat(strText) {
  const deleteSymbols = strText.replace(
    /[`~!¡@#$%^&*()_|+\-=¿?;:'",.<>/]/gi,
    ''
  )
  const replaceSpace = deleteSymbols.replace(/ /g, '-')
  const formatText = replaceSpace
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
  return formatText
}
