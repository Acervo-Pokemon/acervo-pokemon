// fofoqueira (e.e)
import { getPaged, navigate, getName } from '../services/pokemonService'

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

export async function getByName(name) {
  try {
    const nameFormat = name.toString().trim().toLowerCase();
    return await getName(nameFormat)
  } catch (error) {
    throw error
  }
}