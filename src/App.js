import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import AppForm from './components/AppForm';
import { Container } from 'reactstrap'
import List from './components/List';

const API_KEY = 'f5f368929a20f2763885b5ac2306bd1f'


class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    e.preventDefault()
    const recipeName = e.target.elements.recipeName.value
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)
    const data = await api_call.json()
    this.setState({
      recipes: data.recipes
    })
  };
render() {
  return (
  
    <div className="App">
     <AppNavbar/>   
     <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <AppForm getRecipe={this.getRecipe}/>
    </Container>
    <List recipes={this.state.recipes}   />
    </div>
  
  )
}
}

export default App;
