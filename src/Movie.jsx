import React, { useState,useEffect} from 'react';
import './Movie.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Result from './Result';

const Movie = () => {
    const [moviedata,setmoviedata] = useState([])
    const [searchdata,setsearchdata] = useState('')
    const change = (event)=>{
      setsearchdata(event.target.value);
    }
    console.log("searchdata",searchdata);

    useEffect(()=>{
      if(searchdata.trim() !== '')
      {
        axios.get(`https://www.omdbapi.com/?s=${searchdata}&apikey=7cbef1e2`).then((res)=>{
          console.log("res",res);
          setmoviedata(res.data.Search)
      }).catch((err)=>{
        console.log("err");
      });
      }
    },[searchdata])

    
    
    console.log("moviedata",moviedata);

  return (
    <div>
      <Card className='d-flex justify-content-center bg-clr'>
        <Form className="d-flex mt-5 justify-content-center mb-5">
              <Form.Control
                type="search"
                placeholder="Search movie"
                className="me-2 search-dty"
                aria-label="Search"
                style={{width:'30rem',outline: 'none'}}
                onChange={change}
              />
        </Form>
      </Card>
      <Container>
        <Row>
          {moviedata?.map((item)=>(
            <Col><Result image={item.Poster} id={item.imdbID}/></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Movie
