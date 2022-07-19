export default function isValidEmail(email) {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  const validate = regExp.test(email) !== false
  return validate
}
