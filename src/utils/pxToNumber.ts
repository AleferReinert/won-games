// Convert a string with 'px' to number
// Example: '100px' to 100
export const pxToNumber = (themeBreakpoint: string) => {
  return Number(themeBreakpoint.replace('px', ''))
}
