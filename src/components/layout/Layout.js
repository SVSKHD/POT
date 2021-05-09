import Footer from "./Footer"
import NavBar from "./Navbar"




const Layout = (props) =>{
    return(
    <div>
        <NavBar/>
        <br/>
        {props.children}
        <br/>
        <Footer/>
    </div>
    )
}
export default Layout