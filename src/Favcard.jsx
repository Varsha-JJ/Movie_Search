import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Favcard = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem',  }} className='mt-5'>
        <Link to={`/view/${props.id}`}>
        <Card.Img variant="top" src={props.image} height="400px" className='imgstyls' />
        </Link>
        {/* <button className='btnsty' onClick={storedata}><CiStar className='b'/></button> */}
      </Card>
    </div>
  )
}

export default Favcard
