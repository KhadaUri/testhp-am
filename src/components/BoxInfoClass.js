import React, {Component} from 'react';
import FilterBTN from './FilterBTN';
import AddFav from './AddCharacter';

class BoxInfoClass extends Component {
    state = {
        filterStudents : '',
        endpoint: 'http://localhost:5000/characters',
        charactersnof : null,
        characters : []
    }

    fetchCharacters = async () => {
        const response = await fetch(this.state.endpoint)
        const resJSON = await response.json()
        this.setState({
            charactersnof: resJSON
        })
        
    }

    componentDidMount() {
        this.fetchCharacters()
    }

    setFilterStudents(){
        if(this.filterStudents==='estudiante'){
            const result = this.state.charactersnof.filter(character => character.hogwartsStudent === true);
            console.log(result);
            this.setState(() => {
                return {
                    filterStudents : true
                }
            });
          }  
          if(this.filterStudents==='staff'){
            const result2 = this.state.charactersnof.filter(character => character.hogwartsStudent === false);
            console.log(result2);
            this.setState(() => {
                return {
                    filterStudents : true
                }
            });
          }          
    }
   

    render(){
        return(
            <>
                <FilterBTN 
                    filter={this.props.filterStudents}
                    setFilterStudents={this.props.setFilterStudents}
                /> 
                
            {!this.state.charactersnof ? 'Loading' :
              this.state.charactersnof.map( character => {
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
                 })}              
            </>
        );
    }
}

export default BoxInfoClass;


