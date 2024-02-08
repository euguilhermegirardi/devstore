import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  const featuredProducts = data.products.filter((product) => product.featured)
  return Response.json(featuredProducts)
}
