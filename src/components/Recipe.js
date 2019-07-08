import React from 'react';
import {Container, Jumbotron, Button} from 'reactstrap'

const API_KEY = 'f5f368929a20f2763885b5ac2306bd1f'

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.item.title
        const request = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
        const response = await request.json()
        this.setState({
            activeRecipe: response.recipes[0]
        })
        console.log(this.state)
    }
    render() {
        return (
      
           <Container fluid>
          <Jumbotron style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <img src={this.state.activeRecipe.image_url} alt='nout'/>
        <Container >
          <h1 className="display-3">{this.state.activeRecipe.title}</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
        <Container style={{display: 'flex', justifyContent: 'right', alignItems: 'right'}}>
      <Button >Add To Faves</Button>
      <Button style={{marginLeft: '200px'}}>Back</Button>
      </Container>
      </Container>
    
        )
    }
}

export default Recipe