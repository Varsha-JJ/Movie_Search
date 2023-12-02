import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import './Movie.css';
import { setdatas } from './DataSlice';
import { useDispatch,useSelector} from 'react-redux';
import { CardBody } from 'react-bootstrap';

const Result = (props) => {
  

  
  const dispatch = useDispatch()

  const storedata = () =>{
    dispatch(setdatas(props))
  }
  const result = useSelector((state)=>state.datastore.datas)
  console.log(result,'resu');


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

export default Result
