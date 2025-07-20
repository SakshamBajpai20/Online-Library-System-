import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../slices/booksSlice';

function AddBook() {
  const [form, setForm] = useState({ title: '', author: '', description: '', rating: '', category: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.description || !form.rating || !form.category) {
      alert('Please fill in all fields');
      return;
    }
    dispatch(addBook({ ...form, id: Date.now().toString() }));
    navigate(`/books/${form.category}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2 max-w-md mx-auto">
      {['title', 'author', 'description', 'rating', 'category'].map((field) => (
        <input
          key={field}
          type="text"
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          className="border p-2 w-full"
        />
      ))}
      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Add Book</button>
    </form>
  );
}

export default AddBook;