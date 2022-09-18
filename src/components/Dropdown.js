import React, { useState, useEffect, useRef } from "react";


const Dropdown = ({ listaFavoritos = [], dropdownTitle })  =>  {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = (event) => {
    // console.log(event);
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const clickOutsideHandler = (event) => {
    if (dropdownListRef.current) {
      if (
        dropdownListRef.current.contains(event.target) ||
        activatorRef.current.contains(event.target)
      ) {
        return;
      }

      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector("a").focus();
      document.addEventListener("mousedown", clickOutsideHandler);
    } else {
      document.addEventListener("mousedown", clickOutsideHandler);
    }
  }, [isOpen]);

  return (
    <div className='dropdown_wrapper' onKeyUp={keyHandler}>
      <button
        className='dropdown_activator'
        aria-haspopup="true"
        aria-controls={'dropdownTitle'}
        onClick={clickHandler}
        ref={activatorRef}
      >
        {'Favoritos'}{""}
        {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" className='svg__add'
          width="20" 
          height="20" 
          fill="#f1f1f1" 
          class="bi bi-bookmark" 
          viewBox="-5 -5 20 20">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
        </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className='svg__add'
            width="20" 
            height="20" 
            fill="#fff" 
            class="bi bi-bookmark" 
            viewBox="-5 -5 20 20">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
          </svg>
        )}
      </button>
      <ul
        ref={dropdownListRef}
        className={`${'dropdown_item_list'} ${isOpen ? 'active' : ""} `}
      >
        
        {listaFavoritos.length > 0 ?
           listaFavoritos.map((item, index) => {
          return (
            <li className={'item_list'} key={index}>      
                 <div className='dropdown_img' >       
                <img className='dropdown_img__lsection' src={ item.image } alt="icons" />
                <a>{item.name}</a>
              </div>               
            </li>
          );
            })       
        :
          <li className={'item_list'}>      
            <div className='dropdown_img' >       
            <a>No has agregado ningún personaje</a>
          </div> 
           </li>   
        }
      </ul>
    </div>
  );
}

export default Dropdown;
