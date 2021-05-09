import {Card , CardBody ,Container,Button,ButtonGroup,Row,Col} from "reactstrap"
import {FaFacebookF , FaInstagram , FaLinkedinIn } from "react-icons/fa"

const Footer = () =>{
    return(
    <div>
        <Container fluid>
            
            <Card className="shadow-lg">
            
                <CardBody>
                <Row>
                <Col>
                    <h1 className="display-3">People of Tirupati</h1>
                </Col>
                <Col>
                    <ButtonGroup>
                    <Button outline color="dark"><FaFacebookF size={30}/></Button>
                    <Button outline color="dark"><FaInstagram size={30}/></Button>
                    <Button outline color="dark"><FaLinkedinIn size={30} /></Button>
                    </ButtonGroup>
                </Col>
                </Row>
                </CardBody>
               
            </Card>
            
           
        </Container>
    </div>
    )
}
export default Footer