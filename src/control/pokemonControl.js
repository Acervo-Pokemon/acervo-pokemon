// fofoqueira (e.e)
import { getPaged, navigate } from '../services/pokemonService'

export async function getFirstPage() {
  try {
    return await getPaged()
  } catch (error) {
    throw error
  }
}

export async function navigateTo(url) {
  try {
    return await navigate(url)
  } catch (error) {
    throw error
  }
}