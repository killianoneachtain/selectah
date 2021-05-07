import React, { useContext } from "react";
import { Grid, Input, Dropdown } from 'semantic-ui-react'
import { GenresContext } from '../../contexts/genresContext' 


const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    //console.log("e in TextChange : ",e);
    handleChange(e, 'name', e.target.value);
  };
  const handleGenreChange = e => {
    //console.log("HERE HANDLING GENRECHANGE");    
   // console.log("e.target.value : ", e.target.value);
    handleChange(e, 'genre', e.target.value);    
  };

  const genreOptions = context.genres.map(genre => {
                return {
                  key: genre.id,
                  value: genre.name,
                  index: genre.index,
                  text: genre.name,
                  id: 'genre'
                }
              })

  return (
  
      <Grid columns={3}>
        <Grid.Column color='yellow'>          
            <Input size='big' fluid icon='users' iconPosition='left' placeholder='Search Artists...' onChange={handleTextChange} />
       </Grid.Column> 
       
       <Grid.Column color='yellow'></Grid.Column>
        
        <Grid.Column color='grey' inverted='true'>   
          <Dropdown     
              id='genre'  
              placeholder="Select a Genre"    
              fluid={true}               
              clearable             
              selection                          
              options={genreOptions}
              onChange={handleGenreChange}         
            />         
        </Grid.Column>
      </Grid>
    
  );
};

export default FilterControls;