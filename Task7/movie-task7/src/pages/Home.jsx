import { useState, useEffect } from 'react';
import { searchMovies } from '../api/omdbService';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState('');
  const [query, setQuery] = useState('batman');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchData = async () => {
    try {
      const data = await searchMovies(query, type, page);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults));
        setError(null);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies.');
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, type, page]);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <SearchBar onSearch={(q) => { setQuery(q); setPage(1); }} />
      <FilterDropdown selectedType={type} onChange={(t) => { setType(t); setPage(1); }} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
      {totalResults > 10 && (
        <Pagination currentPage={page} totalResults={totalResults} onPageChange={setPage} />
      )}
    </div>
  );
}