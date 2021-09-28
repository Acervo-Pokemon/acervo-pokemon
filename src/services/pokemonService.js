import api from './api'

const endpoint = '/pokemon'

export async function getPaged(limit=10, offset=0) {
  try {
    const response = await api.get(`${endpoint}/?limit=${limit}&offset=${offset}`)
    return response.data

  } catch (error) {
    console.log('Erro ao listar: ' + error)
  }
}