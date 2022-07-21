export const getGifs = async (category) => {
  const API_KEY = '0DAdo4MZjN8RsddO3Qa3hKbvP5lQr4xT'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifs
}
