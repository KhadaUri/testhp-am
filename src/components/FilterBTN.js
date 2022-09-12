import React, {useEffect} from 'react';

const FilterBTN = ({children, setFilterStudents}) => {     

    return ( 
        <>
        <h1 className='main_title'>Selecciona tu Filtro</h1>
        <div className='button_container__filter'>
            
            <button className='button_filter' onClick={() => setFilterStudents('estudiante')}> Estudiante </button>
            <button className='button_filter' onClick={() => setFilterStudents('staff')}> Staff </button>
            {/* <button className='button_filter' onClick={() => setFilterStudents('favoritos')}> Favoritos </button> */}
        </div>
        </> 
)}
 
export default FilterBTN;