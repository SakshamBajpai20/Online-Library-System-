import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
      <p className="mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 underline">Go back to Home</Link>
    </div>
  );
}

export default NotFound;