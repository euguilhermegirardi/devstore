export default async function Search() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return <h2>Hello, search!</h2>
}
