import React from 'react';
import { Form, Button } from 'reactstrap'

const AppForm = (props) => (
    <Form style={{paddingTop: '20px'}} onSubmit={props.getRecipe}>
    <input type="text" name="recipeName"/>
    <Button style={{backgroundColor: 'Black'}}>Search</Button>
    </Form>
)

export default AppForm