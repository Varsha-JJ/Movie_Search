import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Result = (props) => {
  return (
    <div>
      <Link to={`/view/${props.id}`}>
      <Card style={{ width: '18rem',  }} className='mt-5'>
        <Card.Img variant="top" src={props.image} height="400px" />
      </Card>
      </Link>
    </div>
  )
}

export default Result
