import categoryArray from 'pages/category.json'
export default function useCategoryID(str) {
  const catID = categoryArray.filter((cat) => cat.id === str)
  const catName = categoryArray.filter((cat) => cat.name === str)
  const catValue = categoryArray.filter((cat) => cat.value === str)
  if (catID.length === 1) {
    return catID
  } else if (catName.length === 1) {
    return catName
  } else if (catValue.length === 1) {
    return catValue
  } else {
    return str
  }
}
