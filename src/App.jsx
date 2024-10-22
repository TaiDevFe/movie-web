import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Banner from './components/Banner'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch'
import { MovieProvider } from './context/MovieProvider'
import Modal from 'react-modal';

function App() {

  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    setMovieSearch([])
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const fetchMovie = async () => {
      const apiKey = import.meta.env.VITE_API_KEY; // Lấy API key từ biến môi trường
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ])

      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);

    };
    fetchMovie();
  }, []);


  return (
    <>
      <MovieProvider>
        <div className='bg-black'>
          <Header onSearch={handleSearch} />
          <Banner />
          {movieSearch.length > 0 ? <MovieSearch data={movieSearch} title={"Kết quả tìm kiếm"} /> : (
            <>
              <MovieList title={"Phim hót"} data={movie} />
              <MovieList title={"Phim Đề cử"} data={movieRate} />
            </>
          )}
        </div>
      </MovieProvider>
    </>
  )
};


export default App
