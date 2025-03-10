import axios from 'axios'

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/infos', {
      params: {
        'populate[aside][populate]': '*',
        'populate[content][populate]': '*',
        'populate[header][populate]': '*'
      }
    })

    return response.data
  } catch (error) {
    console.error('Erro na requisição:', error)
    return null
  }
}
