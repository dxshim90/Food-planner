import React from 'react';
import { Container, Row } from 'reactstrap'
import AppCard from './AppCard'


const List = (props) => (
    <Container fluid={true}>
    <h1 style={{textAlign: 'center', marginTop: '2rem'}}>Find Yummy Food!</h1>
<Row>
    {props.recipes.map(item => (
        <AppCard item={item} key={item.recipe_id}/>
    ))}
    </Row>
</Container>
)

export default List