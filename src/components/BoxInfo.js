import React, {useEffect, useState} from 'react';
import Characters from './../api/hp-characters.json';
import FilterBTN from './FilterBTN';
import { useSelector,useDispatch } from 'react-redux';
import AddFav from './AddCharacter';



const BoxInfo = () => {  
    const [filterStudents, setFilterStudents] = useState('estudiante'); 
    const [characters, setCharacters] = useState([]);   
    const { listaFavoritos } = useSelector ( state => state.storeData);

    // useEffect (() => {
    //   //console.log(filterStudents);
    //   if(filterStudents==='estudiante'){
    //     const result = Characters.characters.filter(character => character.hogwartsStudent === true);
    //    //console.log(result);
    //     setCharacters(result);
    //   }
    //   if(filterStudents==='staff'){
    //     const result2 = Characters.characters.filter(character => character.hogwartsStudent === false);
    //     setCharacters(result2);
    //   }
    //   if(filterStudents==='favoritos'){
    //     setCharacters(listaFavoritos);
    //   }
    //   console.log(characters);
    // },[filterStudents]);

  
  // const [characters, setCharacters] = useState();
  // useEffect(() => {
  //   fetch('http://localhost:5000/hp-characters', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     headers: new Headers({
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //     }),
  // })
  //     .then((response) => {
  //       response.json()
  //       console.log(response);
  //     })
  //     .then((characters) => {
        
  //       setCharacters(characters)
  //     })
  // }, []);

    return (  
      <>        
            <FilterBTN
              filter={filterStudents}
              setFilterStudents={setFilterStudents}
            />
        {          
          characters.map( character => {
            return( 
             
            <div className='main' >
              <div className={ 
                  character.house === 'Gryffindor' ? 'boxinfo_container_g' 
                : character.house === 'Slytherin' ? 'boxinfo_container_s' 
                : character.house === 'Hufflepuff' ? 'boxinfo_container_h' 
                : character.house === 'Ravenclaw' ? 'boxinfo_container_r' 
                : 'boxinfo_container_g' 
             } >
              <div className='boxinfo_img' >       
                <img className='boxinfo_img__lsection' 
                  src={ character.image } 
                  alt="icons" />
              </div>               
              <div className={
                  character.alive ? 'boxinfo_img__rsection'
                : 'boxinfo_img__rsection__d'
              }>
                <div className='boxinfo_img__ribbon' >
                  {window.innerWidth < 900 ? 
                    <p className='boxinfo_name'> { character.name } </p> 
                  : <p className='boxinfo_status' > { character.alive 
                  ? ' Vivo ' : 'Finado' } / { character.hogwartsStudent  ? ' Estudiante ' 
                  : ' Staff ' }  </p>  
                  }
                  <AddFav character={character} />
                </div>
                {window.innerWidth > 900 ? <p className='boxinfo_name'> { character.name } </p> 
                :  <p className='boxinfo_status' > { character.alive ? ' Vivo ' : 'Finado' } / 
                { character.hogwartsStudent ? ' Estudiante ' : ' Staff ' } </p>}    
                <span className='boxinfo_rsection__labels'> Cumpleanos: </span> <span className='boxinfo_rsection__labelsinfo'>  { character.dateOfBirth } </span> <br />
                <span className='boxinfo_rsection__labels'> Genero:</span> <span className='boxinfo_rsection__labelsinfo'> { character.gender } </span> <br />
                <span className='boxinfo_rsection__labels'> Color de ojos:</span> <span className='boxinfo_rsection__labelsinfo'> { character.eyeColour }  </span> <br />
                <span className='boxinfo_rsection__labels'> Color de pelo: </span>  <span className='boxinfo_rsection__labelsinfo'> { character.hairColour } </span> <br />              
              </div>          
              </div>
              </div>        
            ) 
             })  
        } 

       
      </>
     );
} 
 
export default BoxInfo;