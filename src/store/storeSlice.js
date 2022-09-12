import { createSlice } from '@reduxjs/toolkit'

export const storeSlice = createSlice({
  name: 'storeData',
  initialState:{

    
    personaje: [],
    listaFavoritos: [],

  },
  reducers: {

      onAddFavorito: (state, {payload }) => {
        state.listaFavoritos.push(payload)
        //console.log(state.listaFavoritos)
      },
      

    }

})

    export const { 

    
      onAddFavorito,
      
      
       } = storeSlice.actions