import {
    Card,
    CardBody,
} from "reactstrap"
import SV from "../../SV.png"
import OffcanvasMenu from 'react-offcanvas-menu-component'; 
import {FaFacebookF , FaInstagram , FaLinkedinIn } from "react-icons/fa"
import {Button , ButtonGroup} from "reactstrap"

const NavBar = () =>{
    const FooterIcons = () =>{
        return(
            <div>
                <ButtonGroup>
                    <Button outline color="light"><FaFacebookF size={30}/></Button>
                    <Button outline color="light"><FaInstagram size={30}/></Button>
                    <Button outline color="light"><FaLinkedinIn size={30} /></Button>
                </ButtonGroup>
            </div>
        )
    }
return(
    <div>
      
        <Card className="shadow-lg">
          <CardBody>
            <br/>
            <div align="center">
            <OffcanvasMenu
            config={{
                width: 100, // you can modify default width
                push: true // if you want to enable push feature
               }}
            menu={[
                    {text: 'Home', link: '/'},
                ]}
            header={ // you can add logo to the header for example
                    <img src={SV}
                    className="menu-logo" 
                    alt="logo" 
                    width="100" 
                    height="100" />
                }
            footer={<FooterIcons/>}
            />
            </div>
            </CardBody>
        </Card>  
     
    </div>
)
}
export default NavBar