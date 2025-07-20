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
        style={{ padding: '0.7rem', width: '100%', maxWidth: '400px', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
            <img
              src={book.image || `https://picsum.photos/seed/${book.id}/300/180`}
              alt={book.title}
              style={{ borderRadius: '6px', width: '100%', maxWidth: '250px', height: 'auto', objectFit: 'cover', marginBottom: '0.5rem' }}
            />
            <h3 style={{ margin: '0.3rem 0', fontSize: '1.1rem' }}>{book.title}</h3>
            <p style={{ margin: '0.2rem 0', color: '#555' }}>by {book.author}</p>
            <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center' }}>{book.description.slice(0, 100)}...</p>
            <p style={{ fontWeight: 'bold', color: '#007bff', margin: '0.2rem' }}>Rating: {book.rating} ⭐</p>
            <Link to={`/books/details/${book.id}`} style={{ marginTop: '0.5rem', color: '#fff', backgroundColor: '#007bff', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none' }}>View Details</Link>
          </li>
        ))}
        {filteredBooks.length === 0 && <p>No books found in this category.</p>}
      </ul>
    </div>
  );
}

export default BrowseBooks;