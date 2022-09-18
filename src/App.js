import './scss/app.scss';
import BoxInfo from './components/BoxInfo';
import React, {useState} from 'react';
import CApi from './components/CApi';
import Modal from './components/Modal';
import imgHP from './../src/img/HarryPotter.png';
import Dropdown from './components/Dropdown';
import { useSelector } from 'react-redux';
import BoxInfoClass from './components/BoxInfoClass';

function App() {
  const [statusModal, changestatusModal] = useState(false);
  const { listaFavoritos } = useSelector ( state => state.storeData);
  // const store = createStore(reducer);
  // console.log(store.getState());
  // console.log(listaFavoritos);

  return (
    <>
    {/* Modal 1 */}
      <Modal 
          status={statusModal}
          changestatusModal={changestatusModal}
          title={"Agrega un personaje"}
      >
        <div className='Content'>
          <CApi />
        </div> 
      </Modal>      
      <div className='ButtonContainer'>
          <button className='ButtonM' onClick={() => changestatusModal(!statusModal)} > Agregar  
          <svg xmlns="http://www.w3.org/2000/svg" className='svg__add'
          width="16" 
          height="16" 
          fill="#fff" 
          class="bi bi-person-plus-fill" 
          viewBox="-5 -0 16 16">
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
          </button>
          <Dropdown dropdownTitle="" listaFavoritos={listaFavoritos}>
          </Dropdown>
      </div>    
        <img className='img__main' src={imgHP} />  
        <div className='main-container'>   
            <BoxInfoClass />
        </div>             
        </>
  );
}

export default App;
