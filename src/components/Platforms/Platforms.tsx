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

  // Ordena as versões de cada plataforma dentro dos parenteses
  function sortedGrouped(
    obj: Record<string, string[]>
  ): Record<string, string[]> {
    const novoObj = {} as Record<string, string[]>

    for (const chave in obj) {
      novoObj[chave] = obj[chave].sort((a, b) => {
        // Verifica se ambos os valores são números
        if (!isNaN(Number(a)) && !isNaN(Number(b))) {
          // Ordena números com um dígito antes dos com dois dígitos
          return a.length - b.length || a.localeCompare(b)
        }
        return a.localeCompare(b) // Ordena alfabeticamente caso não sejam números
      })
    }

    return novoObj
  }

  const groupSystems = (platforms: string[]): string => {
    const grouped: { [key: string]: string[] } = {}

    platforms.forEach((item) => {
      const firstSpaceIndex = item.indexOf(' ')
      const platform = item.substring(0, firstSpaceIndex)
      const version = item.substring(firstSpaceIndex + 1)

      // Adiciona a versão ao array de cada plataforma
      if (!grouped[platform]) {
        grouped[platform] = []
      }
      grouped[platform].push(version)
    })

    const sortedGroupedPlatforms = sortedGrouped(grouped)

    let result = ''
    // Obter as chaves ordenadas alfabeticamente
    const sortedPlatforms = Object.keys(sortedGroupedPlatforms).sort()
    for (const platform of sortedPlatforms) {
      if (result !== '') {
        result += ', '
      }
      if (sortedGroupedPlatforms[platform].length > 1) {
        result += `${platform} (${sortedGroupedPlatforms[platform].join(', ')})`
      } else {
        result += `${platform} ${sortedGroupedPlatforms[platform][0]}`
      }
    }

    return result
  }

  return (
    <S.Wrapper>
      <p>{groupSystems(platforms)}</p>
    </S.Wrapper>
  )
}

export default Platforms
