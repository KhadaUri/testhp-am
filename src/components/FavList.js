import React, {useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Dropdown from './Dropdown';

const FavList = () => {
    const { listaFavoritos } = useSelector ( state => state.storeData);
   // console.log(listaFavoritos());

    return ( 
        <> 
    {          
      listaFavoritos.map( character => {
        return( 
            <p className='boxinfo_name'> { character.name } </p>   
                         
        ) 
         })  
    }    
  </>
     );
}
 
export default FavList;