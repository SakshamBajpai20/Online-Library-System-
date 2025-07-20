import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../slices/booksSlice';

function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.slice(0, 10));

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div style={{ padding: '1rem', maxWidth: '1200px', margin: '0 auto', background: 'linear-gradient(to right, #fdfbfb, #ebedee)', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', margin: '1rem 0', color: '#333' }}>📚 Welcome to the Online Library 🌟</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: '#555' }}>✨ Explore Fiction, Non-Fiction, and Sci-Fi gems to brighten your reading journey ✨</p>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', padding: '0', listStyle: 'none' }}>
        {books.map((book) => (
          <li key={book.id} style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.8rem' }}>
            <img
              src={book.image || `https://picsum.photos/seed/${book.id}/300/180`}
              alt={book.title}
              style={{ borderRadius: '8px', width: '100%', maxHeight: '160px', objectFit: 'cover', marginBottom: '0.5rem' }}
            />
            <h3 style={{ margin: '0.5rem 0', fontSize: '1.1rem', color: '#333', textAlign: 'center' }}>📖 {book.title}</h3>
            <p style={{ margin: '0.2rem 0', color: '#555', fontSize: '0.95rem' }}>✍️ {book.author}</p>
            <p style={{ fontSize: '0.85rem', color: '#777', textAlign: 'center', margin: '0.4rem 0' }}>{book.description.slice(0, 80)}...</p>
            <Link to={`/books/details/${book.id}`} style={{ marginTop: '0.5rem', color: '#fff', background: 'linear-gradient(90deg, #007bff, #00c6ff)', padding: '0.5rem 1rem', borderRadius: '20px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold', transition: 'background 0.3s' }}>🔍 View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
