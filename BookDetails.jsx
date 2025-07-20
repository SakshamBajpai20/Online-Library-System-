import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(
    (book) =>
      book.category === category &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {/* Replace with your book image URLs or a default placeholder */}
            <img src={book.image || 'https://via.placeholder.com/300x180?text=Book+Cover'} alt={book.title} />
            <p className="font-semibold">{book.title} by {book.author}</p>
            <Link to={`/books/details/${book.id}`}>View Details</Link>
          </li>
        ))}
        {filteredBooks.length === 0 && <p>No books found in this category.</p>}
      </ul>
    </div>
  );
}

export default BrowseBooks;