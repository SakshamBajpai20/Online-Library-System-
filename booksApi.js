export const fetchBooks = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // temporary API for structure testing
  const data = await response.json();
  // Transform to your book structure as needed:
  return data.slice(0, 10).map((item, index) => ({
    id: item.id.toString(),
    title: item.title,
    author: 'Author ' + (index + 1),
    description: item.body,
    rating: 4 + (index % 1),
    category: ['Fiction', 'Non-Fiction', 'Sci-Fi'][index % 3],
  }));
};