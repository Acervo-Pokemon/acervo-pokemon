// fofoqueira (e.e)
import { getPaged, navigate, details } from '../services/pokemonService'

export async function getFirstPage(limit) {
  try {
    return await getPaged(limit)
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

export async function getDetails(url) {
  try {
    return await navigate(url)
  } catch (error) {
    throw error
  }
}

export function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}