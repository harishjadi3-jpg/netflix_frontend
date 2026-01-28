import React, { useEffect ,useState} from 'react'
import cards from '../../src/assets/cards/Cards_data'
import { useNavigate } from 'react-router-dom';
const TitleCards = (props) => {
  const navigate=useNavigate();
  const [moviesData,setMoviesData]=useState([]);
  const TMDB = import.meta.env.VITE_TMDB_API_KEY;
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2MwZTU0MmIyZWRlZjcyNTA0YWJjM2IyMjI1ZWIxYSIsIm5iZiI6MTc2OTI4MzUyMS4xMzIsInN1YiI6IjY5NzUxZmMxMTc4YzM0ODQzZWEzNmExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mhei1hvdnLsOg-UkiGQOBt78CpJqbQ6QrZv4CQYM8b4'
  }
};
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${props.title}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setMoviesData(res.results))
  .catch(err => console.error(err));
  },[])
  return (
    <div className="mt-3">
    <h1 className='font-extrabold text-orange-800 pl-4'>{props.title=="" ? "Popular on Netflix":props.title}</h1>
    <div className="pl-4 flex flex-nowrap w-full overflow-x-auto overflow-y-hidden scroll-smooth gap-4 h-[30%] no-scrollbar cursor-pointer">
      {moviesData.map((moviesData,index)=>{
          return <div key={index} className="card w-[180px] flex-shrink-0">
            <img src={`https://image.tmdb.org/t/p/w500${moviesData.backdrop_path}`} alt="image" className='h-[80%] w-full transition-transform duration-300 hover:scale-105 ' onClick={()=>{navigate("/player")}}/>
            <p className='font-semibold text-white'>{moviesData.original_title}</p>
          </div>
      })}
    </div>
    </div>
  )
}

export default TitleCards
