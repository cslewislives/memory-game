import React from 'react';
import Container from '../Container';

const Jumbotron = props => (

    <div className="jumbotron text-center">
        <Container>
            {props.children}
        </Container>
    </div>

);

export default Jumbotron;