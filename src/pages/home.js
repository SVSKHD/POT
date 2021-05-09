import Layout from "../components/layout/Layout"
import {Container , 
        Card , 
        Alert, 
        CardTitle,
        CardText,
        Button , 
        ButtonGroup , 
        Row ,
        Col
    } from "reactstrap"

const Home = () =>{
return(
    <div>
        <Layout>
        <br/>
        <Container>
        <h1>home</h1>
        <h3>Components</h3>
        <h5>Buttons</h5>
        <br/>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <br/>
        <h5>Outline buttons</h5>
        <Button outline color="primary">primary</Button>{' '}
        <Button outline color="secondary">secondary</Button>{' '}
        <Button outline color="success">success</Button>{' '}
        <Button outline color="info">info</Button>{' '}
        <Button outline color="warning">warning</Button>{' '}
        <Button outline color="danger">danger</Button>
        
        <br/>
        <h5>Button Group</h5>
        <ButtonGroup>
        <br/>
        <Button color="primary"  >One</Button>
        <Button color="primary"  >Two</Button>
        <Button color="primary"  >Three</Button>
        </ButtonGroup>
        <br/>

        <h5>Card bodies</h5>
        <Row>
            <Col sm="6">
                <Card body>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
                </Card>
            </Col>
       </Row>

       <br/>
       <h5>Notifications</h5>
       
       <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>
      <Alert color="success">
        This is a success alert — check it out!
      </Alert>
      <Alert color="danger">
        This is a danger alert — check it out!
      </Alert>
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert color="info">
        This is a info alert — check it out!
      </Alert>
      <Alert color="light">
        This is a light alert — check it out!
      </Alert>
      <Alert color="dark">
        This is a dark alert — check it out!
      </Alert>



        </Container>
        </Layout>
    </div>
)
}
export default Home