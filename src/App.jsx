import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Banner from './components/Banner'
import MovieList from './components/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black'>
        <Header/>
        <Banner/>
        <MovieList title={"Phim hót"}/>
        <MovieList title={"Phim Đề cử"}/>
      </div>
    </>
  )
}

export default App
