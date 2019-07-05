import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Col, Button } from 'reactstrap';
    import {Link} from 'react-router-dom'



class AppCard extends Component {
    render(props) {
        return (
            <Col sm="3">
              <Card style={{marginTop: '2rem'}}>
                <CardImg  top width="100%" src={this.props.item.image_url} alt='' style={{height: '250px', width: '200px'}}  />
                  <CardBody>
                    <CardTitle size='large' >
                    {this.props.item.title.length < 20 
                    ? `${this.props.item.title}` : `${this.props.item.title.substring(0, 20)}`
                    }</CardTitle>
                    <Button style={{backgroundColor: 'Black'}}>
                    <Link className='text-white' 
                    to={{pathname: `/recipe/${this.props.item.recipe_id}`,
                    state: {item: this.props.item}}}>
                    View Recipe</Link>
                    </Button>
                   </CardBody>
                </Card>
            </Col>
        );
    }
}

export default AppCard;