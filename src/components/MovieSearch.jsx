import PropType from 'prop-types';
import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieProvider';




const MovieSearch = ({ title, data }) => {
    const {handleTrailer} = useContext(MovieContext)
    
    return (
        <div className='text-white p-6 mb-10'>
            <h2 className='uppercase text-xl mb-4'>{title}</h2>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
                {data && data.map((item) => (
                    <div key={item.id} className='w-[200px] h-[300px] relative group' onClick={() => handleTrailer(item.id)}>
                        <div className=' group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer'>
                            <div className='absolute top-0 left-0 w-full h-full bg-black/40'></div>
                            <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt={item.title} className='w-full h-full object-cover'></img>
                            <div className='absolute bottom-4 left-2'>
                                <h3 className='uppercase text-md'>{item.title || item.original_title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
    

MovieSearch.propTypes = {
    title: PropType.string,
    data: PropType.array,
}
export default MovieSearch;