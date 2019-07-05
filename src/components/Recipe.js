import React from 'react';

const API_KEY = 'f5f368929a20f2763885b5ac2306bd1f'

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.item.title
        const request = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
        const response = await request.json()
        console.log(response)
    }
    render() {
        console.log(this.props)
        return (
            <div>Test</div>
        )
    }
}

export default Recipe