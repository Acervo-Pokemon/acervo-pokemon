
export function handleAbilities(props) {
  let text = ""
  props.pokemon.abilities.map((item) => {
    props.setAbilities((text += item.ability.name + ", ").substring(0, text.length - 2))
  })
}

export function handleTypes(props) {
  let text = ''
  props.pokemon.types.map((item) => {
    props.setTypes((text += item.type.name + ', ').substring(0, text.length - 2))
  })
}

export function handleStats(props) {
  let validTypes = ['hp', 'attack', 'defense', 'speed']
  props.pokemon.stats.map((item) => {
    if (validTypes.includes(item.stat.name)) {
      props.setStats(stats => [...stats,
      {
        name: item.stat.name,
        base_stat: item.base_stat
      }])
    }
  })
}