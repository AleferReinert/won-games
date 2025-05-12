export function formatPhoneNumber(number: string) {
  if (number.length !== 10 && number.length !== 11) {
    throw new Error('Invalid phone number. Should be 10 or 11 digits.')
  }

  const countryCode = number.length === 11 ? `+${number[0]} ` : '+1 '
  const areaCode = `(${number.slice(-10, -7)}) `
  const centralOffice = `${number.slice(-7, -4)}-`
  const lineNumber = `${number.slice(-4)}`

  return countryCode + areaCode + centralOffice + lineNumber
}
