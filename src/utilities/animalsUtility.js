const getImageUrl = (file) => new URL(`../assets/${file}`, import.meta.url).href

export { getImageUrl };