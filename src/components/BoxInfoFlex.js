import Characters from './../api/hp-characters.json';
import React from 'react';


const BoxInfoFlex = () => {
  const char = Characters;
  const Categories = ({categories, filterItems}) =>{
    return(
      <div className='btn-container'>
        {categories.map((category, index)=>{
          return <button  
                   key={index} 
                   className='btn' 
                   onClick={() =>filterItems(category)}
                   >
            {category}
          </button>
        })}
      </div>
    )
  }
  
  const allCategories = ['all', ...new Set(char.map((item) =>item.category))]
  
  
  const Menu = ({char}) =>{

    return(
      <div className='menu-container'>
        {char.map((menuItem) => {
          const {house, name, hogwartsStudent, gender, image, eyeColour} = menuItem;
          return(
            <article className='menu-list'>
              <div className='img-container'>
              <img src={image} alt=''/>
              </div>
              <div className='info-item'>
                <header className='header-title'>
                  <h4>{name}</h4>
                  <p className='prices'>{gender}</p>
                </header>
                <p className='item-text'>{eyeColour}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  };
  
  const [menuItems, setMenuItems] = React.useState(char);
  const [categories, setCategories] = React.useState(allCategories);
  
  const filterItems = (hogwartsStudent) =>{
    if(hogwartsStudent === 'all'){
      setMenuItems(char);
      return;
    }
    const newItems = char.filter((item)=> item.hogwartsStudent === hogwartsStudent)
    setMenuItems(newItems);
  }
 
    return (  
      <section className='container'>
      <div>
        <h1>Our menu</h1>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu menu={menuItems}/>
    </section>
     );
}
 
export default BoxInfoFlex;