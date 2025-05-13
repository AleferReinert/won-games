import * as S from './Platforms.styles'

interface PlatformsProps {
  platforms: string[]
}

const Platforms = ({ platforms }: PlatformsProps) => {
  /*
    Agrupa os sistemas operacionais.
    Exemplo:
    - Recebe: ['PlayStation 4','PlayStation 5','Xbox Series X','Windows 7','Windows 8','Windows XP']
    - Retorna: 'PlayStation (4, 5), Xbox Series X, Windows (7, 8, XP)'
  */

  // Ordena as versões de cada plataforma dentro dos parênteses
  function sortedGrouped(obj: Record<string, string[]>): Record<string, string[]> {
    const novoObj = {} as Record<string, string[]>

    for (const chave in obj) {
      novoObj[chave] = obj[chave].sort((a, b) => {
        if (!isNaN(Number(a)) && !isNaN(Number(b))) {
          return a.length - b.length || a.localeCompare(b)
        }
        return a.localeCompare(b)
      })
    }

    return novoObj
  }

  const groupSystems = (platforms: string[]): string => {
    const grouped: { [key: string]: string[] } = {}
    const noVersion: string[] = []

    platforms.forEach((item) => {
      const firstSpaceIndex = item.indexOf(' ')
      if (firstSpaceIndex === -1) {
        noVersion.push(item) // Sem versão, ex: "Mac", "Linux"
        return
      }

      const platform = item.substring(0, firstSpaceIndex)
      const version = item.substring(firstSpaceIndex + 1)

      if (!grouped[platform]) {
        grouped[platform] = []
      }
      grouped[platform].push(version)
    })

    const sortedGroupedPlatforms = sortedGrouped(grouped)
    const sortedPlatforms = Object.keys(sortedGroupedPlatforms).sort()
    const sortedNoVersion = noVersion.sort()

    let result = ''

    // Adiciona plataformas com versões agrupadas
    for (const platform of sortedPlatforms) {
      if (result !== '') result += ', '
      const versions = sortedGroupedPlatforms[platform]
      if (versions.length > 1) {
        result += `${platform} (${versions.join(', ')})`
      } else {
        result += `${platform} ${versions[0]}`
      }
    }

    // Adiciona plataformas sem versão
    if (sortedNoVersion.length > 0) {
      if (result !== '') result += ', '
      result += sortedNoVersion.join(', ')
    }

    return result
  }

  return (
    <S.Wrapper data-testid='PlatformsComponent'>
      <p>{groupSystems(platforms)}</p>
    </S.Wrapper>
  )
}

export default Platforms
