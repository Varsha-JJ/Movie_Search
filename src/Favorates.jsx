import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import Favcard from './Favcard';


const Favorates = () => {
    const result = useSelector((state)=>state.datastore.datas) ?? [];
  return (
    <div>
      <Container>
        <Row>
          {result?.map((item)=>(
            <Col><Favcard image={item.Poster} id={item.imdbID}/></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Favorates
