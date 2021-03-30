import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import react from 'react'
import propTypes from 'prop-types';
import {Card,Button} from 'react-bootstrap'
const profile = ({Listprof,children,displayname}) => {
  return (
    <div>
      {Listprof.map((el,index)=><Card key={index} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={children} />
  <Card.Body>
    <Card.Title>{el.fullName}</Card.Title>
    <Card.Text>
      {el.bio}
    </Card.Text>
    <Card.Text>
      {el.profession}
    </Card.Text>
    <Button variant="primary" onClick={()=>displayname(el.fullName)} >display name</Button>
  </Card.Body>
</Card>)}
    </div>
  )
}
profile.propTypes = {
    Listprof: propTypes.object,
    displayname: propTypes.func
  }
  profile.defaultProps = {
    Listprof:[{fullName:"Zahra Boukthir",
    bio:"développeur web, dynamique et je m’adapte facilement dans le groupe de travail",
    profession:"Developpeur web"
  }]
  }
export default profile