import { capitalize } from "./pokemonControl"

const validStatTypes = ['hp', 'attack', 'defense', 'speed']

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

export function handleStatsTableTitle(props) {
  props.pokemon.stats.map((item) => {
    if (validStatTypes.includes(item.stat.name)) {
      props.setStatsTableTitle(title => [...title, capitalize(item.stat.name) + ':'])
    }
  })
}

export function handleStatsTableData(props) {
  let bases = []
  props.pokemon.stats.map((item) => {
    if (validStatTypes.includes(item.stat.name)) {
      bases.push([item.base_stat])
    }
  })
  props.setStatsTableData(data => [...data, bases])
}
