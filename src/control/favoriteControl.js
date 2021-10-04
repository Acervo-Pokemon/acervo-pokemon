// fofoqueira (e.e)
import { isFavorite, getAllFavorite, saveFavorite } from '../services/favoriteService'

export async function isFavoriteControl(data) {
  try {
    console.log('isFavoriteControl')
    return await isFavorite(data)
  } catch (error) {
    throw error
  }
}

export async function getAllFavoriteControl() {
  try {
    return await getAllFavorite()
  } catch (error) {
    throw error
  }
}

export async function saveFavoriteControl(data) {
  try {
    return await saveFavorite(data)
  } catch (error) {
    throw error
  }
}