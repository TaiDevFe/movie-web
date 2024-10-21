import React from 'react';
import { ReactPropTypes } from 'react';

const MovieList = ({title}) => {
  return <>
    <div className='text-white p-6 mb-10'>
       {title}
    </div>
    </>
};
MovieList.protoTypes = {
  title: PropTypes.string,
}

export default MovieList;