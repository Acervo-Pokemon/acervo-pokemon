import api from './api'

const endpoint = '/pokemon'

export async function getPaged(limit = 6, offset = 0) {
  try {
    const response = await api.get(`${endpoint}/?limit=${limit}&offset=${offset}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export async function navigate(url) {
  try {
    const response = await api.get(url)
    return response.data
  } catch (error) {
    throw error
  }
}
