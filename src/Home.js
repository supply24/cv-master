import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, Col } from "react-bootstrap"



const Home = () => {

 
  return (
    <div>
      <Col align="center" style={{ marginTop: 50, marginBottom: 50 }}>Welcome to My CV Applicationq5</Col>
      <div class="btn-group-flex-wrap" role="group" aria-label="Responsive button group"
      >


        <Link to="/cvclean"><Button>Clean</Button></Link>
        <Link to="/cvself"><Button>Self</Button></Link>
        <Link to="/cvstorage"><Button>Storage</Button></Link>
        <Link to="/cvkitchen"><Button>Kitchen
        </Button></Link>
        <Link to="/cvbud"><Button>Bud</Button></Link>
        <Link to="/pbclean"><Button>Personal Letter
        </Button></Link>
      </div>

    </div>
  )
}

export default Home
