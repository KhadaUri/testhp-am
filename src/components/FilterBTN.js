import React, {useEffect, useState} from 'react';
import Characters from './../api/hp-characters.json';
import { useSelector } from 'react-redux';

const FilterBTN = () => {   
    const [filterStudents, setFilterStudents] = useState('estudiante'); 
    const [characters, setCharacters] = useState([]);   
    const { listaFavoritos } = useSelector ( state => state.storeData);

    useEffect (() => {
      //console.log(filterStudents);
      if(filterStudents==='estudiante'){
        const result = Characters.characters.filter(character => character.hogwartsStudent === true);
       //console.log(result);
        setCharacters(result);
      }
      if(filterStudents==='staff'){
        const result2 = Characters.characters.filter(character => character.hogwartsStudent === false);
        setCharacters(result2);
      }
      if(filterStudents==='favoritos'){
        setCharacters(listaFavoritos);
      }
      console.log(characters);
    },[filterStudents]);
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