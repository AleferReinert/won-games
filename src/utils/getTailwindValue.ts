/**
 * @example
 * ```
 * getTailwindValue('--color-theme-primary')
 * ```
 */
export const getTailwindValue = (cssVar: string) => {
  const styles = getComputedStyle(document.documentElement)
  return styles.getPropertyValue(cssVar)
}
